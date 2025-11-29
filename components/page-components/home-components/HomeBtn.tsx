// portfolio-page/components/page-components/home-components/HomeBtn.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import HomeBtnBadge from "./HomeBtnBadge";
import { Grid, Card, CardActionArea, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface HomeBtnProps {
  title: string;
  href: string;
  bg?: string;
  badge?: string;
}

export default function HomeBtn({
  title,
  href,
  bg = "#e0f7fa",
  badge,
}: HomeBtnProps) {
  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Link href={href} style={{ textDecoration: "none" }}>
        {/* MOTION WRAPPER */}
        <motion.div
          whileHover={{
            scale: 1.04,
            transition: { type: "spring", stiffness: 200, damping: 12 },
          }}
          style={{ display: "inline-block", width: "100%" }}
        >
          <Card
            sx={{
              height: 200,
              backgroundColor: bg,
              position: "relative",
              overflow: "visible",
            }}
          >
            <CardActionArea sx={{ height: "100%", position: "relative" }}>
              <Box sx={{ position: "relative", height: "100%" }}>
                {badge && <HomeBtnBadge src={badge} />}

                {/* TEXT */}
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
              </Box>
            </CardActionArea>
          </Card>
        </motion.div>
      </Link>
    </Grid>
  );
}
