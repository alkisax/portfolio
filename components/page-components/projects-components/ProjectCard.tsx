"use client";

import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";
import HomeBtnBadge from "../../page-components/home-components/HomeBtnBadge"; // ⭐ reuse existing pixel badge

interface Props {
  title: string;
  description: string;
  href: string;
  bg: string;
  btnColor?: string;
  badge?: string; // ⭐ NEW
}

export default function ProjectCard({
  title,
  description,
  href,
  bg,
  btnColor = "#1976d2",
  badge,
}: Props) {
  return (
    <Card
      sx={{
        backgroundColor: bg,
        position: "relative", // ⭐ allow badge
        overflow: "visible",
      }}
    >
      {/* ⭐ BADGE */}
      {badge && (
        <HomeBtnBadge
          src={badge}
          top={210}
          right={-10}
          size={130}
        />
      )}

      <CardContent sx={{ color: "grey.900" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <Typography sx={{ mb: 2 }}>
          {description}
        </Typography>

        <Link href={href} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{ mt: 1, textTransform: "none", backgroundColor: btnColor }}
          >
            Δείτε Αναλυτικά
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
