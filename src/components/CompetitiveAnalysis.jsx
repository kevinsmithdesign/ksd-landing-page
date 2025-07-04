import React, { useState } from "react";
import {
  Box,
  Card,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Typography,
  Container,
  useTheme,
} from "@mui/material";

import CheckIcon from "../icons/CheckIcon.svg";
import CloseIcon from "../icons/CloseIcon.svg";

// TabPanel component for tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`competitor-tabpanel-${index}`}
      aria-labelledby={`competitor-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 0 }}>{children}</Box>}
    </div>
  );
}

const CompetitiveAnalysis = ({ tabValue }) => {
  const theme = useTheme();
  // const [tabValue, setTabValue] = useState(0);

  // const handleTabChange = (event, newValue) => {
  //   setTabValue(newValue);
  // };

  // Direct competitors data
  const directCompetitors = [
    {
      name: "SprintView",
      features: {
        "Intergrated Video Calls": true,
        "AI-Powered Planning": true,
        "Real-time Health Monitoring": true,
        "Spring Planning": true,
        "Burndown Charts": true,
        "Team Colloration": true,
        "Advanced Reporting": false,
      },
    },
    {
      name: "Jira",
      features: {
        "Intergrated Video Calls": false,
        "AI-Powered Planning": false,
        "Real-time Health Monitoring": false,
        "Spring Planning": true,
        "Burndown Charts": true,
        "Team Colloration": true,
        "Advanced Reporting": true,
      },
    },
    {
      name: "ClickUp",
      features: {
        "Intergrated Video Calls": false,
        "AI-Powered Planning": false,
        "Real-time Health Monitoring": false,
        "Spring Planning": true,
        "Burndown Charts": true,
        "Team Colloration": true,
        "Advanced Reporting": true,
      },
    },
  ];

  // Indirect competitors data
  const indirectCompetitors = [
    {
      name: "Trello",
      features: {
        "Intergrated Video Calls": false,
        "AI-Powered Planning": false,
        "Real-time Health Monitoring": false,
        "Spring Planning": false,
        "Burndown Charts": false,
        "Team Colloration": true,
        "Advanced Reporting": false,
      },
    },
    {
      name: "Asana",
      features: {
        "Intergrated Video Calls": false,
        "AI-Powered Planning": false,
        "Real-time Health Monitoring": false,
        "Spring Planning": false,
        "Burndown Charts": false,
        "Team Colloration": true,
        "Advanced Reporting": true,
      },
    },
    {
      name: "Monday.com",
      features: {
        "Intergrated Video Calls": false,
        "AI-Powered Planning": false,
        "Real-time Health Monitoring": false,
        "Spring Planning": true,
        "Burndown Charts": true,
        "Team Colloration": true,
        "Advanced Reporting": false,
      },
    },
  ];

  const featuresOrder = [
    "Intergrated Video Calls",
    "AI-Powered Planning",
    "Real-time Health Monitoring",
    "Spring Planning",
    "Burndown Charts",
    "Team Colloration",
    "Advanced Reporting",
  ];

  // Calculate feature score
  const calculateFeatureScore = (features) => {
    return Object.values(features).filter(Boolean).length;
  };

  // Render competitor cards
  const renderCompetitorCards = (competitors) => {
    return (
      <Grid container spacing={2}>
        {competitors.map((competitor, index) => {
          const featureScore = calculateFeatureScore(competitor.features);
          const scorePercentage = (featureScore / featuresOrder.length) * 100;

          return (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: "16px",
                  boxShadow: "none",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {competitor.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2">Feature Coverage</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {featureScore}/{featuresOrder.length}
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={scorePercentage}
                  sx={{
                    mb: 2,
                    height: 6,
                    borderRadius: "8px",
                    backgroundColor: "#F0F0F0", // <- background track color
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#B6BAEA", // <- bar color
                      borderRadius: "8px",
                    },
                  }}
                />

                <List disablePadding>
                  {featuresOrder.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} disableGutters>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        {competitor.features[feature] ? (
                          <img
                            src={CheckIcon}
                            alt="Check"
                            width="24"
                            height="24"
                          />
                        ) : (
                          <img
                            src={CloseIcon}
                            alt="Check"
                            width="24"
                            height="24"
                          />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          variant: "body2",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  // Component for Key Takeaways
  const KeyTakeaways = ({ isDirectCompetitors }) => {
    const takeaways = isDirectCompetitors
      ? [
          {
            text: (
              <Typography variant="body2">
                <strong>SprintView</strong> SprintView offers the most
                comprehensive sprint-focused feature set (6/7)
              </Typography>
            ),
          },
          {
            text: (
              <Typography variant="body2">
                Only <strong>SprintView</strong> provides integrated video
                communication during sprint planning
              </Typography>
            ),
          },
          {
            text: (
              <Typography variant="body2">
                AI-powered planning assistance is unique to{" "}
                <strong>SprintView</strong> in the current market
              </Typography>
            ),
          },
          {
            text: (
              <Typography variant="body2">
                Real-time health monitoring sets <strong>SprintView</strong>{" "}
                apart from reactive competitors
              </Typography>
            ),
          },
        ]
      : [
          {
            text: (
              <Typography variant="body2">
                <strong>Monday.com</strong> has the most features (4/7) among
                indirect competitors
              </Typography>
            ),
          },
          {
            text: (
              <Typography variant="body2">
                <strong>Trello</strong> has the lowest feature coverage (1/7)
                but excels in simplicity
              </Typography>
            ),
          },
          {
            text: (
              <Typography variant="body2">
                Indirect competitors focus on{" "}
                <strong>general project management</strong> rather than
                sprint-specific features
              </Typography>
            ),
          },
          {
            text: (
              <Typography variant="body2">
                None of the indirect competitors offer{" "}
                <strong>integrated communication</strong>
                or <strong>AI-powered planning</strong>
              </Typography>
            ),
          },
        ];

    return (
      <Card
        sx={{
          p: 4,
          borderRadius: "16px",
          boxShadow: "none",
          //   mt: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Key Takeaways
        </Typography>

        {takeaways.map((takeaway, index) => (
          <Box sx={{ display: "flex", mb: 1.5, alignItems: "center" }}>
            <Box>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  background: "#B6BAEA",
                  borderRadius: "50%",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>{index + 1}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography>{takeaway.text}</Typography>
            </Box>
          </Box>
        ))}
      </Card>
    );
  };

  return (
    <>
      {/* Tab Panels */}
      <TabPanel value={tabValue} index={0}>
        {renderCompetitorCards(directCompetitors)}
        {/* <KeyTakeaways isDirectCompetitors={true} /> */}
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        {renderCompetitorCards(indirectCompetitors)}
        {/* <KeyTakeaways isDirectCompetitors={false} /> */}
      </TabPanel>
    </>
  );
};

export default CompetitiveAnalysis;
