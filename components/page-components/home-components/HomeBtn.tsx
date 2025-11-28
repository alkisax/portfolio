// portfolio-page\components\page-components\home-components\HomeBtn.tsx
"use client";

import Link from "next/link";
import { Grid, Card, CardActionArea, Box, Typography } from "@mui/material";

interface HomeBtnProps {
  title: string;
  href: string;
  bg?: string; // optional background color
}

export default function HomeBtn({ title, href, bg = "#e0f7fa" }: HomeBtnProps) {
  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Link href={href} style={{ textDecoration: "none" }}>
        <Card sx={{ height: 200, backgroundColor: bg }}>
          <CardActionArea sx={{ height: "100%" }}>
            <Box
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "grey.900" }}
              >
                {title}
              </Typography>
            </Box>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
