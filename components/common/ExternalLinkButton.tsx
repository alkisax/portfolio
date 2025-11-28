// portfolio-page\components\common\ExternalLinkButton.tsx
"use client";

import { Box } from "@mui/material";

interface Props {
  href: string;
  label: string;
  color?: string;          // background color
  hoverColor?: string;     // hover background color
  mt?: number;             // margin top
}

export default function ExternalLinkButton({
  href,
  label,
  color = "#1976d2",
  hoverColor = "#1565c0",
  mt = 6,
}: Props) {
  return (
    <Box textAlign="center" mt={mt}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Box
          sx={{
            display: "inline-block",
            px: 3,
            py: 1.5,
            backgroundColor: color,
            color: "white",
            fontWeight: "bold",
            borderRadius: "10px",
            transition: "0.2s",
            "&:hover": { backgroundColor: hoverColor },
          }}
        >
          {label}
        </Box>
      </a>
    </Box>
  );
}
