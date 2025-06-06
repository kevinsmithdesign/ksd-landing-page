import { createTheme } from "@mui/material/styles";
import { createContext, useContext, useState } from "react";

// Theme mode context
export const ThemeModeContext = createContext();

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    return { mode: "dark", toggleMode: () => {}, isLight: false };
  }
  return context;
};

const createCustomTheme = (mode) => {
  const isLight = mode === "light";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#3657FF",
        dark: "#2E4AD9",
        contrastText: "#fff",
      },
      secondary: {
        main: "#9c27b0",
        light: "#ba68c8",
        dark: "#7b1fa2",
        contrastText: "#fff",
      },
      background: {
        // default: isLight ? "#F5F7FB" : "#000000",
        default: isLight ? "#fafafa" : "#000000",
      },
      text: {
        primary: isLight ? "#333" : "#ffffff",
        secondary: isLight ? "#ADB3BA" : "#ADB3BA",
        disabled: isLight ? "rgba(0, 0, 0, 0.38)" : "rgba(255, 255, 255, 0.38)",
      },
      custom: {
        lightGrey: isLight ? "#f0f0f0" : "#333333",
        darkGrey: isLight ? "#333333" : "#f0f0f0",
        cardBackground: isLight ? "#ffffff" : "#111111",
        borderColor: isLight ? "#e0e0e0" : "#222222",
      },
    },
    typography: {
      fontFamily: '"SF Pro Display", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: "3.5rem",
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 600,
        fontSize: "2rem",
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.75rem",
        lineHeight: 1.4,
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: 1.4,
      },
      h6: {
        fontWeight: 500,
        fontSize: "1.1rem",
        lineHeight: 1.4,
      },
      subtitle1: {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      subtitle2: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
        fontWeight: 500,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
      },
      button: {
        textTransform: "none",
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 8,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 32,
            padding: "10px 24px",
            fontWeight: 600,
          },
          containedPrimary: {
            boxShadow: "0 4px 6px rgba(25, 118, 210, 0.25)",
            "&:hover": {
              boxShadow: "0 6px 10px rgba(25, 118, 210, 0.1)",
              backgroundColor: "#2E4AD9",
            },
            "&:disabled": {
              backgroundColor: isLight ? "#e0e0e0" : "#333",
              color: isLight ? "#999" : "#111",
            },
          },
        },
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: "0 24px 12px  rgba(25, 118, 210, 0.01)",
            backgroundColor: isLight ? "#fff" : "#000",
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 300,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
};

// Default export - your theme
const theme = createCustomTheme("dark");
export default theme;

// Named export for dynamic theme creation
export { createCustomTheme };
