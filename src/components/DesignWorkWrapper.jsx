import React from "react";
import DesignWork from "./DesignWork";
import usePreloadImages from "../hooks/usePreloadImages";
import SprintView from "../assets/images/SprintView.svg";
import CreditFlow from "../assets/images/CreditFlow.svg";
import FoodApp from "../assets/images/FoodApp.svg";
import RealEstateApp from "../assets/images/RealEstateApp.svg";
import { CircularProgress, Box } from "@mui/material";

const DesignWorkWrapper = () => {
  const isReady = usePreloadImages([
    SprintView,
    CreditFlow,
    FoodApp,
    RealEstateApp,
  ]);

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

  return <DesignWork />;
};

export default DesignWorkWrapper;
