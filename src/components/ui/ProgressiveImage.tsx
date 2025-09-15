import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  blurDataURL?: string;
  priority?: 'high' | 'medium' | 'low';
  onLoadComplete?: () => void;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  placeholderSrc,
  blurDataURL,
  className,
  priority = 'medium',
  onLoadComplete,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [placeholderLoaded, setPlaceholderLoaded] = useState(false);

  // Generate a simple blur placeholder if none provided
  const defaultBlurDataURL = `data:image/svg+xml;base64,${btoa(
    `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" fill="#f1f5f9" rx="4"/>
      <rect width="32" height="24" x="4" y="8" fill="#e2e8f0" rx="2"/>
      <circle cx="12" cy="14" r="2" fill="#cbd5e1"/>
      <path d="M4 26l8-8 4 4 8-8 12 12v4H4z" fill="#cbd5e1"/>
    </svg>`
  )}`;

  const placeholder = blurDataURL || defaultBlurDataURL;

  useEffect(() => {
    // Preload the main image
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
      onLoadComplete?.();
    };
    img.src = src;

    // Load placeholder if provided
    if (placeholderSrc) {
      const placeholderImg = new Image();
      placeholderImg.onload = () => setPlaceholderLoaded(true);
      placeholderImg.src = placeholderSrc;
    } else {
      setPlaceholderLoaded(true);
    }
  }, [src, placeholderSrc, onLoadComplete]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Base placeholder with blur effect */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${placeholder})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px) brightness(0.9)',
          transform: 'scale(1.1)' // Slight scale to hide blur edges
        }}
      />

      {/* Low-quality placeholder image */}
      {placeholderSrc && placeholderLoaded && (
        <motion.img
          src={placeholderSrc}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'blur(5px) brightness(0.95)',
            transform: 'scale(1.05)'
          }}
        />
      )}

      {/* High-quality main image */}
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ 
          duration: 0.6, 
          ease: 'easeOut',
          delay: 0.1 
        }}
        className="relative z-10 w-full h-full object-cover"
        loading={priority === 'high' ? 'eager' : 'lazy'}
        fetchPriority={priority === 'medium' ? 'auto' : priority}
        {...(props as any)}
      />

      {/* Loading indicator */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-4 right-4 z-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border-2 border-royal-white/30 border-t-royal-white rounded-full"
          />
        </motion.div>
      )}
    </div>
  );
};