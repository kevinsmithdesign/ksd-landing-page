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
import NewFoldDigitalCaseStudyHeroSection from "../assets/images/NewFoldDigitalCaseStudyHeroSection.png";
import Hosting1 from "../assets/images/Hosting1.png";
import Hosting2 from "../assets/images/Hosting2.png";
import Hosting3 from "../assets/images/Hosting3.png";
import Hosting4 from "../assets/images/Hosting4.png";
import NewFoldDigitalBeforeAfter from "../assets/images/NewFoldDigitalBeforeAfter.png";
import NewFoldButtonAudit from "../assets/images/NewFoldButtonAudit.png";
import UserResearch from "../assets/images/UserResearch.png";
import TokenArchitecture from "../assets/images/TokenArchitecture.png";

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
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [imageData.length]);

  const currentImage = imageData[currentImageIndex];

  const newfoldBrands = [
    { brand: "Bluehost", link: "https://bluehost.com", borderColor: "#196BDE" },
    {
      brand: "HostGator",
      link: "https://hostgator.com",
      borderColor: "#3980BF",
    },

    { brand: "Domain.com", link: "https://domain.com", borderColor: "#E24747" },
    { brand: "iPage", link: "", borderColor: "#53BB62" },
    { brand: "Crazydomains.com", link: "", borderColor: "#6EAB2F" },
    {
      brand: "Network Solutions",
      link: "https://networksolutions.com",
      borderColor: "#007C34",
    },
    { brand: "Markmonitor", link: "", borderColor: "#7C39B3" },
    {
      brand: "Register.com",
      link: "https://register.com",
      borderColor: "#7C39B3",
    },

    { brand: "Resellerclub", link: "", borderColor: "#7C39B3" },
    { brand: "Bigrock", link: "", borderColor: "#7C39B3" },
    { brand: "Sitebuilder.com", link: "", borderColor: "#7C39B3" },
    { brand: "Yoast", link: "", borderColor: "#7C39B3" },
    { brand: "BuyDomains.com", link: "", borderColor: "#7C39B3" },
    { brand: "Web.com", link: "", borderColor: "#7C39B3" },
    { brand: "Vodien.com", link: "", borderColor: "#7C39B3" },
  ];

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

          <Stack mb={8}>
            {/* <img
              src={Hosting1}
              alt="Bluehost select a plan page"
              style={{
                width: "100%",
                height: "auto",
                margin: "auto",
                transition: "opacity 0.5s ease-in-out",
                position: "relative",
                zIndex: 2,
                paddingBottom: "48px",
              }}
            /> */}
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
        <Stack sx={{ mb: 8 }}>
          <Typography
            variant="body2"
            fontWeight="bold"
            color="#196BDE"
            mb={0.5}
          >
            PROBLEM & CONTEXT
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={2}>
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
            but created systemic problems at scale:
          </Typography>
          <Typography variant="body2">
            <b>Inconsistent experiences</b> — customers moving between brands
            encountered fragmented patterns.
          </Typography>
          <Typography variant="body2">
            <b>Heavy duplication of effort</b> — teams solved the same problems
            repeatedly in silos.
          </Typography>
          <Typography variant="body2" mb={2}>
            <b>Slow, costly change</b> — refreshes and improvements multiplied
            across codebases.
          </Typography>
          <Typography variant="body2">
            Instead of efficiency, scale produced friction. For Newfold to truly
            operate as a portfolio company, it needed a system that unified
            foundations while preserving the unique expression of each brand.
          </Typography>
        </Stack>
      </Container>
      <Box sx={{ background: "#F6F8FA", py: 8 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Brands
          </Typography>
          <Grid container spacing={1}>
            {newfoldBrands.map(({ brand, link, borderColor }) => (
              <Grid size={{ md: 4 }}>
                <Card
                  sx={{
                    p: 4,
                    boxShadow: "none",
                    borderRadius: "8px",
                    // borderLeft: `8px solid ${borderColor}`,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {brand}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* <Stack mb={4}>
        <img
          src={NewFoldDigitalBeforeAfter}
          alt="NewFold Before and After Comparison Chart"
          // onLoad={handleHeroImageLoad}
          style={{
            width: "100%",
            height: "auto",
            margin: "auto",
            //   opacity: heroImageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            position: "relative",
            zIndex: 2,
          }}
        />
      </Stack> */}

      <Container>
        <Stack sx={{ py: 8 }}>
          <Typography
            variant="body2"
            fontWeight="bold"
            color="#196BDE"
            mb={0.5}
          >
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

      <Stack mb={8}>
        {/* <img
          src={NewFoldButtonAudit}
          alt="NewFold Button Audit Comparison"
          // onLoad={handleHeroImageLoad}
          style={{
            width: "100%",
            height: "auto",
            margin: "auto",
            //   opacity: heroImageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            position: "relative",
            zIndex: 2,
          }}
        /> */}
        <Box sx={{ background: "#F6F8FA", py: 8, height: "600px" }}>
          <Container>Board Img showing task to audit Here</Container>
        </Box>
      </Stack>

      <Container>
        <Stack sx={{ mb: 8 }}>
          <Typography
            variant="body2"
            fontWeight="bold"
            color="#196BDE"
            mb={0.5}
          >
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

      <Stack mb={8}>
        <Box sx={{ background: "#F6F8FA", py: 8 }}>
          <Container>
            <img
              src={UserResearch}
              alt="User Interviews with designers, developers, and pm's"
              // onLoad={handleHeroImageLoad}
              style={{
                width: "100%",
                height: "auto",
                margin: "auto",
                //   opacity: heroImageLoaded ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                position: "relative",
                zIndex: 2,
              }}
            />
          </Container>
        </Box>
      </Stack>

      <Container>
        <Stack sx={{ mb: 8 }}>
          <Typography
            variant="body2"
            fontWeight="bold"
            color="#196BDE"
            mb={0.5}
          >
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

      <Stack mb={8}>
        {/* <img
          src={TokenArchitecture}
          alt="Multi-brand token archietecture overview"
          // onLoad={handleHeroImageLoad}
          style={{
            width: "100%",
            height: "auto",
            margin: "auto",
            //   opacity: heroImageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            position: "relative",
            zIndex: 2,
          }}
        /> */}
        <Box sx={{ background: "#F6F8FA", py: 16 }}>
          <Container>
            <img
              src={TokenArchitecture}
              alt="Multi-brand token archietecture overview"
              // onLoad={handleHeroImageLoad}
              style={{
                width: "100%",
                height: "auto",
                margin: "auto",
                //   opacity: heroImageLoaded ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                position: "relative",
                zIndex: 2,
              }}
            />
          </Container>
        </Box>
      </Stack>

      <Container>
        <Stack sx={{ mb: 8 }}>
          <Typography
            variant="body2"
            fontWeight="bold"
            color="#196BDE"
            mb={0.5}
          >
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
          <Typography variant="body2" mb={2}>
            We documented clear usage guidelines and paired every component with
            accessibility best practices. This ensured consistency not just in
            look and feel, but in how teams implemented them across the
            portfolio.
          </Typography>
          <Stack flexDirection="row" gap={1}>
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

      {/* <Stack sx={{ mb: 4 }}>
        <Typography variant="body2" fontWeight="bold" color="#196BDE" mb={0.5}>
          RESULTS & SOLUTION
        </Typography>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Driving Measurable Business Impact
        </Typography>
        <Typography variant="body2" mb={2}>
          The rollout of the design system transformed how Newfold shipped
          products. By centralizing components and aligning on tokens, delivery
          became faster, cleaner, and more reliable.
        </Typography>
        <Typography variant="body2">
          These measurable results proved the system was more than design craft
          — it was a business solution that saved time, reduced risk, and
          created a cohesive customer experience across dozens of brands.
        </Typography>
      </Stack>

      <Grid container spacing={2} mb={4} display="flex">
        <Grid size={{ md: 4 }}>
          <Card
            sx={{
              p: 4,
              boxShadow: "none",
              borderRadius: "8px",
              background: "#E9EDF0",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="h1" fontWeight="bold" mb={5}>
              32%
            </Typography>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Faster Delivery
            </Typography>
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: 0.6,
              }}
              color="primary"
            >
              How we measured it
            </Typography>
            <Typography mb={1}>
              Compared average release cycle times before and after migrating
              high-traffic flows to the unified system.
            </Typography>
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: 0.6,
                mt: 2,
              }}
              color="primary"
            >
              Impact
            </Typography>
            <Typography>
              Accelerated launches across 15+ brands and reduced costly delays
              tied to duplicated work.
            </Typography>
          </Card>
        </Grid>

        <Grid size={{ md: 4 }}>
          <Card
            sx={{
              p: 4,
              boxShadow: "none",
              borderRadius: "8px",
              background: "#E9EDF0",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="h1" fontWeight="bold" mb={5}>
              61%
            </Typography>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Reusable Components
            </Typography>
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: 0.6,
              }}
              color="primary"
            >
              How we measured it
            </Typography>
            <Typography mb={1}>
              Tracked component usage across brand repositories using internal
              engineering analytics.
            </Typography>
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: 0.6,
                mt: 2,
              }}
              color="primary"
            >
              Impact
            </Typography>
            <Typography>
              Eliminated redundant codebases and accelerated onboarding for new
              brands post-acquisition.
            </Typography>
          </Card>
        </Grid>

        <Grid size={{ md: 4 }}>
          <Card
            sx={{
              p: 4,
              boxShadow: "none",
              borderRadius: "8px",
              background: "#E9EDF0",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="h1" fontWeight="bold" mb={5}>
              44%
            </Typography>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Fewer Visual Bugs
            </Typography>
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: 0.6,
              }}
              color="primary"
            >
              How we measured it
            </Typography>
            <Typography mb={1}>
              Compared UI-related regression tickets before and after adoption
              using QA reports.
            </Typography>
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: 0.6,
                mt: 2,
              }}
              color="primary"
            >
              Impact
            </Typography>
            <Typography>
              Improved customer trust, reduced inconsistencies, and lowered
              accessibility-related escalations.
            </Typography>
          </Card>
        </Grid>
      </Grid> */}

      {/* <Stack sx={{ mb: 4 }}>
        <Typography variant="body2" fontWeight="bold" color="#196BDE" mb={0.5}>
          REFLECTION
        </Typography>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          From Fragmentation to Foundation
        </Typography>
        <Typography variant="body2" mb={2}>
          What began as a tangle of independent systems and conflicting patterns
          evolved into a shared foundation powering every brand. The design
          system turned scale from a liability into an advantage — enabling
          Newfold to move faster, reduce risk, and create consistent, accessible
          experiences without sacrificing brand identity.
        </Typography>
        <Typography variant="body2">
          In the end, dozens of voices now speak through one system: unified,
          flexible, and ready to grow.
        </Typography>
      </Stack> */}
      {/* </Container> */}
    </>
  );
};

export default MultiBrandDesignSystem;
