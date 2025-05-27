import React, { useState } from "react";
import { Typography, Stack, Box } from "@mui/material";
import MoonIcon from "../assets/images/MoonIcon";
import SunIcon from "../assets/images/SunIcon";

const LightDarkModeToggle = () => {
  const [mode, setMode] = useState(false);

  const handleToggle = () => {
    setMode(!mode);
  };

  return (
    <Box onClick={handleToggle} sx={{ cursor: "pointer" }}>
      {mode ? (
        <Stack flexDirection="row" alignItems="center" gap={0.5}>
          <SunIcon />
          <Typography color="white">Light</Typography>
        </Stack>
      ) : (
        <Stack flexDirection="row" alignItems="center" gap={0.5}>
          <MoonIcon />
          <Typography color="white">Dark</Typography>
        </Stack>
      )}
    </Box>
  );
};

export default LightDarkModeToggle;
