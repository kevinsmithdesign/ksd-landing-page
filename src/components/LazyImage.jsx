import React, { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@mui/material';

const LazyImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  style = {}, 
  skeletonProps = {},
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true); // Still mark as loaded to remove skeleton
  };

  return (
    <div ref={imgRef} style={{ width, height, ...style }}>
      {!isLoaded && !hasError && (
        <Skeleton
          variant="rectangular"
          width={width || '100%'}
          height={height || '100%'}
          {...skeletonProps}
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            ...style,
            display: isLoaded ? 'block' : 'none',
            opacity: hasError ? 0.5 : 1,
          }}
          {...props}
        />
      )}
      {hasError && isLoaded && (
        <div
          style={{
            width: width || '100%',
            height: height || '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '14px',
          }}
        >
          Image unavailable
        </div>
      )}
    </div>
  );
};

export default LazyImage;
