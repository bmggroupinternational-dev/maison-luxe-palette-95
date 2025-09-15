import React, { useEffect } from 'react';
import useImagePreloader from '@/hooks/useImagePreloader';

// All images used across the site for preloading
const criticalImages = [
  // Header logo (highest priority)
  '/assets/logo.png',
  
  // Hero and above-the-fold images (high priority)
  '/lovable-uploads/bce1d982-9fcf-4c18-a1ac-cd2fc531fd3a.png',
  
  // Special offers images (high priority - first section)
  '/lovable-uploads/71e2c082-776c-4641-ba29-75d0235037aa.png',
  '/lovable-uploads/777254a0-b59c-4619-88d9-275ba8876547.png',
  '/lovable-uploads/dcbeb7b6-a298-4788-b0d8-903a2f832c45.png',
];

const secondaryImages = [
  // Restaurant and other sections (medium priority)
  '/lovable-uploads/a8e4d933-6da7-460b-9b67-56645a8c215a.png',
  
  // Romance packages images (medium priority)
  '/lovable-uploads/bf2205c7-df76-4de9-8760-3ea82d31a6ba.png',
  '/lovable-uploads/6869a47f-2442-4fb4-a77b-7c7dc0afa205.png',
  
  // Gallery and other images (low priority)
  '/lovable-uploads/1b7338ac-74a6-4aec-a86b-1d89381801a1.png',
  '/lovable-uploads/408ce708-044f-4e1f-822a-d21a90d1b0c8.png',
  '/lovable-uploads/42caf215-9f9a-49b7-ba26-f66213ef9fdf.png',
];

export const ImageOptimizer: React.FC = () => {
  const { preloadImage, preloadProgress } = useImagePreloader(criticalImages, { 
    priority: 'high',
    preloadAll: false 
  });

  useEffect(() => {
    // Preload secondary images after critical ones are loaded
    const preloadSecondaryImages = async () => {
      // Wait a bit for critical images to load first
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Preload secondary images in background
      secondaryImages.forEach((src, index) => {
        setTimeout(() => {
          preloadImage(src, 'medium').catch(() => {
            // Silently handle errors for secondary images
          });
        }, index * 100); // Stagger loading
      });
    };

    preloadSecondaryImages();
  }, [preloadImage]);

  // This component doesn't render anything visible
  return null;
};

export default ImageOptimizer;