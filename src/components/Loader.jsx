import React from "react";
import { Box, useTheme, Typography } from "@mui/material";

const Loader = () => {
  const theme = useTheme();

  const fillColor = theme.palette.mode === "light" ? "#E4E8EE" : "#222";
  const textColor = theme.palette.mode === "light" ? "#333" : "#fff";

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        mb={1}
        mt={3}
        color={textColor}
        textAlign="center"
      >
        Loading...
      </Typography>
      <Box
        sx={{
          width: "70%",
          height: "10px",
          background: fillColor,
          borderRadius: "8px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "20%",
            height: "10px",
            background: theme.palette.primary.main,
            borderRadius: "8px",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Loader;
