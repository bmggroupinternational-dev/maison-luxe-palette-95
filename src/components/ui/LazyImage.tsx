import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageSkeleton } from './ImageSkeleton';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: 'high' | 'medium' | 'low';
  showSkeleton?: boolean;
  skeletonClassName?: string;
  placeholderBlur?: boolean;
  onLoadComplete?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  priority = 'medium',
  showSkeleton = true,
  skeletonClassName,
  placeholderBlur = true,
  onLoadComplete,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (priority === 'high') {
      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: '200px', // Start loading 200px before the image enters viewport
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoadComplete?.();
  };

  const handleError = () => {
    setHasError(true);
    console.warn(`Failed to load image: ${src}`);
  };

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)}>
      {/* Skeleton Placeholder */}
      {showSkeleton && !isLoaded && !hasError && (
        <ImageSkeleton className={cn("absolute inset-0", skeletonClassName)} />
      )}

      {/* Actual Image */}
      {isInView && !hasError && (
        <motion.img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            filter: placeholderBlur && !isLoaded ? 'blur(10px)' : 'blur(0px)'
          }}
          transition={{ 
            opacity: { duration: 0.6, ease: 'easeOut' },
            filter: { duration: 0.8, ease: 'easeOut' }
          }}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            className
          )}
          loading={priority === 'high' ? 'eager' : 'lazy'}
          fetchPriority={priority === 'medium' ? 'auto' : priority}
          {...(props as any)}
        />
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="w-16 h-16 mx-auto mb-2 bg-muted-foreground/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
};