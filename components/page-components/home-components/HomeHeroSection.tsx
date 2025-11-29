"use client";

import { Box, Typography } from "@mui/material";
import HomeHeroImg from "./HomeHeroImg";

const HomeHeroSection = () => {
  return (
    <>
      <Box textAlign="center" mb={8}>
        {/* <Typography variant="h3" fontWeight="bold" gutterBottom>
          Full Stack Developer
        </Typography> */}

        {/* FULL-WIDTH HERO IMAGE WITH OVERLAY */}
        <HomeHeroImg />

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          (React / Next.js / Node / wordpress)
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#ccc" }}
          maxWidth="700px"
          mx="auto"
        >
          Αναλαμβάνω την κατασκευή websites, e-shops και custom web εφαρμογές
          με custom κώδικα ή wordpress
        </Typography>
      </Box>
    </>
  );
};

export default HomeHeroSection;
