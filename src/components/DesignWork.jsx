import React from "react";
import {
  Button,
  Grid,
  Card,
  Typography,
  Box,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router";

import SprintView from "../assets/images/SprintView.svg";
import CreditFlow from "../assets/images/CreditFlow.svg";
import FoodApp from "../assets/images/FoodApp.svg";
import RealEstateApp from "../assets/images/RealEstateApp.svg";
import PromptRank from "../assets/images/PromptRankHeroImg.png";

const DesignWork = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleViewCaseStudy = () => {
    const baseUrl = window.location.origin;
    window.open(`${baseUrl}/sprint-view`, "_blank");
  };

  const handleViewPrototype = () => {
    window.open("https://sprintview.netlify.app/", "_blank");
  };

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
                src={SprintView}
                alt="Sprint View"
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
                SprintView
              </Typography>

              <Typography variant="body1" color="text.secondary" mb={4}>
                A streamlined task and sprint management platform built to
                support clear team communication and accountability. Sprint View
                helps teams plan work, track progress, and stay aligned
                throughout the sprint cycle.
              </Typography>

              <Stack flexDirection={{ xs: "column", sm: "row" }} gap={1}>
                <Button variant="contained" onClick={handleViewCaseStudy}>
                  View Case Study
                </Button>
                <Button
                  sx={{
                    background: "#eee",
                    color: "#000",
                    "&:hover": {
                      background: "#ddd",
                    },
                  }}
                  variant="contained"
                  onClick={handleViewPrototype}
                >
                  View Prototype
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
                src={CreditFlow}
                alt="Credit Flow"
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
                Credit Flow
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
                A financial wellness platform designed to help users understand,
                monitor, and improve their credit. CreditFlow offers actionable
                insights and tools that support smarter financial decisions and
                long-term growth.
              </Typography>
              <Tooltip
                title="I'm happy to walk through projects over a call. Email info@kevinsmithdesign.com to schedule."
                placement="bottom-start"
              >
                <span>
                  <Button disabled variant="contained">
                    View Project
                  </Button>
                </span>
              </Tooltip>
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
                src={FoodApp}
                alt="Food App"
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
                Foodie
              </Typography>

              <Typography variant="body1" color="text.secondary" mb={4}>
                A food delivery app that makes ordering easy, fast, and
                reliable. Foodie connects users with local restaurants and helps
                streamline the ordering experience from selection to doorstep
                delivery.
              </Typography>
              <Tooltip
                title="I'm happy to walk through projects over a call. Email info@kevinsmithdesign.com to schedule."
                placement="bottom-start"
              >
                <span>
                  <Button disabled variant="contained">
                    View Project
                  </Button>
                </span>
              </Tooltip>
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
                src={RealEstateApp}
                alt="Madison Group UI"
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
                Madison Group
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
                A real estate discovery platform that simplifies the home-buying
                journey. Madison Group lets users explore listings, compare
                properties, and make confident decisions, all in one seamless
                experience.
              </Typography>
              <Tooltip
                title="I'm happy to walk through projects over a call. Email info@kevinsmithdesign.com to schedule."
                placement="bottom-start"
              >
                <span>
                  <Button disabled variant="contained">
                    View Project
                  </Button>
                </span>
              </Tooltip>
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
    </>
  );
};

export default DesignWork;
