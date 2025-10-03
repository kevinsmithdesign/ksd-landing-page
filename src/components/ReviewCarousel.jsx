import { Box, Container, Typography, Rating, Card, useMediaQuery, useTheme } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

// Reviews to display in two marquee rows
const topReviews = [
  {
    quote:
      "Kevin translated our vision into an intuitive product experience that immediately improved engagement.",
    author: "Alex Martinez",
    role: "Head of Product, FintechCo",
    rating: 5,
  },
  {
    quote:
      "The design system he built saved our team countless hours and brought consistency across platforms.",
    author: "Priya Shah",
    role: "Design Manager, HealthX",
    rating: 5,
  },
  {
    quote:
      "Rare blend of aesthetics and engineering. Pages are beautiful, fast, and accessible.",
    author: "Jordan Lee",
    role: "CTO, SaaSly",
    rating: 5,
  },
  {
    quote:
      "From research to launch, Kevin kept us focused on outcomes and shipped on time.",
    author: "Cameron Brooks",
    role: "Founder, MarketSpark",
    rating: 5,
  },
  {
    quote:
      "Our conversion rate increased 28% after his redesign. The numbers speak for themselves.",
    author: "Sofia Nguyen",
    role: "Growth Lead, ShopWave",
    rating: 5,
  },
  {
    quote:
      "Highly collaborative, thorough, and detail-oriented. Would absolutely work together again.",
    author: "Riley Chen",
    role: "PM, EduLab",
    rating: 5,
  },
];

const bottomReviews = [
  {
    quote:
      "He bridged design and dev seamlessly—our handoff friction dropped to nearly zero.",
    author: "Morgan Patel",
    role: "Engineering Lead, CloudWorks",
    rating: 5,
  },
  {
    quote:
      "Prototypes were spot-on and helped us validate quickly with real users.",
    author: "Dana Kim",
    role: "UX Researcher, Transitly",
    rating: 5,
  },
  {
    quote:
      "Clean, scalable components and documentation—we finally have a system the team loves.",
    author: "Chris Walker",
    role: "Frontend Lead, NovaApps",
    rating: 5,
  },
  {
    quote: "His motion work added delight without sacrificing performance.",
    author: "Taylor Brooks",
    role: "Design Lead, MediaHub",
    rating: 5,
  },
  {
    quote: "Strategic partner who asks the right questions and ships results.",
    author: "Avery Johnson",
    role: "CEO, SeedFlow",
    rating: 5,
  },
  {
    quote: "Thoughtful end-to-end—research, design, testing, and code. 10/10.",
    author: "Sam Rivera",
    role: "Product Director, HomeTech",
    rating: 5,
  },
];

// Create review cards with responsive sizing
const createReviewCards = (reviews, isMobile, isTablet) => {
  // Responsive dimensions
  const cardWidth = isMobile ? 280 : isTablet ? 300 : 320;
  const cardHeight = isMobile ? 240 : isTablet ? 260 : 280;
  const cardPadding = isMobile ? "24px" : isTablet ? "32px" : "40px";
  const marginRight = isMobile ? "6px" : "8px";
  
  return reviews
    .filter((r) => r.rating === 5)
    .map((r, i) => (
      <Card
        key={i}
        sx={{
          width: cardWidth,
          height: cardHeight,
          marginRight: marginRight,
          padding: cardPadding,
          borderRadius: { xs: "12px", sm: "16px" },
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // Add subtle shadow for better visual separation on mobile
          boxShadow: isMobile ? "0 2px 12px rgba(0,0,0,0.08)" : undefined,
        }}
      >
        <Box>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ 
              lineHeight: 1.5, 
              mb: 2,
              fontSize: { xs: "0.875rem", sm: "1rem" }
            }}
          >
            {r.quote}
          </Typography>
          <Rating
            value={r.rating}
            max={5}
            precision={1}
            readOnly
            size="small"
          />
        </Box>

        <Box>
          {" "}
          {/* Author section stays at bottom */}
          <Typography variant="subtitle1" color="text.primary" fontWeight={600}>
            {r.author}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {r.role}
          </Typography>
        </Box>
      </Card>
    ));
};

export default function ReviewCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const shouldReduceMotion = useReducedMotion();
  
  // State for touch interactions
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  // Generate cards with responsive sizing
  const topCards = createReviewCards(topReviews, isMobile, isTablet);
  const bottomCards = createReviewCards(bottomReviews, isMobile, isTablet);

  // Responsive animation settings
  const animationDuration = isMobile ? 60 : 40; // Slower on mobile for better UX
  const rowSpacing = isMobile ? "6px" : "8px";

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
