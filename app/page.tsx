// portfolio-page\app\page.tsx
"use client";

import { Box } from "@mui/material";
import HomePageBase from "@/components/page-components/home-components/HomePageBase";
import {
  marPurple,
  marBlue,
  marGreen,
  marCoral,
  marOrangeRed,
  marOchre,
} from "@/constants/constants";
import ColorScrollBox from "@/components/media/ColorScrollBox";

const Page = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flex: 1, minHeight: 0 }}>
        <ColorScrollBox
          colors={[
            marPurple,
            marBlue,
            marGreen,
            marCoral,
            marOrangeRed,
            marOchre,
          ]}
        >
          <HomePageBase />
        </ColorScrollBox>
      </Box>
    </Box>
  );
};

export default Page;