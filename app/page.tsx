// portfolio-page\app\page.tsx
"use client";

import Link from "next/link";
import {
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import HomeBtn from "@/components/page-components/home-components/HomeBtn";
import HomeHeroSection from "@/components/page-components/home-components/HomeHeroSection";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* HERO */}
      <HomeHeroSection />

      {/* GRID BUTTONS */}
      <Grid container spacing={4}>
        <HomeBtn title="Services" href="/services" bg="#e0f7fa" />
        <HomeBtn title="Projects" href="/projects" bg="#f3e5f5" />
        <HomeBtn title="About Me" href="/about" bg="#fff9c4" />
        <HomeBtn title="Contact" href="/contact" bg="#ffe0b2" />
      </Grid>
    </Container>
  );
}
