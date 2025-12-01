"use client";

import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";
import ProjectsBtnBadge from "./ProjectsBtnBadge"

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
        <ProjectsBtnBadge
          src={badge}
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
