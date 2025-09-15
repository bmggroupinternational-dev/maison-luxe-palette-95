import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ImageSkeletonProps {
  className?: string;
  animated?: boolean;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
}

export const ImageSkeleton: React.FC<ImageSkeletonProps> = ({
  className,
  animated = true,
  aspectRatio
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]'
  };

  const skeletonVariants = {
    pulse: {
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    },
    shimmer: {
      backgroundPosition: ["200% 0", "-200% 0"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear" as const
      }
    }
  };

  return (
    <motion.div
      variants={animated ? skeletonVariants : undefined}
      animate={animated ? "pulse" : undefined}
      className={cn(
        "bg-gradient-to-r from-muted via-muted/50 to-muted",
        "bg-[length:200%_100%]",
        aspectRatio && aspectRatioClasses[aspectRatio],
        className
      )}
      style={{
        backgroundImage: animated 
          ? "linear-gradient(90deg, hsl(var(--muted)) 25%, hsl(var(--muted)/0.5) 50%, hsl(var(--muted)) 75%)"
          : undefined
      }}
    >
      {/* Shimmer effect overlay */}
      {animated && (
        <motion.div
          variants={skeletonVariants}
          animate="shimmer"
          className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent"
        />
      )}
      
      {/* Optional content for better visual feedback */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 rounded-full bg-muted-foreground/10 flex items-center justify-center"
        >
          <svg 
            className="w-6 h-6 text-muted-foreground/30" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};