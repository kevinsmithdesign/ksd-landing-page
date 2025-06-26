import React from "react";
import {
  Button,
  Grid,
  Card,
  Typography,
  Box,
  Stack,
  Tooltip,
} from "@mui/material";
import SprintView from "../assets/images/SprintView.svg";
import CreditFlow from "../assets/images/CreditFlow.svg";
import FoodApp from "../assets/images/FoodApp.svg";
import RealEstateApp from "../assets/images/RealEstateApp.svg";

const DesignWork = () => {
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

              <Typography variant="body1" color="text.secondary" mb={6}>
                A streamlined task and sprint management platform built to
                support clear team communication and accountability. Sprint View
                helps teams plan work, track progress, and stay aligned
                throughout the sprint cycle.
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
              <Typography variant="body1" color="text.secondary" mb={6}>
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

              <Typography variant="body1" color="text.secondary" mb={6}>
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
              <Typography variant="body1" color="text.secondary" mb={6}>
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
    </>
  );
};

export default DesignWork;
