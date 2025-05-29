import { useEffect, useState } from "react";

const usePreloadImages = (images = []) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let count = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        count++;
        if (count === images.length) {
          setLoaded(true);
        }
      };
    });
  }, [images]);

  return loaded;
};

export default usePreloadImages;
