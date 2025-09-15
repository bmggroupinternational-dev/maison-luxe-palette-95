import { useState, useEffect, useCallback } from 'react';

interface ImagePreloadOptions {
  priority?: 'high' | 'medium' | 'low';
  preloadAll?: boolean;
}

interface UseImagePreloaderReturn {
  preloadedImages: Set<string>;
  preloadImage: (src: string, priority?: 'high' | 'medium' | 'low') => Promise<void>;
  isImagePreloaded: (src: string) => boolean;
  preloadProgress: number;
}

const useImagePreloader = (
  initialImages: string[] = [], 
  options: ImagePreloadOptions = {}
): UseImagePreloaderReturn => {
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());
  const [preloadProgress, setPreloadProgress] = useState(0);
  const { priority = 'medium', preloadAll = false } = options;

  const preloadImage = useCallback((src: string, imagePriority: 'high' | 'medium' | 'low' = priority): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (preloadedImages.has(src)) {
        resolve();
        return;
      }

      const img = new Image();
      
      // Set loading priority
      if (imagePriority === 'high') {
        img.fetchPriority = 'high';
      } else if (imagePriority === 'low') {
        img.loading = 'lazy';
      }

      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, src]));
        resolve();
      };

      img.onerror = () => {
        console.warn(`Failed to preload image: ${src}`);
        reject(new Error(`Failed to load image: ${src}`));
      };

      img.src = src;
    });
  }, [priority, preloadedImages]);

  const isImagePreloaded = useCallback((src: string) => {
    return preloadedImages.has(src);
  }, [preloadedImages]);

  // Preload initial images on mount
  useEffect(() => {
    if (initialImages.length === 0) return;

    const preloadImages = async () => {
      const totalImages = initialImages.length;
      let loadedCount = 0;

      const loadPromises = initialImages.map(async (src, index) => {
        try {
          // Stagger loading to prevent overwhelming the browser
          if (index > 0) {
            await new Promise(resolve => setTimeout(resolve, index * 50));
          }
          
          await preloadImage(src, index < 3 ? 'high' : 'medium');
          loadedCount++;
          setPreloadProgress((loadedCount / totalImages) * 100);
        } catch (error) {
          loadedCount++;
          setPreloadProgress((loadedCount / totalImages) * 100);
        }
      });

      if (preloadAll) {
        await Promise.all(loadPromises);
      } else {
        // Load first 3 images immediately, rest in background
        await Promise.all(loadPromises.slice(0, 3));
        Promise.all(loadPromises.slice(3)).catch(() => {});
      }
    };

    preloadImages();
  }, [initialImages, preloadImage, preloadAll]);

  return {
    preloadedImages,
    preloadImage,
    isImagePreloaded,
    preloadProgress
  };
};

export default useImagePreloader;