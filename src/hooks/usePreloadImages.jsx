import { useEffect, useState } from "react";

const usePreloadImages = (images = []) => {
  const [loaded, setLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (images.length === 0) {
      setLoaded(true);
      return;
    }

    let count = 0;
    const imagePromises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        // Add timeout for slower connections
        const timeout = setTimeout(() => {
          reject(new Error(`Image load timeout: ${src}`));
        }, 10000); // 10 second timeout
        
        img.onload = () => {
          clearTimeout(timeout);
          count++;
          setLoadedCount(count);
          resolve(img);
        };
        
        img.onerror = () => {
          clearTimeout(timeout);
          console.warn(`Failed to load image: ${src}`);
          count++; // Still count as "loaded" to prevent hanging
          setLoadedCount(count);
          resolve(null);
        };
        
        img.src = src;
      });
    });

    // Wait for all images or timeout
    Promise.allSettled(imagePromises).then(() => {
      setLoaded(true);
    });

    // Fallback: mark as loaded after 15 seconds regardless
    const fallbackTimeout = setTimeout(() => {
      setLoaded(true);
    }, 15000);

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, [images]);

  return loaded;
};

export default usePreloadImages;
