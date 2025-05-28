// LightDarkModeToggle.js - Just replace your toggle component with this
import React, { useState } from "react";
import { Typography, Stack, Box } from "@mui/material";
import MoonIcon from "../assets/images/MoonIcon";
import SunIcon from "../assets/images/SunIcon";

const LightDarkModeToggle = ({ onThemeChange }) => {
  const [isLight, setIsLight] = useState(false);

  const handleToggle = () => {
    const newMode = !isLight;
    setIsLight(newMode);
    if (onThemeChange) {
      onThemeChange(newMode ? "light" : "dark");
    }
  };

  return (
    <Box onClick={handleToggle} sx={{ cursor: "pointer" }}>
      {isLight ? (
        <Stack flexDirection="row" alignItems="center" gap={0.5}>
          <SunIcon />
          <Typography color="text.primary">Light</Typography>
        </Stack>
      ) : (
        <Stack flexDirection="row" alignItems="center" gap={0.5}>
          <MoonIcon />
          <Typography color="text.primary">Dark</Typography>
        </Stack>
      )}
    </Box>
  );
};

export default LightDarkModeToggle;
