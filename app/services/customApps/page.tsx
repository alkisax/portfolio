"use client";

import {
  Container,
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  Grid,
  Button,
  Collapse,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function CustomAppsPage() {
  const [openSharedImages, setOpenSharedImages] = useState(false);
  const [openSharedTech, setOpenSharedTech] = useState(false);

  const [openRagImages, setOpenRagImages] = useState(false);
  const [openRagTech, setOpenRagTech] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* TITLE */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Παραδείγματα Custom Web Applications
      </Typography>

      <Typography sx={{ color: "text.secondary", maxWidth: "800px", mb: 4 }}>
        Εφαρμογές πλήρως κατασκευασμένες με custom κώδικα — χωρίς περιορισμούς,
        χωρίς templates και με δυνατότητα επέκτασης. Παρακάτω παρουσιάζονται δύο
        πραγματικά έργα σε παραγωγή: ένα SaaS για διαχείριση κοινοχρήστων και
        ένα σύστημα RAG τύπου “chat with your document”.
      </Typography>

      {/* ===================================================== */}
      {/* SHARED FEES PROJECT */}
      {/* ===================================================== */}

      <Divider sx={{ my: 6 }} />

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Παράδειγμα 1: Shared Fees Project
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 3, maxWidth: "800px" }}>
        Το Shared Fees Project είναι μια εφαρμογή διαχείρισης κοινοχρήστων για
        πολυκατοικίες. Οι διαχειριστές ανεβάζουν ένα Excel αρχείο και η εφαρμογή
        δημιουργεί αυτόματα λογαριασμούς, αποστέλλει email, επιτρέπει ανεβάσματα
        αποδείξεων και λειτουργεί τόσο σε web όσο και σε Android εφαρμογή.
      </Typography>

      {/* ----- IMAGES COLLAPSE ----- */}
      <Button
        variant="outlined"
        size="small"
        onClick={() => setOpenSharedImages(!openSharedImages)}
        sx={{
          mb: 2,
          borderColor: "#1976d2",
          color: "#1976d2",
          textTransform: "none",
          "&:hover": { backgroundColor: "rgba(25,118,210,0.08)" },
        }}
      >
        {openSharedImages ? "Κλείσιμο εικόνων" : "Εικόνες εφαρμογής"}
      </Button>

      <Collapse in={openSharedImages}>
        <Grid container spacing={2} mt={2}>
          {[
            { src: "/custom-apps/shared/home.png", label: "Αρχική σελίδα" },
            { src: "/custom-apps/shared/dashboard1.png", label: "Dashboard 1" },
            { src: "/custom-apps/shared/dashboard2.png", label: "Dashboard 2" },
            { src: "/custom-apps/shared/dashboard3.png", label: "Dashboard 3" },
            { src: "/custom-apps/shared/dashboard4.png", label: "Dashboard 4" },
            { src: "/custom-apps/shared/userview.png", label: "User view" },
            { src: "/custom-apps/shared/native-app.jpeg", label: "Android App" },
          ].map((img, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 230,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <Image
                    src={img.src}
                    width={500}
                    height={500}
                    alt={img.label}
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    unoptimized
                  />
                </Box>
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

      {/* ----- FEATURE CARDS (EQUAL HEIGHT) ----- */}
      <Grid container spacing={4} sx={{ mt: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              backgroundColor: "#e3f2fd",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ color: "grey.900", flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Για Διαχειριστές
              </Typography>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li>Εισαγωγή Excel</li>
                <li>Αυτόματη δημιουργία λογαριασμών</li>
                <li>Προβολή πληρωμένων / μη πληρωμένων</li>
                <li>Έγκριση αποδείξεων</li>
                <li>Αποστολή email</li>
                <li>Multi-building λειτουργία</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              backgroundColor: "#f1f8e9",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ color: "grey.900", flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Για Ενοίκους
              </Typography>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li>Προβολή λογαριασμών</li>
                <li>Ανέβασμα απόδειξης</li>
                <li>Email notifications</li>
                <li>Responsive UI</li>
                <li>Native Android app</li>
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
              px: 3,
              py: 1.5,
              backgroundColor: "#ef6c00",
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
              display: "inline-block",
              "&:hover": { backgroundColor: "#e65100" },
            }}
          >
            Live Demo
          </Box>
        </a>
      </Box>

      {/* ----- TECH INFO COLLAPSE ----- */}
      <Button
        variant="outlined"
        size="small"
        onClick={() => setOpenSharedTech(!openSharedTech)}
        sx={{
          mt: 3,
          textTransform: "none",
          borderColor: "#1976d2",
          color: "#1976d2",
        }}
      >
        {openSharedTech ? "Κλείσιμο τεχνικών" : "Τεχνικά χαρακτηριστικά"}
      </Button>

      <Collapse in={openSharedTech} sx={{ mt: 3 }}>
        <Card sx={{ backgroundColor: "#fff3e0" }}>
          <CardContent sx={{ color: "grey.900" }}>
            <Typography variant="h6" fontWeight="bold">
              Τεχνολογίες
            </Typography>
            <ul style={{ paddingLeft: 20 }}>
              <li>React / Node.js / MongoDB</li>
              <li>JWT authentication</li>
              <li>Appwrite Storage</li>
              <li>Excel parsing (xlsx)</li>
              <li>Native mobile (React Native + Expo)</li>
            </ul>
          </CardContent>
        </Card>
      </Collapse>

      {/* ===================================================== */}
      {/* RAG SYSTEM */}
      {/* ===================================================== */}

      <Divider sx={{ my: 6 }} />

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Παράδειγμα 2: Chat with a Document (RAG)
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 3, maxWidth: "800px" }}>
        Σύστημα που επιτρέπει συνομιλία με το περιεχόμενο ενός βιβλίου.
        Κάθε παράγραφος μετατρέπεται σε embedding, αποθηκεύεται στη MongoDB και
        γίνεται semantic search ώστε το AI να απαντά μόνο με βάση το βιβλίο.
      </Typography>

      {/* ----- RAG IMAGES COLLAPSE ----- */}
      <Button
        variant="outlined"
        size="small"
        onClick={() => setOpenRagImages(!openRagImages)}
        sx={{
          mb: 2,
          borderColor: "#1976d2",
          color: "#1976d2",
          textTransform: "none",
        }}
      >
        {openRagImages ? "Κλείσιμο εικόνων" : "Εικόνες RAG συστήματος"}
      </Button>

      <Collapse in={openRagImages}>
        <Grid container spacing={2} mt={2}>
          {[
            { src: "/custom-apps/rag/home1.png", label: "Αρχική" },
            { src: "/custom-apps/rag/query-context.png", label: "Query + Context" },
          ].map((img, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 230,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <Image
                    src={img.src}
                    width={500}
                    height={500}
                    alt={img.label}
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    unoptimized
                  />
                </Box>
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

      {/* ----- RAG TECH COLLAPSE ----- */}
      <Button
        variant="outlined"
        size="small"
        onClick={() => setOpenRagTech(!openRagTech)}
        sx={{
          mt: 3,
          textTransform: "none",
          borderColor: "#1976d2",
          color: "#1976d2",
        }}
      >
        {openRagTech ? "Κλείσιμο τεχνικών" : "Τεχνικά χαρακτηριστικά"}
      </Button>

      <Collapse in={openRagTech} sx={{ mt: 3 }}>
        <Card sx={{ backgroundColor: "#f3e5f5" }}>
          <CardContent sx={{ color: "grey.900" }}>
            <Typography variant="h6" fontWeight="bold">
              Τεχνολογίες
            </Typography>
            <ul style={{ paddingLeft: 20 }}>
              <li>Node.js / Express</li>
              <li>MongoDB Vector Search</li>
              <li>OpenAI Embeddings</li>
              <li>BM25 + Hybrid Search (v2 υπο κατασκευή)</li>
              <li>Context windows & memory</li>
              <li>Full deployment σε Hetzner</li>
            </ul>
          </CardContent>
        </Card>
      </Collapse>

      {/* BUTTON */}
      <Box textAlign="center" mt={4}>
        <a
          href="https://portfolio-projects.space"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              px: 3,
              py: 1.5,
              backgroundColor: "#1976d2",
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
              display: "inline-block",
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
