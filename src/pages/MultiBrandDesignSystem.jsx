import React, { useState, useEffect } from "react";
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
  Chip,
} from "@mui/material";
import Hosting1 from "../assets/images/Hosting1.png";
import Hosting2 from "../assets/images/Hosting2.png";
import Hosting3 from "../assets/images/Hosting3.png";
import Hosting4 from "../assets/images/Hosting4.png";
import TokenArchitecture from "../assets/images/TokenArchitecture.png";
import ConfoundIcon from "../icons/ConfoundIcon";
import DuplicateIcon from "../icons/DuplicateIcon";
import ClockIcon from "../icons/ClockIcon";
import NewFoldAudit from "../assets/images/NewFoldAudit.png";
import WebSiteIcon from "../icons/WebSiteIcon";
import UxIcon from "../icons/UxIcon";
import ToolIcon from "../icons/ToolIcon";

const MultiBrandDesignSystem = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images and corresponding background colors
  const imageData = [
    {
      src: Hosting1,
      alt: "Bluehost select a plan page",
      background: "#DEE5FE", // Your current light blue
    },
    {
      src: Hosting2,
      alt: "Network Solution select a plan page",
      background: "#D8FFDF", // Light orange for HostGator
    },
    {
      src: Hosting3,
      alt: "Domain.com select a plan page",
      background: "#F8E3E3", // Light cyan for Domain.com
    },
    {
      src: Hosting4,
      alt: "HostGator select a plan page",
      background: "#DEE9FB", // Light green for Web.com
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageData.length]);

  const currentImage = imageData[currentImageIndex];

  return (
    <>
      <Box
        sx={{
          background: currentImage.background,
          transition: "background-color 0.5s ease-in-out",
        }}
      >
        <Container>
          <Stack
            textAlign="center"
            maxWidth="1000px"
            sx={{ mx: "auto", pt: 6, mb: 4 }}
          >
            <Box mb={2}></Box>
            <Typography
              sx={{ fontSize: { xs: "40px", sm: "56px" } }}
              fontWeight="bold"
              mb={3}
              lineHeight={{ xs: "126%", md: "140%" }}
            >
              Design Once, Brand Everywhere
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "24px" },
                maxWidth: "730px",
                mx: "auto",
              }}
              fontWeight=""
              mb={4}
              lineHeight="140%"
            >
              Architecting a multi‑brand design system at Newfold Digital to
              unify foundations, preserve brand identity, and accelerate
              delivery across a complex portfolio.
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                mx: "auto",
                maxWidth: "600px",
                gap: 10,
              }}
            >
              <Box>
                <Typography variant="h3" fontWeight="bold">
                  12+
                </Typography>
                <Typography fontWeight="500">Brands Unified</Typography>
              </Box>
              <Box>
                <Typography variant="h3" fontWeight="bold">
                  32%
                </Typography>
                <Typography fontWeight="500">Faster Deployment</Typography>
              </Box>
              <Box>
                <Typography variant="h3" fontWeight="bold">
                  3x
                </Typography>
                <Typography fontWeight="500">Design Efficiency</Typography>
              </Box>
            </Box>
          </Stack>

          <Stack mb={16}>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              style={{
                width: "100%",
                height: "auto",
                margin: "auto",
                transition: "opacity 0.5s ease-in-out",
                position: "relative",
                zIndex: 2,
                paddingBottom: "48px",
              }}
            />
          </Stack>
        </Container>
      </Box>
      <Container>
        <Stack sx={{ mb: 16, maxWidth: "760px", mx: "auto" }}>
          <Typography variant="body2" fontWeight="bold" color="#196BDE" mb={1}>
            PROBLEM & CONTEXT
          </Typography>
          <Typography variant="h3" fontWeight="bold" mb={4}>
            Dozens of Brands, Dozens of Design Languages
          </Typography>
          <Typography variant="body2" mb={2}>
            <b>Newfold Digital</b> is the parent company behind a large
            portfolio of web service brands — 
            <b>
              Bluehost, HostGator, Network Solutions, Web.com, Domain.com, Yoast
              SEO
            </b>
            , and many others. This collection of brands exists because of years
            of mergers and acquisitions. Instead of building one brand from the
            ground up, Newfold grew by bringing multiple established players
            together under one umbrella. While this strategy created market
            reach and brand recognition across different customer segments, it
            also introduced significant design and technical complexity.
          </Typography>
          <Typography variant="body2" mb={2}>
            Each brand operated independently for years, developing its own
            design language, its own component library, and its own customer
            experience. This autonomy helped brands retain their unique identity
            but created systemic problems at scale.
          </Typography>

          {/* <Typography variant="body2">
            Instead of efficiency, scale produced friction. For Newfold to truly
            operate as a portfolio company, it needed a system that unified
            foundations while preserving the unique expression of each brand.
          </Typography> */}
        </Stack>
      </Container>
      <Stack mb={16}>
        <Box sx={{ background: "#F6F8FA", py: 16 }}>
          <Stack sx={{ width: "760px", mx: "auto", mb: 6 }}>
            <Stack flexDirection="row" alignItems="center" gap={3}>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  background: "#F16362",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ConfoundIcon width={40} height={40} />
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Inconsistent experiences
                </Typography>
                <Typography variant="body1">
                  Customers moving between brands encountered fragmented
                  patterns.
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack sx={{ width: "760px", mx: "auto", mb: 6 }}>
            <Stack flexDirection="row" alignItems="center" gap={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "80px",
                  background: "#F7946F",
                  borderRadius: "8px",
                }}
              >
                <DuplicateIcon width={40} height={40} />
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Heavy duplication of effort
                </Typography>
                <Typography variant="body1">
                  Teams solved the same problems repeatedly in silos.
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack sx={{ width: "760px", mx: "auto" }}>
            <Stack flexDirection="row" alignItems="center" gap={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "80px",
                  background: "#FCD98E",
                  borderRadius: "8px",
                }}
              >
                <ClockIcon width={40} height={40} />
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Slow, costly change
                </Typography>
                <Typography variant="body1">
                  Refreshes and improvements multiplied across codebases.
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Container>
        {/* <Stack sx={{ mb: 8 }}> */}
        <Stack sx={{ mb: 16, maxWidth: "760px", mx: "auto" }}>
          <Typography variant="body2" fontWeight="bold" color="#196BDE" mb={1}>
            DISCOVERY
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Auditing the Chaos
          </Typography>
          <Typography variant="body2" mb={2}>
            Before designing solutions, we conducted a full audit across every
            brand’s design system, component library, and customer experience.
            What we found was staggering: dozens of variations of buttons,
            inputs, and navigation patterns that solved the same problems in
            slightly different ways.
          </Typography>
          <Typography variant="body2" mb={2}>
            Color palettes overlapped but weren’t consistent. Typography scales
            drifted across products. Even foundational tokens like spacing and
            radius varied wildly. Every brand had reinvented the wheel in its
            own way.
          </Typography>
          <Typography variant="body2">
            This discovery phase gave us both clarity and urgency. The
            inconsistency wasn’t just aesthetic — it slowed delivery, created
            accessibility risks, and fragmented the customer experience. The
            audit became the baseline for unifying foundations without erasing
            brand identity.
          </Typography>
        </Stack>
      </Container>

      <Stack mb={16}>
        <Box sx={{ background: "#DEE9FB", py: 8 }}>
          <Container>
            <img
              src={NewFoldAudit}
              alt="NewFold Digital Audit Page"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Container>
        </Box>
      </Stack>

      <Container>
        <Stack sx={{ mb: 16, maxWidth: "760px", mx: "auto" }}>
          <Typography variant="body2" fontWeight="bold" color="#196BDE" mb={1}>
            RESEARCH
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Grounding Insights in Evidence
          </Typography>
          <Typography variant="body2" mb={2}>
            Alongside the audit, we conducted research to understand the human
            side of the problem. We interviewed designers, engineers, and
            product managers across the portfolio to hear firsthand where
            friction slowed them down and where fragmentation hurt customers.
          </Typography>
          <Typography variant="body2" mb={2}>
            Customer feedback and support tickets revealed confusion when moving
            between brands: navigation worked differently, checkout flows
            shifted, and accessibility gaps created frustration. Internally,
            teams expressed how much time was wasted reinventing solutions that
            already existed elsewhere.
          </Typography>
          <Typography variant="body2">
            We also benchmarked against other multi‑brand design systems in the
            industry, validating that a token‑first approach with semantic
            theming was the right direction. These research insights ensured our
            system wasn’t just technically elegant — it was rooted in the
            realities of how people built and used products every day.
          </Typography>
        </Stack>
      </Container>

      <Stack mb={16}>
        <Box sx={{ background: "#F6F8FA", py: 16 }}>
          <Stack sx={{ width: "760px", mx: "auto", mb: 6 }}>
            <Stack flexDirection="row" alignItems="center" gap={3}>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  background: "#77B8A0",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WebSiteIcon width={40} height={40} />
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Fragmented patterns
                </Typography>
                <Typography variant="body1">
                  Customers struggled moving between brands as menus, flows, and
                  interactions varied.
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack sx={{ width: "760px", mx: "auto", mb: 6 }}>
            <Stack flexDirection="row" alignItems="center" gap={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "80px",
                  background: "#B6BAEA",
                  borderRadius: "8px",
                }}
              >
                <UxIcon width={40} height={40} />
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Accessibility & usability gaps
                </Typography>
                <Typography variant="body1">
                  Inconsistent tokens and patterns created barriers for
                  customers and slowed teams.
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack sx={{ width: "760px", mx: "auto" }}>
            <Stack flexDirection="row" alignItems="center" gap={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "80px",
                  background: "#FED2D7",
                  borderRadius: "8px",
                }}
              >
                <ToolIcon height={40} width={40} />
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Reinvented solutions wasting time
                </Typography>
                <Typography variant="body1">
                  Designers and engineers repeatedly rebuilt components instead
                  of reusing them.
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Container>
        <Stack sx={{ mb: 16, maxWidth: "760px", mx: "auto" }}>
          <Typography variant="body2" fontWeight="bold" color="#196BDE" mb={1}>
            GOALS & APPROACH
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Design Once, Brand Many
          </Typography>
          <Typography variant="body2" mb={2}>
            Our objective was to unify without uniformity. The strategy: build
            common foundations while enabling brands to express themselves
            semantically.
          </Typography>
          <Typography variant="body2" mb={2}>
            We took a token‑first approach. Global primitives like spacing,
            sizing, and layout grid stayed consistent across all brands to
            maintain structural stability. Brand‑specific primitives — such as
            colors, typography families, and border radius — were mapped into
            semantic tokens. These tokens,
            like brand-primary-main or btn-primary-bg , gave values brand
            meaning. Components never touched raw values.
          </Typography>
          <Typography variant="body2">
            The result was a single component library that remained
            brand‑agnostic in code but became brand‑aware at runtime. Teams
            could migrate gradually, starting with high‑leverage components and
            layering in the rest — bridging the gap between vision and reality:
            one system, many voices.
          </Typography>
        </Stack>
      </Container>
      <Stack mb={16}>
        <Box sx={{ background: "#F6F8FA", py: 16 }}>
          <Container>
            <img
              src={TokenArchitecture}
              alt="Multi-brand token archietecture overview"
              style={{
                width: "100%",
                height: "auto",
                margin: "auto",
                transition: "opacity 0.5s ease-in-out",
                position: "relative",
                zIndex: 2,
              }}
            />
          </Container>
        </Box>
      </Stack>
      <Container>
        <Stack sx={{ mb: 16, maxWidth: "760px", mx: "auto" }}>
          <Typography variant="body2" fontWeight="bold" color="#196BDE" mb={1}>
            EXECUTION & DESIGN
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Bringing the System to Life
          </Typography>
          <Typography variant="body2" mb={2}>
            With the foundations in place, we shifted focus to execution. We
            prioritized high-impact components first — buttons, inputs,
            navigation — the building blocks that appear across every brand
            experience.
          </Typography>
          <Typography variant="body2" mb={2}>
            Each component was designed to be brand-agnostic at its core, styled
            exclusively through semantic tokens. This approach meant a single
            codebase could generate multiple brand expressions without
            duplication.
          </Typography>
          <Typography variant="body2" mb={4}>
            We documented clear usage guidelines and paired every component with
            accessibility best practices. This ensured consistency not just in
            look and feel, but in how teams implemented them across the
            portfolio.
          </Typography>
          <Stack flexDirection="row" gap={2}>
            <Button
              variant="outlined"
              component="a"
              href="https://www.figma.com/design/lyu0G92pFLKCskfouQSmt1/MultiBrandDesignSystem?node-id=0-1&t=iVTQ3cagXTiWRg4G-1"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                boxShadow: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              View Figma
            </Button>
            <Button
              variant="contained"
              onClick={() =>
                window.open(
                  "https://multi-brand-design-system.netlify.app/",
                  "_blank"
                )
              }
              sx={{
                boxShadow: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              View Prototype
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default MultiBrandDesignSystem;
