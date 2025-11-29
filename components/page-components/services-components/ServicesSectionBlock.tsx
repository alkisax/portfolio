// portfolio-page\components\page-components\services-components\ServicesSectionBlock.tsx
"use client";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ServicesSectionCard from "./ServicesSectionCard";

interface Props {
  sectionTitle: string;
  sectionDescription: string;
  cardTitle: string;
  cardDescription: string;
  bullets: string[];
  href: string;
  bg: string;
  buttonColor: string;
  badge?: string; 
}

export default function ServicesSectionBlock({
  sectionTitle,
  sectionDescription,
  cardTitle,
  cardDescription,
  bullets,
  href,
  bg,
  buttonColor,
  badge
}: Props) {
  return (
    <>
      {/* SECTION HEADER */}
      <Grid size={{ xs: 12 }}>
        <Box mb={2}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {sectionTitle}
          </Typography>

          <Typography sx={{ color: "text.secondary", maxWidth: "700px" }}>
            {sectionDescription}
          </Typography>
        </Box>
      </Grid>

      {/* CARD */}
      <Grid size={{ xs: 12, md: 6 }}>
        <ServicesSectionCard
          title={cardTitle}
          description={cardDescription}
          bullets={bullets}
          href={href}
          bg={bg}
          buttonColor={buttonColor}
          badge={badge}
        />
      </Grid>
    </>
  );
}
