"use client";

import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import HomeBtn from "@/components/page-components/home-components/HomeBtn";
import HomeHeroSection from "@/components/page-components/home-components/HomeHeroSection";

const HomePageBase = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* HERO */}
      <HomeHeroSection />

      {/* GRID BUTTONS */}
      <Grid container spacing={4}>
        <HomeBtn
          title="Services"
          href="/services"
          bg="#e0f7fa"
          badge="/badges/servicesbtn-transp.png"
        />
        <HomeBtn
          title="Projects"
          href="/projects"
          bg="#f3e5f5"
          badge="/badges/projectsbtn-transp.png"
        />
        <HomeBtn
          title="About Me"
          href="/about"
          bg="#fff9c4"
          badge="/badges/aboutbtn-transp.png"
        />
        <HomeBtn
          title="Contact"
          href="/contact"
          bg="#ffe0b2"
          badge="/badges/contactbtn-transp.png"
        />
      </Grid>
    </Container>
  );
};

export default HomePageBase;
