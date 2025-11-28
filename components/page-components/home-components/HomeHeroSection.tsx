// portfolio-page\components\page-components\home-components\HomeHeroSection.tsx
import { Box, Typography } from "@mui/material";

const HomeHeroSection = () => {
  return (
    <>
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Full Stack Developer
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          (React / Next.js / Node / wordpress)
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#ccc" }}
          maxWidth="700px"
          mx="auto"
        >
          Αναλαμβάνω την κατασκευή websites, e-shops και custom web εφαρμογές με
          custom κώδικα ή wordpress
        </Typography>
      </Box>
    </>
  );
};

export default HomeHeroSection;
