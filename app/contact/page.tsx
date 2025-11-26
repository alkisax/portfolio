"use client";

import {
  Container,
  Box,
  Typography,
  Grid,
} from "@mui/material";

export default function ContactPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 10 }}>
      {/* HEADER */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Contact
        </Typography>

        <Typography
          sx={{ color: "#ccc", maxWidth: 600, mx: "auto", fontSize: "1.1rem" }}
        >
          Επικοινωνήστε μαζί μου για συνεργασίες, κατασκευή website/e-shop,
          ανάπτυξη custom εφαρμογών ή για θέση junior developer.
        </Typography>
      </Box>

      {/* GRID: INFO + FORM */}
      <Grid container spacing={6}>
        {/* LEFT SIDE — CONTACT INFO */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ color: "#ccc" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Στοιχεία Επικοινωνίας
            </Typography>

            <Box mt={2}>
              <Typography sx={{ mb: 1 }}>
                📧 Email:{" "}
                <a
                  href="mailto:pelopkop@gmail.com"
                  style={{ color: "#4fc3f7", textDecoration: "none" }}
                >
                  pelopkop@gmail.com
                </a>
              </Typography>

              <Typography sx={{ mb: 1 }}>
                📱 Τηλέφωνο:{" "}
                <span style={{ color: "#4fc3f7" }}>6947733075</span>
              </Typography>

              <Typography sx={{ mb: 1 }}>
                💼 LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/pelopidas-kopakakis-692808b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4fc3f7", textDecoration: "none" }}
                >
                  Profile
                </a>
              </Typography>

              <Typography sx={{ mb: 1 }}>
                🧑‍💻 GitHub:{" "}
                <a
                  href="https://github.com/alkisax"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4fc3f7", textDecoration: "none" }}
                >
                  github.com/alkisax
                </a>
              </Typography>
            </Box>

            <Box mt={3}>
              <Typography sx={{ color: "#999", fontSize: "0.9rem" }}>
                *Απαντώ συνήθως μέσα σε 24 ώρες.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
