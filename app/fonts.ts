import localFont from "next/font/local";

export const boldPixels = localFont({
  src: [
    {
      path: "../public/fonts/BoldPixels.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BoldPixels.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-boldpixels",
});
