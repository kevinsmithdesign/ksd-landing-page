import React from "react";
import { Box, useTheme, Typography } from "@mui/material";

const Loader = () => {
  const theme = useTheme();

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
      <Typography variant="h6" mb={1} mt={3} color="white" textAlign="center">
        Loading...
      </Typography>
      <Box
        sx={{
          width: "70%",
          height: "12px",
          background: "#222",
          borderRadius: "8px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "20%",
            height: "12px",
            background: theme.palette.primary.main,
            borderRadius: "8px",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Loader;
