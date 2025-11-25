"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    text: {
      primary: "#fff",
      secondary: "#ccc",
    },
    grey: {
      900: "#111", // card background
      800: "#eee", // card text
      700: "#4fc3f7", // accent
    },
  },
});
