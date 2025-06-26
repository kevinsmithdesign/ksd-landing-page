import React from "react";
import { Button, Grid, Card, Typography, Box, Stack } from "@mui/material";

import PromptRank from "../assets/images/PromptRank.svg";
import WLDesignSystem from "../assets/images/WLDesignSystem.svg";

const DevelopmentWork = () => {
  const cardStyles = {
    padding: "40px",
    borderRadius: "16px",
    height: "100%",
  };

  return (
    <>
      <Card style={cardStyles} sx={{ mb: 1 }}>
        <Grid container spacing={10}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <img
                src={PromptRank}
                alt="Prompt Rank Model Compairson Page"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "12px",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Stack flexDirection="row" mb={1} gap={0.5}></Stack>
              <Typography
                variant="h3"
                color="text.primary"
                fontWeight="bold"
                mb={2}
              >
                PromptRank
              </Typography>

              <Typography variant="body1" color="text.secondary" mb={6}>
                Explore, rank, and share AI prompts while discovering powerful
                AI tools. Prompt Rank helps users refine AI interactions, learn
                prompt engineering techniques, and enhance their workflow with
                curated resources.
              </Typography>

              <Stack flexDirection="row">
                <Button
                  variant="contained"
                  component="a"
                  href="https://promptrank.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Site
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Card style={cardStyles} sx={{ mb: 1 }}>
        <Grid container spacing={10}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <img
                src={WLDesignSystem}
                alt="Design System UI"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "12px",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Stack flexDirection="row" mb={1} gap={0.5}></Stack>
              <Typography
                variant="h3"
                color="text.primary"
                fontWeight="bold"
                mb={2}
              >
                White Label Design System
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={6}>
                A flexible framework of reusable components and guidelines for
                building consistent, scalable, and accessible user interfaces,
                with support for multiple themes.
              </Typography>

              <Stack flexDirection="row">
                <Button
                  variant="contained"
                  component="a"
                  href="https://whitelabeldesignsystem.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Site
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default DevelopmentWork;
