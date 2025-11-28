"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4fc3f7",    // aqua accent
      light: "#81d4fa",
      dark: "#0288d1",
      contrastText: "#000",
    },
    secondary: {
      main: "#ffd54f",    // warm secondary
      light: "#ffe082",
      dark: "#ffb300",
      contrastText: "#000",
    },
    text: {
      primary: "#fff",
      secondary: "#ccc",
    },
    grey: {
      900: "#111", // card background
      800: "#eee", // card text
      700: "#4fc3f7", // accent (same as primary)
    },
  },
});

