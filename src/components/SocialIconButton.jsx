import React from "react";
import { Box } from "@mui/material";

const SocialIconBox = ({
  icon: IconComponent,
  href,
  size = 40,
  borderRadius = 8,
  hoverBackground = "#222",
  ...boxProps
}) => {
  const content = (
    <Box
      sx={{
        width: `${size}px`,
        height: `${size}px`,
        background: "",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: `${borderRadius}px`,
        cursor: "pointer",
        "&:hover": {
          background: hoverBackground,
        },
        ...boxProps.sx,
      }}
      {...boxProps}
    >
      {IconComponent && <IconComponent />}
    </Box>
  );

  if (href) {
    // Ensure the URL has a protocol
    const fullUrl =
      href.startsWith("http://") || href.startsWith("https://")
        ? href
        : `https://${href}`;

    return (
      <a
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default SocialIconBox;
