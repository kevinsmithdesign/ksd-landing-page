import { useRef } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Button,
  Container,
  Grid,
  Card,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import theme from "./theme";

import Uiuxmockup from "./assets/images/Uiuxmockup";
import VisualDesign from "./assets/images/VisualDesign";
import DesignSystem from "./assets/images/DesignSystem";
import FrontEnd from "./assets/images/FrontEnd";
import BridgeGap from "./assets/images/BridgeGap";

import DiscoveryResearch from "./assets/images/DiscoveryResearch";
import StrategyPlanning from "./assets/images/StrategyPlanning";
import DesignPrototype from "./assets/images/DesignPrototype";
import TestingQualityAssurance from "./assets/images/TestingQualityAssurance";
import LaunchOptimization from "./assets/images/LaunchOptimization";
import ImgCarousel from "./components/ImgCarousel";
import Loader from "./components/Loader";
import DevelopmentImplementation from "./assets/images/DevelopmentImplementation";
import PurpleShape from "./assets/images/PurpleShape";
import YellowShape from "./assets/images/YellowShape";
import OrangeShape from "./assets/images/OrangeShape";
import GreenShape from "./assets/images/GreenShape";
import BlueShape from "./assets/images/BlueShape";
import PinkShape from "./assets/images/PinkShape";
import RedShape from "./assets/images/RedShape";
import Dribbbble from "./assets/images/Dribbble";
import LinkedIn from "./assets/images/LinkedIn";
import CodeSandBox from "./assets/images/CodeSandBox";
import GitHub from "./assets/images/GitHub";
import CodePen from "./assets/images/CodePen";
import SocialIconBox from "./components/SocialIconButton";

export default function App() {
  const footerRef = useRef(null);
  const cardStyles = {
    background: "#111",
    padding: "40px",
    borderRadius: "16px",
    height: "100%",
  };
  // Add this function inside your App component:
  const scrollToContact = () => {
    footerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Container sx={{ my: 12, textAlign: "center" }}>
          <Typography
            color="white"
            mb={2}
            variant="h1"
            sx={{ fontSize: { xs: "32px", sm: "70px", md: "80px" } }}
          >
            <span style={{ color: "#745AFC" }}>I'm kevin smith,</span> a product
            designer & developer
          </Typography>
          <Typography
            color="#ADB3BA"
            sx={{ fontSize: { xs: "12px", sm: "24px" } }}
          >
            Designing engaging digital experiences and driving business growth
            <br />
            by bridging the gap between design and development.
          </Typography>
        </Container>
        <ImgCarousel />
        <Container sx={{ my: 20 }}>
          <Typography
            variant="h1"
            color="#fff"
            mb={2}
            fontSize={{ xs: "60px", sm: "80px" }}
          >
            SERVICES
          </Typography>
          <Grid container spacing={1} mb={1}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card style={cardStyles}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "340px",
                    mb: 2,
                    "& svg": {
                      width: "100%",
                      height: "auto",
                      display: "block",
                    },
                  }}
                >
                  {" "}
                  <Uiuxmockup />
                </Box>

                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  UI/UX Design
                </Typography>
                <Typography variant="body1" color="#999">
                  Creating user-centered experiences through research and
                  testing that solve real problems and drive engagement.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card style={cardStyles}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "542px",
                    mb: 2,
                    "& svg": {
                      width: "100%",
                      height: "auto",
                      display: "block",
                    },
                  }}
                >
                  <VisualDesign />
                </Box>
                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Visual Design
                </Typography>
                <Typography variant="body1" color="#999">
                  Crafting distinctive visual identities that communicate values
                  and create meaningful connections with your audience.
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={1} mb={1}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card style={cardStyles}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "402px",
                    mb: 2,
                    "& svg": {
                      width: "100%",
                      height: "auto",
                      display: "block",
                    },
                  }}
                >
                  <DesignSystem />
                </Box>
                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Design Systems
                </Typography>
                <Typography variant="body1" color="#999">
                  Building scalable, consistent frameworks with reusable
                  components that streamline development and ensure brand
                  coherence.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card style={cardStyles}>
                <Box
                  sx={{
                    height: "86px",
                    mb: 2,
                  }}
                >
                  <Loader />
                </Box>
                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Motion & Animation
                </Typography>
                <Typography variant="body1" color="#999">
                  Adding life to interfaces through purposeful motion design
                  that guides attention, provides feedback, and creates
                  memorable interactions.
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={1} mb={1}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card style={cardStyles}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "402px",
                    display: "flex",
                    height: "102px",
                    mb: 2,
                    "& svg": {
                      width: "100%",
                      height: "auto",
                      display: "block",
                    },
                  }}
                >
                  <FrontEnd />
                </Box>
                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Front-End Development
                </Typography>
                <Typography variant="body1" color="#999">
                  Transforming designs into responsive, accessible code with
                  modern frameworks that deliver exceptional experiences.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card style={cardStyles}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "460px",
                    display: "flex",
                    height: "102px",
                    mb: 2,
                    "& svg": {
                      width: "100%",
                      height: "auto",
                      display: "block",
                    },
                  }}
                >
                  <BridgeGap />
                </Box>
                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Bridge the Gap
                </Typography>
                <Typography variant="body1" color="#999">
                  Connecting design vision with technical implementation through
                  effective communication and optimized workflows.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Container sx={{ my: 20 }}>
          <Typography
            variant="h1"
            color="white"
            fontSize={{ xs: "60px", sm: "80px" }}
            mb={2}
          >
            INSIGHT
          </Typography>

          <Grid container spacing={1} mb={1}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card
                sx={{
                  background: "#111",
                  padding: "40px",
                  borderRadius: "16px",
                }}
              >
                <Typography
                  variant="h1"
                  color="white"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "38px", sm: "64px" } }}
                  mb={6}
                >
                  Discover, Design, <br />
                  Develop, Deploy
                </Typography>
                <Stack flexDirection="row" alignItems="center" gap={3}>
                  <PurpleShape />
                  <YellowShape />
                  <OrangeShape />
                  <GreenShape />
                  <BlueShape />
                  <PinkShape />
                  <RedShape />
                </Stack>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card style={cardStyles}>
                <Typography
                  sx={{
                    fontSize: { xs: "24px", sm: "36px" },
                    lineHeight: { xs: "36px", sm: "46px" },
                  }}
                  color="white"
                  mb={4}
                >
                  Design that converts. Code that performs. Results that matter.
                </Typography>
                <Button variant="contained" onClick={scrollToContact}>
                  Let's Talk
                </Button>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={1} mb={1}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card style={cardStyles} sx={{ height: "600px" }}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: "96px", fontWeight: 600 }}
                  color="white"
                  mb={6}
                >
                  10+
                </Typography>
                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Years of Experience
                </Typography>
                <Typography variant="body1" color="#999">
                  Combining design expertise and development skill.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card style={cardStyles}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: "96px", fontWeight: 600 }}
                  color="white"
                  mb={6}
                >
                  8+
                </Typography>
                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Products Launched
                </Typography>
                <Typography variant="body1" color="#999">
                  From initial minimum viable products to fully-scaled
                  production platforms.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card style={cardStyles}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: "96px", fontWeight: 600 }}
                  color="white"
                  mb={6}
                >
                  4+
                </Typography>
                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Design Systems Built
                </Typography>
                <Typography variant="body1" color="#999">
                  With tokens, guidelines, and code integration.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Container sx={{ my: 20 }}>
          <Typography
            variant="h1"
            color="white"
            fontSize={{ xs: "60px", sm: "80px" }}
            mb={2}
          >
            PROCESS
          </Typography>
          <Grid container spacing={1} mb={1}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card style={cardStyles}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "390px",
                    mb: 2,
                    "& svg": {
                      width: "100%",
                      height: "auto",
                      display: "block",
                    },
                  }}
                >
                  <DiscoveryResearch />
                </Box>

                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Discover & Research
                </Typography>
                <Typography variant="body1" color="#999">
                  Understanding your business goals and user needs through
                  targeted research to identify key opportunities.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card style={cardStyles}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "360px",
                    mb: 2,
                    "& svg": {
                      width: "100%",
                      height: "auto",
                      display: "block",
                    },
                  }}
                >
                  <StrategyPlanning />
                </Box>

                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Strategy & Planning
                </Typography>
                <Typography variant="body1" color="#999">
                  Developing a focused roadmap with key features and user flows
                  to ensure we solve the right problems.
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={1} mb={1}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card style={cardStyles}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "270px",
                    mb: 2,
                    "& svg": {
                      width: "100%",
                      height: "auto",
                      display: "block",
                    },
                  }}
                >
                  <DesignPrototype />
                </Box>

                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Design & Prototype
                </Typography>
                <Typography variant="body1" color="#999">
                  Creating intuitive, visual solutions and refining through
                  iterative prototyping and testing.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card style={cardStyles}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "470px",
                    mb: 2,
                    "& svg": {
                      width: "100%",
                      height: "auto",
                      display: "block",
                    },
                  }}
                >
                  <DevelopmentImplementation />
                </Box>
                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Development & Implementation
                </Typography>
                <Typography variant="body1" color="#999">
                  Building responsive, accessible experiences with clean code
                  that performs across all devices.
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={1} mb={1}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card style={cardStyles}>
                {/* <Box sx={{ height: "94px", background: "", mb: 2 }}>
                  <TestingQualityAssurance />
                </Box> */}
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "400px",
                    mb: 2,
                    "& svg": {
                      width: "100%",
                      height: "auto",
                      display: "block",
                    },
                  }}
                >
                  <TestingQualityAssurance />
                </Box>
                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Testing & Quality Assurance
                </Typography>
                <Typography variant="body1" color="#999">
                  Ensuring functionality, performance, and user experience
                  through comprehensive testing and refinement.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card style={cardStyles}>
                {/* <Box sx={{ height: "122px", background: "", mb: 2 }}>
                  <LaunchOptimization />
                </Box> */}
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "480px",
                    mb: 2,
                    "& svg": {
                      width: "100%",
                      height: "auto",
                      display: "block",
                    },
                  }}
                >
                  <LaunchOptimization />
                </Box>
                <Typography variant="h4" color="white" fontWeight="bold" mb={1}>
                  Launch & Optimization
                </Typography>
                <Typography variant="body1" color="#999">
                  Deploying solutions and continuously improving based on
                  performance data and user feedback.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <footer ref={footerRef}>
        <Box
          sx={{
            background: "#111",
            width: "100%",
            py: 12,
            px: 4,
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
          }}
        >
          <Container>
            <Typography variant="h2" color="white" mb={4}>
              GET IN TOUCH
            </Typography>
            <Typography variant="h4" mb={2} color="white">
              Let's work together
            </Typography>
            <Typography color="white" mb={3}>
              I'm always open to discussing new projects, creative <br />
              ideas, or opportunities to be part of your vision or team.
            </Typography>
            <Typography color="white" fontWeight="bold" mb={0.5}>
              Email
            </Typography>
            <Typography color="white" mb={3}>
              info@kevinsmithdesign.com
            </Typography>

            <Stack flexDirection="row" gap={1} alignItems="center">
              <SocialIconBox
                icon={LinkedIn}
                href="https://www.linkedin.com/in/kevinsmithdesign/"
              />
              <SocialIconBox
                icon={Dribbbble}
                href="https://dribbble.com/kevinsmithdesign"
              />
              <SocialIconBox
                icon={CodeSandBox}
                href="https://codepen.io/kevinsmithdesign"
              />
              <SocialIconBox
                icon={GitHub}
                href="https://github.com/kevinsmithdesign"
              />
              <SocialIconBox
                icon={CodePen}
                href="https://codesandbox.io/u/kevinsmithdesign"
              />
            </Stack>
          </Container>
        </Box>
      </footer>
    </ThemeProvider>
  );
}
