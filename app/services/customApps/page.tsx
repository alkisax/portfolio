"use client";

import { Container, Box, Typography, Divider, Card, CardContent, Grid } from "@mui/material";

export default function CustomAppsPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>

      {/* TITLE */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Παραδείγματα Custom Web Applications
      </Typography>

      <Typography sx={{ color: "text.secondary", maxWidth: "800px", mb: 4 }}>
        Εξατομικευμένες web εφαρμογές, σχεδιασμένες και υλοποιημένες με βάση 
        τις ανάγκες του κάθε πελάτη. Παρακάτω παρουσιάζονται δύο παραδείγματα: 
        (1) μια εφαρμογή για διαχείριση κτηρίων, και (2) ένα RAG σύστημα 
        τύπου “chat with a document”.
      </Typography>

      {/* -------------------------------------------- */}
      {/* EXAMPLE 1: SHARED FEES PROJECT               */}
      {/* -------------------------------------------- */}

      <Divider sx={{ my: 6 }} />

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Παράδειγμα 1: Shared Fees Project
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 3 }}>
        Εφαρμογή σε παραγωγή για διαχείριση κοινοχρήστων πολυκατοικιών, με δυνατότητα 
        εισαγωγής Excel αρχείων, αυτόματη δημιουργία λογαριασμών, παρακολούθηση πληρωμών, 
        αποδείξεις που ανεβάζουν οι ένοικοι, πολλαπλά κτήρια και native mobile έκδοση.
      </Typography>

      <Grid container spacing={4}>

        {/* LEFT CARD */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ backgroundColor: "grey.900" }}>
            <CardContent sx={{ color: "grey.800" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Για Διαχειριστές
              </Typography>
              <ul style={{ paddingLeft: 20 }}>
                <li>Εισαγωγή Excel αρχείου</li>
                <li>Αυτόματη δημιουργία λογαριασμών</li>
                <li>Αποστολή email ειδοποιήσεων</li>
                <li>Προβολή πληρωμένων/μη πληρωμένων</li>
                <li>Έγκριση αποδείξεων</li>
                <li>Multi-tenant υποστήριξη</li>
                <li>Ακυρώσεις / τροποποιήσεις λογαριασμού</li>
                <li>Πληρωμές με μετρητά ή τράπεζα</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* RIGHT CARD */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ backgroundColor: "grey.900" }}>
            <CardContent sx={{ color: "grey.800" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Για Ενοίκους
              </Typography>
              <ul style={{ paddingLeft: 20 }}>
                <li>Προβολή λογαριασμών ανά μήνα</li>
                <li>Ανέβασμα απόδειξης πληρωμής</li>
                <li>Status pending → approved</li>
                <li>Email notifications</li>
                <li>Responsive UI</li>
                <li>Native εφαρμογή Android</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      {/* BUTTON */}
      <Box textAlign="center" mt={3}>
        <a
          href="https://sharedfeesproject.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: 3,
              py: 1.5,
              bgcolor: "#ef6c00",
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#e65100" },
            }}
          >
            Live Demo
          </Box>
        </a>
      </Box>

      {/* -------------------------------------------- */}
      {/* EXAMPLE 2 — RAG DOCUMENT CHAT                */}
      {/* -------------------------------------------- */}

      <Divider sx={{ my: 6 }} />

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Παράδειγμα 2: Chat with a Document (RAG)
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 3 }}>
        RAG σύστημα που επιτρέπει στον χρήστη να συνομιλεί με το περιεχόμενο του 
        βιβλίου «Η Δομή των Επιστημονικών Επαναστάσεων». Οι παράγραφοι έχουν μετατραπεί 
        σε vector embeddings, αποθηκεύονται στη MongoDB και γίνεται semantic search 
        για τις πιο σχετικές ενότητες.
      </Typography>

      <Grid container spacing={4}>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ backgroundColor: "grey.900" }}>
            <CardContent sx={{ color: "grey.800" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Τεχνική Λειτουργία (v1)
              </Typography>
              <ul style={{ paddingLeft: 20 }}>
                <li>Split σε παραγράφους</li>
                <li>Embeddings με OpenAI API</li>
                <li>Vector storage σε MongoDB</li>
                <li>Semantic search top-5</li>
                <li>Dynamic prompt με context</li>
                <li>Μνήμη πρόσφατων queries</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ backgroundColor: "grey.900" }}>
            <CardContent sx={{ color: "grey.800" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Τεχνική Λειτουργία (v2 — σε ανάπτυξη)
              </Typography>
              <ul style={{ paddingLeft: 20 }}>
                <li>Hybrid search (BM25 + vector)</li>
                <li>MongoDB Atlas vector search</li>
                <li>Μνήμη τελευταίων 3 queries</li>
                <li>Περίληψη κάθε απάντησης</li>
                <li>Συνολική summary της συζήτησης</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      {/* BUTTON */}
      <Box textAlign="center" mt={3}>
        <a
          href="https://portfolio-projects.space"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: 3,
              py: 1.5,
              bgcolor: "#1976d2",
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            Live Demo
          </Box>
        </a>
      </Box>

    </Container>
  );
}
