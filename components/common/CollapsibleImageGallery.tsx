// portfolio-page\components\common\CollapsibleImageGallery.tsx
"use client";

import { useState } from "react";
import { Box, Button, Collapse, Grid, Typography } from "@mui/material";
import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

interface Props {
  buttonLabel: string;          // "Δείτε εικόνες..." 
  buttonLabelClose?: string;    // Προαιρετικό, default: "Κλείσιμο εικόνων"
  images: GalleryImage[];       // Array με εικόνες
}

export default function CollapsibleImageGallery({
  buttonLabel,
  buttonLabelClose = "Κλείσιμο εικόνων",
  images,
}: Props) {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <Button
        variant="outlined"
        size="small"
        onClick={() => setOpen(!open)}
        sx={{
          textTransform: "none",
          borderColor: "#1976d2",
          color: "#1976d2",
          "&:hover": {
            borderColor: "#1565c0",
            backgroundColor: "rgba(21,101,192,0.07)",
          },
        }}
      >
        {open ? buttonLabelClose : buttonLabel}
      </Button>

      {/* Collapse */}
      <Collapse in={open}>
        <Grid container spacing={2} mt="20px">
          {images.map((img, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  backgroundColor: "#fafafa",
                }}
              >
                {/* Image wrapper */}
                <Box
                  sx={{
                    width: "100%",
                    height: 230,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={500}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                    unoptimized
                  />
                </Box>

                {/* Caption */}
                <Box sx={{ p: 1.5, textAlign: "center" }}>
                  <Typography variant="body2" color="text.secondary">
                    {img.label}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </>
  );
}
