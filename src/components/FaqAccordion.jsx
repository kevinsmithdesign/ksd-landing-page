import React, { useState } from "react";
import { Card, Typography, Box, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Do you prefer design or development?",
    answer:
      "I lean more toward design, but I bring development into the process when it helps bring ideas to life. My passion is creating intuitive, scalable interfaces and beautiful user experiences, while making sure what I design can be built efficiently.",
  },
  {
    question: "Are you open to full-time, contract, or freelance work?",
    answer:
      "I’m open to all three. Right now, I’m taking on contract and freelance projects while I look for my next full-time role where I can help shape a product’s long-term design vision.",
  },
  {
    question: "What kind of design projects do you take on?",
    answer: [
      "Designing modern, component-driven UIs",
      "Building multi-brand design systems that work in both Figma and code",
      "Creating interactive prototypes to validate ideas quickly",
      "Improving usability, accessibility, and overall consistency",
      "Developing reusable components and integrating design tokens",
      "Bridging design and development to ensure everything looks and works as intended",
    ],
  },
  {
    question: "Can you help improve my existing design or product?",
    answer:
      "Whether it’s polishing a rough interface or doing a complete redesign, I focus on making products cleaner, simpler, and easier to use. My goal is always the same: create designs that look great and work seamlessly.",
  },
  {
    question: "What inspires your design work?",
    answer:
      "I’m inspired by real products solving real problems. I study modern design systems, experiment with new patterns in Figma, and pay attention to what makes an interface feel effortless. I like designs that are simple, functional, and built to last.",
  },
];

const FaqAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Container (height collapse)
  const containerVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Text (separate fade)
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <Box sx={{ width: "100%" }}>
      {faqData.map((faq, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <Card
            key={index}
            component={motion.div}
            transition={{ duration: 0.2 }}
            sx={{
              overflow: "hidden",
              width: "100%",
              cursor: "pointer",
              mb: 1,
              padding: "24px 24px",
              borderRadius: "16px",
            }}
          >
            <Box sx={{ p: 4, position: "relative" }}>
              {/* Header */}
              <Box
                onClick={() => toggleExpand(index)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  userSelect: "none",
                  pb: isExpanded ? 1.5 : 0,
                  transition: "padding-bottom 0.25s ease",
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  {faq.question}
                </Typography>

                <IconButton
                  disableRipple
                  sx={{
                    p: 0.5,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  <motion.div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <KeyboardArrowRightIcon fontSize="medium" />
                  </motion.div>
                </IconButton>
              </Box>

              {/* Collapsible Answer */}
              <AnimatePresence initial={false} mode="wait">
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={containerVariants}
                    style={{ overflow: "hidden" }}
                  >
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {Array.isArray(faq.answer) ? (
                        <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                          {faq.answer.map((item, i) => (
                            <Typography
                              key={i}
                              component="li"
                              variant="h5"
                              color="text.secondary"
                              sx={{ mb: 0.5 }}
                            >
                              {item}
                            </Typography>
                          ))}
                        </Box>
                      ) : (
                        <Typography variant="h5" color="text.secondary">
                          {faq.answer}
                        </Typography>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default FaqAccordion;
