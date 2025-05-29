import React from "react";
import DevelopmentWork from "./DevelopmentWork";
import usePreloadImages from "../hooks/usePreloadImages";
import PromptRank from "../assets/images/PromptRank.svg";
import WLDesignSystem from "../assets/images/WLDesignSystem.svg";
import { CircularProgress, Box } from "@mui/material";

const DevelopmentWorkWrapper = () => {
  const isReady = usePreloadImages([PromptRank, WLDesignSystem]);

  if (!isReady) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return <DevelopmentWork />;
};

export default DevelopmentWorkWrapper;
