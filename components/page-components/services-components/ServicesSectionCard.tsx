// portfolio-page\components\page-components\services-components\ServicesSectionCard.tsx
import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";
import ServicesBtnBadge from "./ServicesBtnBadge";

interface ServicesSectionCardProps {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  bg: string;
  buttonColor: string;
  badge?: string; // ⭐ NEW
}

export default function ServicesSectionCard({
  title,
  description,
  bullets,
  href,
  bg,
  buttonColor,
  badge,
}: ServicesSectionCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: bg,
        position: "relative",    // ⭐ allow badge position
        overflow: "visible",
      }}
    >
      {/* ⭐ BADGE */}
      {badge && (
        <ServicesBtnBadge
          src={badge}
        />
      )}

      <CardContent sx={{ color: "grey.900" }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <Typography sx={{ color: "grey.900", mb: 2 }}>
          {description}
        </Typography>

        <ul style={{ paddingLeft: 20, margin: 0, color: "inherit" }}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <Box mt={3}>
          <Link href={href} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "inline-block",
                px: 2.5,
                py: 1.2,
                color: "white",
                backgroundColor: buttonColor,
                borderRadius: "8px",
                fontWeight: "bold",
                "&:hover": { opacity: 0.85 },
              }}
            >
              Δείτε Αναλυτικά
            </Box>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
