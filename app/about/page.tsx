"use client";

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* HEADER */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          About Me
        </Typography>

        <Typography sx={{ color: "#ccc", maxWidth: 700, mx: "auto" }}>
          Είμαι ο Πελοπίδας Κοπακάκης, full-stack developer με εξειδίκευση στο MERN,
          Next.js, React Native και WordPress. Φτιάχνω επαγγελματικά e-shops,
          web apps, dashboards, AI εργαλεία και mobile εφαρμογές.
        </Typography>
      </Box>

      {/* SECTION 1 — WHO I AM */}
      <Box mb={8}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ποιος Είμαι
        </Typography>

        <Typography sx={{ color: "#ccc", mb: 3 }}>
          Προέρχομαι από ακαδημαϊκό υπόβαθρο και ολοκλήρωσα
          επιτυχώς το Coding Factory της ΑΣΟΕΕ με βαθμό 100/100. Τα τελευταία χρόνια
          έχω επικεντρωθεί στην ανάπτυξη πλήρων συστημάτων: backend, frontend,
          mobile και AI.
          <br />
          <br />
          Στόχος μου είναι να δημιουργώ λύσεις που είναι πραγματικά χρήσιμες —
          γρήγορες, ασφαλείς, επεκτάσιμες και όμορφες στον χρήστη.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* SECTION 3 — What I Offer */}
      <Box mb={8}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Τι Μπορώ Να Προσφέρω
        </Typography>

        <Typography sx={{ color: "#ccc", mb: 3 }}>
          Συνεργάζομαι με επιχειρήσεις που χρειάζονται:
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ backgroundColor: "#222" }}>
              <CardContent sx={{ color: "grey.200" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  🔹 Websites & E-Shops
                </Typography>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Custom React / Next.js e-shops</li>
                  <li>WordPress + WooCommerce</li>
                  <li>Branding & UI/UX (σε συνεργασία με designer)</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ backgroundColor: "#222" }}>
              <CardContent sx={{ color: "grey.200" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  🔹 Custom Web Applications
                </Typography>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Role-based συστήματα</li>
                  <li>Dashboards / management εργαλεία</li>
                  <li>File uploads, reports, automations</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ backgroundColor: "#222" }}>
              <CardContent sx={{ color: "grey.200" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  🔹 Mobile Applications
                </Typography>
                <ul style={{ paddingLeft: 20 }}>
                  <li>React Native (Expo)</li>
                  <li>Camera, uploads, push notifications</li>
                  <li>Integration με υπάρχον backend</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ backgroundColor: "#222" }}>
              <CardContent sx={{ color: "grey.200" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  🔹 AI / RAG Projects
                </Typography>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Semantic search & vector DBs</li>
                  <li>RAG chatbots για έγγραφα</li>
                  <li>OpenAI automations & agents</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* SECTION 4 — Looking for a Junior Role */}
      <Box mb={8}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Αναζητώ Junior Full-Stack Θέση
        </Typography>

        <Typography sx={{ color: "#ccc", maxWidth: 700 }}>
          Παράλληλα με freelance συνεργασίες, αναζητώ θέση ως junior
          full-stack developer σε ομάδα που χρησιμοποιεί React, Next.js,
          Node.js, TypeScript ή MERN τεχνολογίες.
          <br />
          <br />
          Ενδιαφέρομαι για ρόλους όπου μπορώ:
        </Typography>

        <ul style={{ color: "#ccc", paddingLeft: 40, marginTop: 10 }}>
          <li>να συμμετέχω ενεργά σε παραγωγικά projects,</li>
          <li>να εξελίξω τις γνώσεις μου στο backend & DevOps,</li>
          <li>να δουλέψω σε structured workflow (GitHub, CI/CD, SCRUM),</li>
          <li>να προσφέρω real value στην ομάδα & στους πελάτες.</li>
        </ul>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* SECTION 5 — Links */}
      <Box textAlign="center" mt={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Social Links
        </Typography>

        <Box display="flex" justifyContent="center" gap={3} mt={2}>
          <a
            href="https://github.com/alkisax"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4fc3f7", fontSize: 18 }}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pelopidas-kopakakis-692808b2"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4fc3f7", fontSize: 18 }}
          >
            LinkedIn
          </a>
        </Box>
      </Box>
    </Container>
  );
}
