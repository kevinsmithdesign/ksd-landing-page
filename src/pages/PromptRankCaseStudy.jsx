import React from "react";
import {
  Button,
  Container,
  Grid,
  Card,
  Typography,
  Box,
  Tab,
  Tabs,
  Stack,
  Skeleton,
  useTheme,
} from "@mui/material";
import PromptRank from "../assets/images/PromptRankHeroImg.png";

const PromptRankCaseStudy = () => {
  return (
    <Box
      sx={{
        bgcolor: "black",
        minHeight: "100vh",
      }}
    >
      <Container sx={{ color: "white" }}>
        <img
          src={PromptRank}
          alt="Prompt Rank Model Compairson Page"
          loading="lazy"
          style={{
            height: "auto",
            width: "80%",
            display: "block",
            borderRadius: "12px",
            margin: "auto",
          }}
        />

        <Stack sx={{ mb: 4, width: "80%", mx: "auto" }}>
          <Typography
            variant="body2"
            fontWeight="bold"
            color="#196BDE"
            mb={0.5}
          >
            PROBLEM
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            AI Users Struggle to Craft Effective Prompts
          </Typography>
          <Typography variant="body2" mb={2}>
            Users often struggle to generate high-quality prompts that produce
            relevant, accurate, and insightful AI responses. The lack of clear
            feedback mechanisms leaves them guessing what works, leading to
            trial-and-error iterations that waste time and reduce productivity.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default PromptRankCaseStudy;
