import { Box, Container, Typography, Rating } from "@mui/material";
import { motion } from "framer-motion";

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
    quote:
      "His motion work added delight without sacrificing performance.",
    author: "Taylor Brooks",
    role: "Design Lead, MediaHub",
    rating: 5,
  },
  {
    quote:
      "Strategic partner who asks the right questions and ships results.",
    author: "Avery Johnson",
    role: "CEO, SeedFlow",
    rating: 5,
  },
  {
    quote:
      "Thoughtful end-to-end—research, design, testing, and code. 10/10.",
    author: "Sam Rivera",
    role: "Product Director, HomeTech",
    rating: 5,
  },
];

// Create review cards
const createReviewCards = (reviews) =>
  reviews
    .filter((r) => r.rating === 5)
    .map((r, i) => (
    <Box
      key={i}
      sx={{
        width: 320,
        height: 240,
        borderRadius: "12px",
        marginRight: "24px",
        flexShrink: 0,
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#181818" : "#F6F6F7",
        border: (theme) =>
          `1px solid ${theme.palette.mode === "dark" ? "#262626" : "#E6E6E6"}`,
      }}
    >
      <Typography
        variant="body1"
        color="text.primary"
        sx={{ lineHeight: 1.5 }}
      >
        “{r.quote}”
      </Typography>
      <Rating value={r.rating} max={5} precision={1} readOnly size="small" sx={{ mt: 1 }} />
      <Box>
        <Typography variant="subtitle1" color="text.primary" fontWeight={600}>
          {r.author}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {r.role}
        </Typography>
      </Box>
    </Box>
  ));

// Generate cards for top and bottom rows
const topCards = createReviewCards(topReviews);
const bottomCards = createReviewCards(bottomReviews);

export default function ReviewCarousel() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ overflow: "hidden", py: 3 }}
    >
      {/* TOP ROW - moves right */}
      <motion.div
        style={{ display: "flex", willChange: "transform" }}
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {[...topCards, ...topCards]}
      </motion.div>

      {/* BOTTOM ROW - moves left */}
      <motion.div
        style={{ display: "flex", marginTop: "32px", willChange: "transform" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {[...bottomCards, ...bottomCards]}
      </motion.div>
    </Container>
  );
}
