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
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container sx={{ color: "white", pt: 8 }}>
        {/* <img
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
        /> */}

        <Box
          sx={{
            background: "#222",
            height: "500px",
            width: "80%",
            mx: "auto",
            borderRadius: "16px",
          }}
        ></Box>

        <Stack sx={{ mb: 4, width: "80%", mx: "auto", mt: 3 }}>
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
          <Typography variant="body2" mb={2}>
            Many existing AI tools provide powerful language models but lack
            built-in guidance for optimizing prompts. Without a structured way
            to measure effectiveness, users—ranging from casual experimenters to
            professionals—face inconsistencies in output quality, making AI
            interactions unpredictable and inefficient.
          </Typography>
          <Box sx={{ ml: 4 }}>
            <Typography variant="body1" fontWeight="bold" color="#777">
              “How might we create a system that helps users craft better
              prompts by evaluating their effectiveness and providing clear,
              actionable feedback?”
            </Typography>
          </Box>
        </Stack>
        <Box
          sx={{
            background: "#222",
            height: "460px",
            width: "80%",
            mx: "auto",
            borderRadius: "16px",
            mb: 3,
          }}
        ></Box>
        <Stack sx={{ mb: 4, width: "80%", mx: "auto", mt: 3 }}>
          <Typography
            variant="body2"
            fontWeight="bold"
            color="#196BDE"
            mb={0.5}
          >
            DISCOVERY
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Diving Deeper into the Problem
          </Typography>
          <Typography variant="body2">
            Understanding the challenges users face when crafting effective AI
            prompts was crucial to designing an impactful solution. By analyzing
            common frustrations—such as lack of feedback on prompt
            effectiveness, difficulty comparing AI models, and limited
            opportunities for collaboration—I identified key opportunities to
            create a platform that empowers users to rank, refine, and share
            prompts while fostering a learning-focused community
          </Typography>
        </Stack>
        <Box
          sx={{
            background: "#222",
            height: "460px",
            width: "80%",
            mx: "auto",
            borderRadius: "16px",
            mb: 3,
          }}
        ></Box>

        <Stack sx={{ mb: 4, width: "80%", mx: "auto", mt: 3 }}>
          <Typography
            variant="body2"
            fontWeight="bold"
            color="#196BDE"
            mb={0.5}
          >
            USER INTERVIEWS
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Uncovering Needs Through Conversation
          </Typography>
          <Typography variant="body2" mb={2}>
            To truly understand the challenges users face with AI prompting, I
            conducted interviews with AI enthusiasts, content creators, and
            professionals who frequently interact with language models. These
            discussions focused on their struggles with crafting effective
            prompts, evaluating responses, and navigating different AI tools.
          </Typography>
          <Typography variant="body2" mb={2}>
            In addition, I analyzed existing platforms for prompt sharing and AI
            learning. My goal was to identify gaps where PromptRank could offer
            a more structured and engaging approach, making prompt optimization
            more intuitive and collaborative.
          </Typography>
          <Box sx={{ ml: 4, mb: 2 }}>
            <Typography variant="body1" fontWeight="bold" color="#777">
              “Users often feel frustrated by the trial-and-error nature of
              prompt crafting, with no clear way to gauge effectiveness or
              compare results across models.”
            </Typography>
          </Box>
          <Typography variant="body2" mb={2}>
            This insight validated our approach of creating a gamified,
            community-driven platform where users can rank, refine, and share
            prompts, turning AI interaction into a more transparent and
            rewarding experience.
          </Typography>
        </Stack>
        <Box
          sx={{
            background: "#222",
            height: "460px",
            width: "80%",
            mx: "auto",
            borderRadius: "16px",
            mb: 3,
          }}
        ></Box>
      </Container>
    </Box>
  );
};

export default PromptRankCaseStudy;
