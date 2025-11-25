"use client";

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* HEADER */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Projects
        </Typography>

        <Typography sx={{ color: "#ccc", maxWidth: 700, mx: "auto" }}>
          Χτίζω full-stack εφαρμογές με React, Next.js, Node.js, MongoDB,
          React Native, MUI, WordPress και RAG AI. Παρακάτω παρουσιάζονται
          μερικά από τα πιο ολοκληρωμένα έργα.
        </Typography>
      </Box>

      {/* ===================================================== */}
      {/* PROJECT 1 — ESHOP  (CARD LEFT – TEXT RIGHT)           */}
      {/* ===================================================== */}
      <Grid container spacing={4} alignItems="center" mb={10}>
        {/* CARD */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card sx={{ backgroundColor: "#e3f2fd" }}>
            <CardContent sx={{ color: "grey.900" }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Custom E-Shop — “Έχω Μια Ιδέα”
              </Typography>

              <Typography sx={{ mb: 2 }}>
                Πλήρως custom e-shop για χειροποίητα κοσμήματα. Wishlist,
                recommendations, rich-text posts, Stripe / Google Pay,
                Appwrite uploads, SEO, tests και παραγωγικό deployment
                σε Hetzner VPS.
              </Typography>

              <Link
                href="/services/eshopExample"
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" sx={{ mt: 1 }}>
                  Δείτε Αναλυτικά
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* TEXT */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography sx={{ color: "#ccc" }}>
            Το μεγαλύτερο project: πλήρες e-commerce σύστημα με custom UI/UX,
            backend σε Node.js / Express, MongoDB, AI δυνατότητες και
            CMS-style διαχείριση. Δημιουργήθηκε για πραγματικό πελάτη
            και λειτουργεί σε production περιβάλλον.
          </Typography>
        </Grid>
      </Grid>

      {/* ===================================================== */}
      {/* PROJECT 2 — SHARED FEES (TEXT LEFT – CARD RIGHT)      */}
      {/* ===================================================== */}
      <Grid container spacing={4} alignItems="center" mb={10}>
        {/* TEXT */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography sx={{ color: "#ccc" }}>
            Custom web εφαρμογή για διαχείριση κοινοχρήστων με δυνατότητα
            Excel import, αυτόματη δημιουργία λογαριασμών, emails, διαχείριση
            πολλαπλών κτηρίων, αποδείξεις πληρωμής με εικόνα, backend
            automations και πλήρη native mobile έκδοση.
          </Typography>
        </Grid>

        {/* CARD */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card sx={{ backgroundColor: "#fff3e0" }}>
            <CardContent sx={{ color: "grey.900" }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Shared Fees Project — Web App + Mobile
              </Typography>

              <Typography sx={{ mb: 2 }}>
                Multi-tenant web app για πολυκατοικίες. Excel → αυτόματοι
                λογαριασμοί, email notifications, uploads, approval workflow,
                dashboard & React Native mobile app.
              </Typography>

              <Link
                href="/services/customApps"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{ mt: 1, backgroundColor: "#ef6c00" }}
                >
                  Δείτε Αναλυτικά
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ===================================================== */}
      {/* PROJECT 3 — RAG KUHN (CARD LEFT – TEXT RIGHT)         */}
      {/* ===================================================== */}
      <Grid container spacing={4} alignItems="center" mb={10}>
        {/* CARD */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card sx={{ backgroundColor: "#f3e5f5" }}>
            <CardContent sx={{ color: "grey.900" }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Chat With Document (RAG) — KuhnGPT
              </Typography>

              <Typography sx={{ mb: 2 }}>
                RAG εφαρμογή βασισμένη στο βιβλίο του Thomas Kuhn. Embeddings,
                semantic search, Mongo vector store, μνήμη και αυτόματη
                περίληψη απαντήσεων. Η v2 προσθέτει hybrid BM25 + vector
                search και βελτιωμένο memory layer.
              </Typography>

              <Link
                href="/services/customApps#rag-section"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{ mt: 1, backgroundColor: "#9c27b0" }}
                >
                  Δείτε Αναλυτικά
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* TEXT */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography sx={{ color: "#ccc" }}>
            Proof-of-concept “chat with a document”. Μπορεί να επεκταθεί
            σε εταιρικά manuals, policy documents, knowledge bases κ.λπ.,
            ώστε ένας AI agent να απαντά με βάση τα πραγματικά έγγραφα
            της επιχείρησης.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
