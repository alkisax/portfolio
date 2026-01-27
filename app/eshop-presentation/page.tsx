"use client";

import { Box } from "@mui/material";
import ColorScrollBox from "@/components/media/ColorScrollBox";
import EshopPresent from "@/components/page-components/eshop/EshopPresent";
import { marBlue, marCoral, marGreen, marOchre, marOrangeRed, marPurple } from "@/constants/constants";

const Page = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Αν έχεις Header, μπαίνει εδώ */}

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
          <EshopPresent />
        </ColorScrollBox>
      </Box>
    </Box>
  );
};

export default Page;
