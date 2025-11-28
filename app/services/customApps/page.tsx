// portfolio-page\app\services\customApps\page.tsx
"use client";

import IntroBlock from "@/components/common/IntroBlock";
import CollapsibleImageGallery from "@/components/common/CollapsibleImageGallery";
import FeatureListCard from "@/components/common/FeatureListCard";
import ExternalLinkButton from "@/components/common/ExternalLinkButton";

import {
  Container,
  Typography,
  Divider,
  Grid,
  Button,
  Collapse,
} from "@mui/material";
import { useState } from "react";

export default function CustomAppsPage() {
  const [openSharedTech, setOpenSharedTech] = useState(false);
  const [openRagTech, setOpenRagTech] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* TITLE */}
      <IntroBlock
        title="Παραδείγματα Custom Web Applications"
        text="Εφαρμογές πλήρως κατασκευασμένες με custom κώδικα — χωρίς περιορισμούς, χωρίς templates και με δυνατότητα επέκτασης. Παρακάτω παρουσιάζονται δύο πραγματικά έργα σε παραγωγή: ένα SaaS για διαχείριση κοινοχρήστων και ένα σύστημα RAG τύπου “chat with your document”."
      />

      {/* ===================================================== */}
      {/* SHARED FEES PROJECT */}
      {/* ===================================================== */}

      <Divider sx={{ my: 6 }} />

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Παράδειγμα 1: Shared Fees Project
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 3, maxWidth: "800px" }}>
        Το Shared Fees Project είναι μια εφαρμογή διαχείρισης κοινοχρήστων για
        πολυκατοικίες. Οι διαχειριστές ανεβάζουν Excel και η εφαρμογή δημιουργεί
        αυτόματα λογαριασμούς, αποστέλλει email, επιτρέπει ανέβασμα αποδείξεων
        και λειτουργεί σε web & Android.
      </Typography>

      {/* ----- IMAGES GALLERY REUSABLE ----- */}
      <CollapsibleImageGallery
        buttonLabel="Εικόνες εφαρμογής"
        images={[
          { src: "/custom-apps/shared/home.png", alt: "Home", label: "Αρχική σελίδα" },
          { src: "/custom-apps/shared/dashboard1.png", alt: "Dash1", label: "Dashboard 1" },
          { src: "/custom-apps/shared/dashboard2.png", alt: "Dash2", label: "Dashboard 2" },
          { src: "/custom-apps/shared/dashboard3.png", alt: "Dash3", label: "Dashboard 3" },
          { src: "/custom-apps/shared/dashboard4.png", alt: "Dash4", label: "Dashboard 4" },
          { src: "/custom-apps/shared/userview.png", alt: "User view", label: "User view" },
          { src: "/custom-apps/shared/native-app.jpeg", alt: "Android", label: "Android App" },
        ]}
      />

      {/* ----- FEATURE CARDS ----- */}
      <Grid container spacing={4} sx={{ mt: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <FeatureListCard
            title="Για Διαχειριστές"
            bg="#e3f2fd"
            bullets={[
              "Εισαγωγή Excel",
              "Αυτόματη δημιουργία λογαριασμών",
              "Προβολή πληρωμένων / μη πληρωμένων",
              "Έγκριση αποδείξεων",
              "Αποστολή email",
              "Multi-building λειτουργία",
            ]}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FeatureListCard
            title="Για Ενοίκους"
            bg="#f1f8e9"
            bullets={[
              "Προβολή λογαριασμών",
              "Ανέβασμα απόδειξης",
              "Email notifications",
              "Responsive UI",
              "Native Android app",
            ]}
          />
        </Grid>
      </Grid>

      {/* SHARED FEES LIVE DEMO BUTTON */}
      <ExternalLinkButton
        href="https://sharedfeesproject.onrender.com"
        label="Live Demo"
        color="#ef6c00"
        hoverColor="#e65100"
        mt={3}
      />

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
        <FeatureListCard
          title="Τεχνολογίες"
          bg="#fff3e0"
          bullets={[
            "React / Node.js / MongoDB",
            "JWT authentication",
            "Appwrite Storage",
            "Excel parsing (xlsx)",
            "Native mobile (React Native + Expo)",
          ]}
        />
      </Collapse>

      {/* ===================================================== */}
      {/* RAG SYSTEM */}
      {/* ===================================================== */}

      <Divider sx={{ my: 6 }} />

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Παράδειγμα 2: Chat with a Document (RAG)
      </Typography>

      <Typography sx={{ color: "text.secondary", mb: 3, maxWidth: "800px" }}>
        Σύστημα που επιτρέπει συνομιλία με το περιεχόμενο ενός βιβλίου μέσω
        embeddings, vector search και context windows.
      </Typography>

      {/* ----- RAG IMAGES GALLERY ----- */}
      <CollapsibleImageGallery
        buttonLabel="Εικόνες RAG συστήματος"
        images={[
          { src: "/custom-apps/rag/home1.png", alt: "Home", label: "Αρχική" },
          { src: "/custom-apps/rag/query-context.png", alt: "QC", label: "Query + Context" },
        ]}
      />

      {/* ----- RAG TECH ----- */}
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
        <FeatureListCard
          title="Τεχνολογίες"
          bg="#f3e5f5"
          bullets={[
            "Node.js / Express",
            "MongoDB Vector Search",
            "OpenAI Embeddings",
            "BM25 + Hybrid Search",
            "Context windows & memory",
            "Deployment σε Hetzner",
          ]}
        />
      </Collapse>

      {/* RAG LIVE DEMO BUTTON */}
      <ExternalLinkButton
        href="https://portfolio-projects.space"
        label="Live Demo"
        color="#1976d2"
        hoverColor="#1565c0"
        mt={4}
      />
    </Container>
  );
}
