// portfolio-page\constants\constants.ts

import { shade } from "@/utils/colorUtils";

// colors
export const white = "#ffffff";
export const offWhite = "#F7F3E9"
export const darkAnthrax = "#1a1a1a";
export const accentCoral = '#FF6B5A';   // ζεστό coral / red-orange
export const accentLilac = '#B77CFF';   // bright lilac / violet
export const accentMint = '#6FF2B0';    // fresh mint green
export const primaryColor = "#000000";
export const secondaryColor = "#F7F3E9";
export const primaryBrightColor = "#48C4Cf";
export const secondaryBrightColor = "#FFD500";
export const marPurple = "#933fff";
export const marBlue = "#3f6cff";
export const marGreen = "#34bf62";
export const marCoral = "#ff9283";
export const marOrangeRed = "#f75439";
export const marOchre = "#bc9133";
export const accentElectricCyan = "#00E5FF";  // electric accent / highlight
export const accentLightViolet = "#B388FF";   // soft bright violet
export const accentWarmHighlight = "#ffb300"; // warm highlight / badge
export const accentCTAOrange = "#ef6c00";     // strong CTA orange
export const accentLinkBlue = "#1976d2";      // clean link blue
export const accentDarkGreen = "#2e7d32";     // solid dark green
// Σημείωση για το shade + → φωτίζει, - → σκουραίνει
export const primaryDarkenColor = shade(primaryBrightColor, -25);
export const secondaryDarkenColor = shade(secondaryBrightColor, -25);
// color usage
export const btnBgColor = primaryColor;
export const btnIconColor = secondaryColor;
export const footerBgColor = secondaryColor;
export const headerBgColor = footerBgColor
export const secondaryHeaderBGcolor = primaryBrightColor;

// contact - social
export const instagram = ".";
export const facebook = ".";
export const phone = "6947733075";
export const mail = "alkisax@gmail.com";
