import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

// Array of 6 placeholder images for the top row
const topImageUrls = [
  "https://cdn.dribbble.com/userupload/35226509/file/original-93a1e2066396f3b61c1f6f8619f12b71.jpg?resize=1600x1200&vertical=center",
  "https://cdn.dribbble.com/userupload/35280430/file/original-8875b387f5f1649067d68537bfb27b8c.jpg?resize=1600x1200&vertical=center",
  "https://cdn.dribbble.com/userupload/35116982/file/original-1f667b86841dadb2ce5fee4d0c00a382.jpg?resize=1600x1200&vertical=center",
  "https://cdn.dribbble.com/userupload/34918273/file/original-b5e96364bc9e32631f02c0c706047c2c.jpg?resize=1600x1200&vertical=center",
  "https://cdn.dribbble.com/userupload/35532595/file/original-dfd46e4a1ca43a5c9c6086a8777cf655.jpg?resize=1600x1200&vertical=center",
  "https://cdn.dribbble.com/userupload/17281091/file/original-0101f1fe0c1c228b8928851eb5f5e23b.png?resize=1504x1128&vertical=center",
];

// Array of 6 different images for the bottom row
const bottomImageUrls = [
  "https://cdn.dribbble.com/userupload/17536832/file/original-5d9d1bcdedb2ea18f6863ebfb07c1c98.png?resize=1600x1200&vertical=center",
  "https://cdn.dribbble.com/userupload/8456419/file/original-23a310c94f68ea949fd64e4edd6152cf.jpg?resize=1600x1200&vertical=center",
  "https://cdn.dribbble.com/userupload/34544474/file/original-861d6e4d045703e30423b370ba1fe0b3.jpg?resize=1600x1200&vertical=center",
  "https://cdn.dribbble.com/userupload/9468126/file/original-cc234c6b50fd16761df8f6161eb0f579.jpg?resize=1600x1200&vertical=center",
  "https://cdn.dribbble.com/userupload/8253707/file/original-bd0e7dcd7c25a583f1b38d7416735bcd.jpg?resize=1600x1200&vertical=center",
  "https://cdn.dribbble.com/userupload/14539275/file/original-6f67c0bf4025c11f9f02d62d4a78cc06.png?resize=1504x1128&vertical=center",
];

// Create image cards with responsive sizing
const createCards = (imageUrls, isMobile, isTablet) => {
  // Responsive dimensions
  const cardWidth = isMobile ? "200px" : isTablet ? "280px" : "320px";
  const cardHeight = isMobile ? "150px" : isTablet ? "210px" : "240px";
  const marginRight = isMobile ? "12px" : isTablet ? "18px" : "24px";
  
  return imageUrls.map((url, i) => (
    <Box
      key={i}
      sx={{
        height: cardHeight,
        width: cardWidth,
        borderRadius: { xs: "6px", sm: "8px" },
        marginRight: marginRight,
        flexShrink: 0,
        overflow: "hidden",
        // Add subtle shadow for better visual separation on mobile
        boxShadow: isMobile ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <img
        src={url}
        alt={`Portfolio image ${i + 1}`}
        loading={i < 4 ? "eager" : "lazy"} // Prioritize first few images
        decoding="async"
        fetchPriority={i < 2 ? "high" : "auto"}
        width={cardWidth.replace("px", "")}
        height={cardHeight.replace("px", "")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // Improve image rendering on mobile
          imageRendering: "auto",
        }}
      />
    </Box>
  ));
};

export default function ImgCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const shouldReduceMotion = useReducedMotion();
  
  // State for touch interactions
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  // Generate cards with responsive sizing
  const topCards = createCards(topImageUrls, isMobile, isTablet);
  const bottomCards = createCards(bottomImageUrls, isMobile, isTablet);

  // Responsive animation settings
  const animationDuration = isMobile ? 60 : 40; // Slower on mobile for better UX
  const rowSpacing = isMobile ? "16px" : isTablet ? "24px" : "32px";

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;
    
    const touchCurrentX = e.touches[0].clientX;
    const diff = touchStartX - touchCurrentX;
    
    // Pause animation when user is actively swiping
    if (Math.abs(diff) > 10) {
      setIsPaused(true);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
    // Resume animation after a short delay
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Animation variants based on user preferences and device
  const getAnimationProps = (direction) => {
    if (shouldReduceMotion) {
      return {
        animate: {},
        transition: { duration: 0 }
      };
    }

    const baseAnimation = direction === 'right' 
      ? { x: ["-100%", "0%"] }
      : { x: ["0%", "-100%"] };

    return {
      animate: isPaused ? {} : baseAnimation,
      transition: {
        repeat: isPaused ? 0 : Infinity,
        duration: animationDuration,
        ease: "linear",
      }
    };
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ 
        overflow: "hidden", 
        py: { xs: 1, sm: 2, md: 3 },
        // Improve performance on mobile
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* TOP ROW - moves right */}
      <motion.div
        style={{ 
          display: "flex", 
          willChange: shouldReduceMotion ? "auto" : "transform",
          // Optimize for mobile performance
          transform: "translateZ(0)",
        }}
        {...getAnimationProps('right')}
      >
        {[...topCards, ...topCards]}
      </motion.div>

      {/* BOTTOM ROW - moves left */}
      <motion.div
        style={{ 
          display: "flex", 
          marginTop: rowSpacing, 
          willChange: shouldReduceMotion ? "auto" : "transform",
          transform: "translateZ(0)",
        }}
        {...getAnimationProps('left')}
      >
        {[...bottomCards, ...bottomCards]}
      </motion.div>

      {/* Optional: Add visual indicator for touch interaction on mobile */}
      {isMobile && isPaused && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "rgba(0,0,0,0.7)",
            color: "white",
            px: 2,
            py: 1,
            borderRadius: 1,
            fontSize: "0.875rem",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          Paused
        </Box>
      )}
    </Container>
  );
}
