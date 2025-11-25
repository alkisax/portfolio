"use client";

import Link from "next/link";
import {
  Container,
  Box,
  Typography,
  Card,
  CardActionArea,
} from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* HERO */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Full Stack Developer!
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          (React / Next.js / Node / wordpress)
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#ccc" }}
          maxWidth="700px"
          mx="auto"
        >
          Αναλαμβάνω την κατασκευή websites, e-shops και custom web εφαρμογές με
          custom κώδικα ή wordpress
        </Typography>
      </Box>

      {/* GRID BUTTONS */}
      <Grid container spacing={4}>
        {/* SERVICES */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Link href="/services" style={{ textDecoration: "none" }}>
            <Card sx={{ height: 200, backgroundColor: "#e0f7fa" }}>
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
                    Services
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

        {/* PROJECTS */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Link href="/projects" style={{ textDecoration: "none" }}>
            <Card sx={{ height: 200, backgroundColor: "#f3e5f5" }}>
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
                    Projects
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

        {/* ABOUT */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Link href="/about" style={{ textDecoration: "none" }}>
            <Card sx={{ height: 200, backgroundColor: "#fff9c4" }}>
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
                    About Me
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

        {/* CONTACT */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Card sx={{ height: 200, backgroundColor: "#ffe0b2" }}>
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
                    Contact
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
