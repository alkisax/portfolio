// portfolio-page/app/projects/page.tsx
"use client";

import { Container } from "@mui/material";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function ProjectsPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      <ProjectsSection />
    </Container>
  );
}