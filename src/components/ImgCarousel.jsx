import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";

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

// Create image cards with the correct aspect ratio
const createCards = (imageUrls) =>
  imageUrls.map((url, i) => (
    <Box
      key={i}
      sx={{
        height: "240px", // Base height
        width: "320px", // Width that maintains 4:3 aspect ratio (240px * 1.33 = 320px)
        borderRadius: "8px",
        marginRight: "24px",
        flexShrink: 0,
        overflow: "hidden", // Ensure image doesn't overflow the border radius
      }}
    >
      <img
        src={url}
        alt={`Image ${i + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // This ensures the image covers the box without distortion
        }}
      />
    </Box>
  ));

// Generate cards for top and bottom rows
const topCards = createCards(topImageUrls);
const bottomCards = createCards(bottomImageUrls);

export default function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ overflow: "hidden", py: 3 }}
    >
      {/* TOP ROW - moves right */}
      <motion.div
        style={{ display: "flex" }}
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
        style={{ display: "flex", marginTop: "32px" }}
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
