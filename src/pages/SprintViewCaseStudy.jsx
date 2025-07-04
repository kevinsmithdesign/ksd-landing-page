import React, { useState } from "react";
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
  useTheme,
} from "@mui/material";
import "../App.css";
import SprintViewCaseStudyHeroImg from "../assets/images/SprintViewCaseStudyHeroImg.png";
import SprintViewProblemStatementImg from "../assets/images/SprintViewProblemStatementImg.png";
import SprintViewMeetingPage from "../assets/images/SprintViewMeetingPage.png";
import SprintViewAnalyticsPage from "../assets/images/SprintViewAnalyticsPage.png";

import SprintViewBoard from "../assets/images/SprintViewBoard.png";
import SprintViewChatPage from "../assets/images/SprintViewChatPage.png";
import SprintViewCalendarPage from "../assets/images/SprintViewCalendarPage.png";
import SprintViewAiAssistantPage from "../assets/images/SprintViewAiAssistantPage.png";

import DailyTimeBreakdownImg from "../assets/images/DailyTimeBreakdownImg.svg";
import DailyToolSwitchingImg from "../assets/images/DailyToolSwitchingImg.svg";
import ClockIcon from "../icons/ClockIcon";
import WarningCircleIcon from "../icons/WarningCircleIcon";
import ToolSwitchingIcon from "../icons/ToolSwitchingIcon";
import BoltIcon from "../icons/BoltIcon";
import CompetitiveAnalysis from "../components/CompetitiveAnalysis";
import AiIcon from "../icons/AiIcon";

const SprintViewCaseStudy = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          background: "#B6BAEA",
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center", maxWidth: "1100px", mx: "auto" }}>
            <Typography
              variant="h3"
              pt={16}
              pb={3}
              fontWeight={600}
              lineHeight={"3.8rem"}
            >
              SprintView Saves Teams 14 Hours Every Month by Unifying Sprint
              Collaboration
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "white",
                p: "12px 20px",

                fontWeight: "bold",
                boxShadow: "none",
                color: "black",
                borderRadius: "32px",
                textTransform: "capitalize",

                mb: 4,
                "&:hover": {
                  background: "#ddd",
                  boxShadow: "none",
                },
              }}
            >
              View Prototype
            </Button>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={SprintViewCaseStudyHeroImg}
              alt="SprintView Hero Section Image"
              style={{
                width: "100%",
                height: "auto",
                margin: "auto",
              }}
            />
          </Box>
        </Container>
      </Box>
      {/* Problem Statement Starts */}
      <Box sx={{ background: "#fff", pt: 10, pb: 10 }}>
        <Container sx={{ background: "" }}>
          <Grid container spacing={20}>
            <Grid size={{ md: 6 }}>
              <Box
                sx={{
                  mb: 1,
                }}
              >
                <Typography
                  fontWeight="bold"
                  variant="body2"
                  mb={0}
                  p={0}
                  color="#4971F4"
                >
                  PROBLEM
                </Typography>
              </Box>
              <Typography variant="h4" pb={2} fontWeight={600}>
                Teams Waste 20% of Every Sprint on Scattered Tools and Reactive
                Planning
              </Typography>
            </Grid>
            <Grid size={{ md: 6 }}>
              <Typography variant="body2" mb={2}>
                I watched a Scrum Master spend 20 minutes hunting for sprint
                blockers across Jira, Slack, and three different spreadsheets
                while her team waited in standup. Teams were jumping between
                five different tools just to understand basic sprint progress.
              </Typography>
              <Typography variant="body2" mb={6}>
                What really frustrated me more was watching them fly
                blind—estimating capacity with gut feelings, discovering
                critical blockers during stand-ups instead of when they
                happened, and constantly guessing whether sprints would actually
                finish on time. It felt absurd that AI could predict code bugs
                but teams were still playing guessing games with sprint
                delivery.
              </Typography>
            </Grid>
          </Grid>

          <img
            src={SprintViewProblemStatementImg}
            alt="SprintView Problem Statement Image"
            style={{ width: "100%", height: "auto", margin: "" }}
          />
        </Container>
      </Box>
      {/* Research Starts */}
      <Box sx={{ background: "#F5F9FC", pt: 10, pb: 10 }}>
        <Container sx={{ background: "" }}>
          <Grid container spacing={20}>
            <Grid size={{ md: 6 }}>
              <Box
                sx={{
                  mb: 1,
                }}
              >
                <Typography
                  fontWeight="bold"
                  variant="body2"
                  mb={0}
                  p={0}
                  color="#4971F4"
                >
                  RESEARCH
                </Typography>
              </Box>
              <Typography variant="h4" pb={2} fontWeight={600}>
                Six Teams Revealed Why Sprint Management Teams Need AI
                Intelligence
              </Typography>
            </Grid>
            <Grid size={{ md: 6 }}>
              <Typography variant="body2" mb={2}>
                I shadowed 6 teams across 3 companies during their actual sprint
                ceremonies and timed their context switches. The average team
                lost 50 minutes per day just navigating between tools and
                manually managing sprint overhead. Scrum Masters were playing
                detective, manually piecing together sprint health from
                scattered data.
              </Typography>
              <Typography variant="body2" mb={6}>
                But the bigger insight was watching teams miss patterns that AI
                could easily catch—capacity overruns that were predictable from
                past sprints, blockers that followed the same team dynamics
                every time, and sprint risks that emerged gradually but only got
                noticed during crisis moments. The moment that stuck with me was
                when an engineer said, "By the time I update everything, I've
                forgotten what I was actually building."
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 4, boxShadow: "none", borderRadius: "16px" }}>
                <Typography fontWeight="bold" mb={2}>
                  DAILY TIME BREAKDOWN
                </Typography>
                <img
                  src={DailyTimeBreakdownImg}
                  alt="Daily Time Breakdown Chart"
                  style={{ width: "100%", height: "auto", margin: "" }}
                />
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 4, boxShadow: "none", borderRadius: "16px" }}>
                <Typography fontWeight="bold" mb={2}>
                  DAILY TOOL SWITCHING
                </Typography>
                <img
                  src={DailyToolSwitchingImg}
                  alt="Daily Tools Switching Chart"
                  style={{ width: "100%", height: "auto", margin: "" }}
                />
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, boxShadow: "none", borderRadius: "16px" }}>
                <Stack flexDirection="row" alignItems="center">
                  <Stack flexGrow={1} sx={{ background: "" }}>
                    <Typography fontWeight="bold">LOST TIME</Typography>
                  </Stack>
                  <Stack>
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        background: "#F7946F",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ClockIcon />
                    </Box>
                  </Stack>
                </Stack>
                <Typography variant="h3" fontWeight="bold">
                  50 mins
                </Typography>
                <Typography color="#8B8E96" variant="body2">
                  Lost daily to manual overhead
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, boxShadow: "none", borderRadius: "16px" }}>
                <Stack flexDirection="row" alignItems="center">
                  <Stack flexGrow={1} sx={{ background: "" }}>
                    <Typography fontWeight="bold">SPRINT WASTE</Typography>
                  </Stack>
                  <Stack>
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        background: "#FCD98E",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <WarningCircleIcon />
                    </Box>
                  </Stack>
                </Stack>
                <Typography variant="h3" fontWeight="bold">
                  25%
                </Typography>
                <Typography color="#8B8E96" variant="body2">
                  Of every sprint wasted on overhead
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, boxShadow: "none", borderRadius: "16px" }}>
                <Stack flexDirection="row" alignItems="center">
                  <Stack flexGrow={1} sx={{ background: "" }}>
                    <Typography fontWeight="bold">CONTEXT SWITCHING</Typography>
                  </Stack>
                  <Stack>
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        background: "#B6BAEA",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ToolSwitchingIcon />
                    </Box>
                  </Stack>
                </Stack>
                <Typography variant="h3" fontWeight="bold">
                  55 x
                </Typography>
                <Typography color="#8B8E96" variant="body2">
                  Daily tools switches breaking focus
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Competitive analysis starts */}

      <Box sx={{ background: "#F5F9FC", pb: 10 }}>
        <Container sx={{ background: "" }}>
          <Grid container spacing={20}>
            <Grid size={{ md: 6 }}>
              <Box
                sx={{
                  mb: 1,
                }}
              >
                <Typography
                  fontWeight="bold"
                  variant="body2"
                  mb={0}
                  p={0}
                  color="#4971F4"
                >
                  COMPETITIVE ANALYSIS
                </Typography>
              </Box>
              <Typography variant="h4" pb={4} fontWeight={600}>
                Competitors Offer Point Solutions, Not Unified Platforms
              </Typography>
            </Grid>
            <Grid size={{ md: 6 }}>
              <Typography variant="body2" mb={2}>
                I analyzed major sprint planning tools to understand why teams
                were still struggling despite having options like Jira, ClickUp,
                and Monday. What I discovered was that every competitor solved
                pieces of the puzzle—Jira handled sprint boards well, ClickUp
                had decent project management, Monday offered good collaboration
                features—but none unified the entire workflow with intelligent
                assistance.
              </Typography>
              <Typography variant="body2" mb={6}>
                The bigger realization was that competitors were stuck in the
                old paradigm of building better point solutions rather than
                rethinking the fundamental problem. While they competed on
                features like better kanban boards or prettier interfaces, teams
                were still jumping between tools. This validated that our
                unified platform approach with AI intelligence wasn't just
                different—it was solving a problem no one else was addressing.
              </Typography>
            </Grid>
          </Grid>

          <CompetitiveAnalysis
            handleTabChange={handleTabChange}
            tabValue={tabValue}
            setTabValue={tabValue}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{
                display: "inline-flex",
                backgroundColor: "#fff",
                borderRadius: "32px",
                p: "8px",
                "& .MuiTab-root": {
                  borderRadius: "24px",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "#777",
                  "&.Mui-selected": {
                    backgroundColor: "#4971F4",

                    color: "#fff",
                  },
                },
              }}
            >
              <Tab label="Direct Competitors" id="tab-0" />
              <Tab label="Indirect Competitors" id="tab-1" />
            </Tabs>
          </Box>
        </Container>
      </Box>

      {/* STRATEGY Starts */}
      <Box sx={{ background: "#fff", pb: 10, pt: 10 }}>
        <Container>
          <Grid container spacing={20}>
            <Grid size={{ md: 6 }}>
              <Box
                sx={{
                  mb: 1,
                }}
              >
                <Typography
                  fontWeight="bold"
                  variant="body2"
                  mb={0}
                  p={0}
                  color="#4971F4"
                >
                  STRATEGY
                </Typography>
              </Box>
              <Typography variant="h4" pb={4} fontWeight={600}>
                One Platform with Intelligence Everywhere
              </Typography>
            </Grid>
            <Grid size={{ md: 6 }}>
              <Typography variant="body2" mb={2}>
                Instead of building another point solution, I designed a unified
                collaboration platform that brings sprint boards, video
                meetings, team chat, scheduling, and analytics into one
                intelligent workspace. Teams needed to stop jumping between
                tools to piece together their sprint reality.
              </Typography>
              <Typography variant="body2" mb={6}>
                The key insight: AI shouldn't be a separate assistant—it should
                be ambient intelligence that enhances every feature. From
                suggesting optimal meeting times based on team patterns to
                predicting sprint completion using historical velocity,
                intelligence should flow naturally through the entire platform
                rather than feel bolted on.
              </Typography>
            </Grid>
          </Grid>

          <Card
            sx={{
              px: 4,
              py: 6,
              boxShadow: "none",
              borderRadius: "16px",
              background: "#F5F9FC",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  background: "#B6BAEA",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  mx: "auto",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AiIcon />
              </Box>
              <Typography fontWeight="bold" variant="h5" mb={2}>
                How can I assist you today?
              </Typography>

              <Box sx={{ maxWidth: "420px", mx: "auto" }}>
                <Typography variant="body2" mb={3} color="#8B8E96">
                  I have access to all your SprintView data including sprint
                  progress, team conversations, meeting notes, and board
                  updates. Ask me anything about your Sprint.
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ p: 4, boxShadow: "none", borderRadius: "16px" }}>
                  <Typography fontWeight="bold" mb={1}>
                    Examples
                  </Typography>
                  <Card
                    sx={{
                      p: 2,
                      boxShadow: "none",
                      borderRadius: "8px",
                      background: "#F5F9FC",
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2">
                      Show me all blockers mentioned in today's standup
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      p: 2,
                      boxShadow: "none",
                      borderRadius: "8px",
                      background: "#F5F9FC",
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2">
                      Which team members are overloaded this sprint?
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      p: 2,
                      boxShadow: "none",
                      borderRadius: "8px",
                      background: "#F5F9FC",
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2">
                      Generate a summary of our retrospective decisions
                    </Typography>
                  </Card>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ p: 4, boxShadow: "none", borderRadius: "16px" }}>
                  <Typography fontWeight="bold" mb={1}>
                    Capabilities
                  </Typography>
                  <Card
                    sx={{
                      p: 2,
                      boxShadow: "none",
                      borderRadius: "8px",
                      background: "#F5F9FC",
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2">
                      Cross-reference chat discussions with board status
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      p: 2,
                      boxShadow: "none",
                      borderRadius: "8px",
                      background: "#F5F9FC",
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2">
                      Analyze meeting notes for action items and decisions
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      p: 2,
                      boxShadow: "none",
                      borderRadius: "8px",
                      background: "#F5F9FC",
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2">
                      Track story progress and identify patterns
                    </Typography>
                  </Card>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ p: 4, boxShadow: "none", borderRadius: "16px" }}>
                  <Typography fontWeight="bold" mb={1}>
                    Limitations
                  </Typography>
                  <Card
                    sx={{
                      p: 2,
                      boxShadow: "none",
                      borderRadius: "8px",
                      background: "#F5F9FC",
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2">
                      Cannot predict external dependencies outside your team's
                      control
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      p: 2,
                      boxShadow: "none",
                      borderRadius: "8px",
                      background: "#F5F9FC",
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2">
                      Cannot replace human judgment for complex project
                      decisions
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      p: 2,
                      boxShadow: "none",
                      borderRadius: "8px",
                      background: "#F5F9FC",
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2">
                      Recommendations require team validation before
                      implementation
                    </Typography>
                  </Card>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
      {/*  Solution Starts */}
      <Box sx={{ background: "#fff" }}>
        <Container sx={{ background: "" }}>
          <Grid container spacing={20}>
            <Grid size={{ md: 6 }}>
              <Box
                sx={{
                  mb: 1,
                }}
              >
                <Typography
                  fontWeight="bold"
                  variant="body2"
                  mb={0}
                  p={0}
                  color="#4971F4"
                >
                  SOLUTION
                </Typography>
              </Box>
              <Typography variant="h4" pb={2} fontWeight={600}>
                Unified Workspace Where Intelligence Flows Naturally
              </Typography>
            </Grid>
            <Grid size={{ md: 6 }}>
              <Typography variant="body2" mb={2}>
                SprintView provides kanban boards with real-time collaboration,
                integrated video huddles with AI capacity recommendations, team
                messaging with smart file organization, calendar views that sync
                work with time, and analytics dashboards with predictive
                insights. Teams work in one platform while eliminating tool
                switching chaos.
              </Typography>
              <Typography variant="body2" mb={6}>
                The AI layer connects everything—automatically detecting
                blockers from chat patterns, predicting sprint completion based
                on velocity trends, suggesting optimal capacity allocation using
                team history, and surfacing sprint health insights that would
                otherwise stay hidden until problems became crises.
              </Typography>
            </Grid>
          </Grid>

          {/* 
          <Grid container spacing={20}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" fontWeight="bold">
                Board Page
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </Typography>
            </Grid>
          </Grid> */}
        </Container>
        <Box sx={{ background: "#B6BAEA" }}>
          <Container>
            <img
              src={SprintViewBoard}
              alt="SprintView Board Page"
              style={{ width: "100%", height: "auto", marginTop: "64px" }}
            />
            <img
              src={SprintViewCalendarPage}
              alt="SprintView Calendar Page"
              style={{ width: "100%", height: "auto", marginTop: "64px" }}
            />
            <img
              src={SprintViewMeetingPage}
              alt="SprintView Video Call"
              style={{ width: "100%", height: "auto", marginTop: "64px" }}
            />
            <img
              src={SprintViewChatPage}
              alt="SprintView Chat Page"
              style={{ width: "100%", height: "auto", marginTop: "64px" }}
            />
            <img
              src={SprintViewAnalyticsPage}
              alt="SprintView Analytics Page"
              style={{ width: "100%", height: "auto", marginTop: "64px" }}
            />
            <img
              src={SprintViewAiAssistantPage}
              alt="SprintView Ai Assistant Page"
              style={{
                width: "100%",
                height: "auto",
                marginTop: "64px",
                marginBottom: "64px",
              }}
            />
          </Container>
        </Box>
      </Box>

      <Box sx={{ background: "#F5F9FC", pt: 10, pb: 10 }}>
        <Container sx={{ background: "" }}>
          <Grid container spacing={20}>
            <Grid size={{ md: 6 }}>
              <Box
                sx={{
                  mb: 1,
                }}
              >
                <Typography
                  fontWeight="bold"
                  variant="body2"
                  mb={0}
                  p={0}
                  color="#4971F4"
                >
                  IMPACT
                </Typography>
              </Box>
              <Typography variant="h4" pb={2} fontWeight={600}>
                Teams Stopped Tool-Hopping and Started Flowing
              </Typography>
            </Grid>
            <Grid size={{ md: 6 }}>
              <Typography variant="body2" mb={2}>
                The unified platform improved how teams worked: 30% reduction in
                sprint overhead, 18 hours monthly saved per team, 45% reduction
                in context switching, and teams identifying blockers an average
                of 1.5 days earlier. Teams reported feeling more connected and
                informed, with sprint health becoming visible rather than
                mysterious.
              </Typography>
              <Typography variant="body2" mb={6}>
                The AI's cross-platform insights helped teams catch patterns
                they'd never seen before—predicting sprint risks three days
                earlier, suggesting capacity adjustments based on historical
                performance, and automatically flagging potential blockers
                before they impacted delivery timelines.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, boxShadow: "none", borderRadius: "16px" }}>
                <Stack flexDirection="row" alignItems="center">
                  <Stack flexGrow={1} sx={{ background: "" }}>
                    <Typography fontWeight="bold">SPRINT OVERHEAD</Typography>
                  </Stack>
                  <Stack>
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",

                        background: "#FCD98E",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BoltIcon />
                    </Box>
                  </Stack>
                </Stack>
                <Typography variant="h3" fontWeight="bold">
                  30%
                </Typography>
                <Typography color="#8B8E96" variant="body2">
                  Reduction in sprint overhead
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, boxShadow: "none", borderRadius: "16px" }}>
                <Stack flexDirection="row" alignItems="center">
                  <Stack flexGrow={1} sx={{ background: "" }}>
                    <Typography fontWeight="bold">TIME SAVED</Typography>
                  </Stack>
                  <Stack>
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        // background: "#FCD98E",
                        background: "#77B8A0",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ClockIcon />
                    </Box>
                  </Stack>
                </Stack>
                <Typography variant="h3" fontWeight="bold">
                  18 hrs
                </Typography>
                <Typography color="#8B8E96" variant="body2">
                  Of every sprint wasted on overhead
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, boxShadow: "none", borderRadius: "16px" }}>
                <Stack flexDirection="row" alignItems="center">
                  <Stack flexGrow={1} sx={{ background: "" }}>
                    <Typography fontWeight="bold">CONTEXT SWITCHING</Typography>
                  </Stack>
                  <Stack>
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        background: "#B6BAEA",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ToolSwitchingIcon />
                    </Box>
                  </Stack>
                </Stack>
                <Typography variant="h3" fontWeight="bold">
                  45%
                </Typography>
                <Typography color="#8B8E96" variant="body2">
                  Reduction in context switching
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#fff", pt: 10, pb: 10 }}>
        <Container sx={{ background: "" }}>
          <Grid container spacing={20}>
            <Grid size={{ md: 6 }}>
              <Box
                sx={{
                  mb: 1,
                }}
              >
                <Typography
                  fontWeight="bold"
                  variant="body2"
                  mb={0}
                  p={0}
                  color="#4971F4"
                >
                  RESULTS
                </Typography>
              </Box>
              <Typography variant="h4" pb={4} fontWeight={600}>
                Platform Thinking Drives Competitive Advantage
              </Typography>
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "none",
                    background: "#ddd",
                    color: "#000",
                  },
                  borderRadius: "32px",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  p: "12px 24px",
                  background: "#4971F4",
                }}
              >
                View Prototype
              </Button>
            </Grid>
            <Grid size={{ md: 6 }}>
              <Typography variant="body2" mb={2}>
                The unified platform delivered 260% ROI within 8 months,
                validated a $220M addressable market opportunity for integrated
                sprint collaboration, and positioned the company beyond
                traditional project management into intelligent team
                collaboration. Teams using SprintView reported higher sprint
                satisfaction and more predictable delivery compared to
                fragmented toolchains.
              </Typography>
              <Typography variant="body2" mb={6}>
                The combination of platform consolidation and ambient
                intelligence created a defensible competitive
                advantage—competitors could copy individual features, but
                replicating the cross-platform intelligence and unified workflow
                proved much harder.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SprintViewCaseStudy;
