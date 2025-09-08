import { useEffect, useState } from 'react';

const useFontLoading = (fontFamily = 'SF Pro Display') => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const checkFont = async () => {
      try {
        // Check if the font is available
        if (document.fonts && document.fonts.check) {
          const isFontLoaded = document.fonts.check(`16px "${fontFamily}"`);
          
          if (isFontLoaded) {
            setFontLoaded(true);
          } else {
            // Wait for font to load
            await document.fonts.load(`16px "${fontFamily}"`);
            setFontLoaded(true);
          }
        } else {
          // Fallback for older browsers
          const testElement = document.createElement('div');
          testElement.style.fontFamily = fontFamily;
          testElement.style.fontSize = '16px';
          testElement.style.position = 'absolute';
          testElement.style.visibility = 'hidden';
          testElement.textContent = 'Test';
          
          document.body.appendChild(testElement);
          
          // Check if font loaded by measuring width changes
          const fallbackWidth = testElement.offsetWidth;
          testElement.style.fontFamily = `${fontFamily}, Arial, sans-serif`;
          
          const checkFontLoad = () => {
            if (testElement.offsetWidth !== fallbackWidth) {
              setFontLoaded(true);
              document.body.removeChild(testElement);
            } else {
              setTimeout(checkFontLoad, 100);
            }
          };
          
          setTimeout(checkFontLoad, 100);
        }
      } catch (error) {
        console.warn('Font loading check failed:', error);
        // Assume font is loaded after a delay
        setTimeout(() => setFontLoaded(true), 1000);
      }
    };

    checkFont();
  }, [fontFamily]);

  return fontLoaded;
};

export default useFontLoading;
