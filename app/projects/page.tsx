// portfolio-page/app/projects/page.tsx
"use client";

import IntroBlock from "@/components/common/IntroBlock";
import ProjectCard from "@/components/page-components/projects-components/ProjectCard";

import {
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";

export default function ProjectsPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>

      {/* HEADER */}
      <IntroBlock
        title="Projects"
        text="Χτίζω full-stack εφαρμογές με React, Next.js, Node.js, MongoDB, React Native, MUI,
        αλλά και CMS WordPress για φθηνότερες και ταχύτερες λύσεις και εφαρμογές RAG AI.
        Παρακάτω παρουσιάζονται μερικά από τα έργα."
      />


      {/* ===================================================== */}
      {/* PROJECT 1 — ESHOP                                      */}
      {/* ===================================================== */}
      <Grid container spacing={4} alignItems="center" mb={10}>

        {/* CARD LEFT */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <ProjectCard
            title="Custom E-Shop — “Έχω Μια Ιδέα”"
            description="Πλήρως custom e-shop για χειροποίητα κοσμήματα. Wishlist,
            recommendations, rich-text posts, Stripe / Google Pay, Appwrite uploads,
            SEO, Semantic Search tests και deployment σε Hetzner."
            href="/services/eshopExample"
            bg="#e3f2fd"
          />
        </Grid>

        {/* TEXT RIGHT */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography sx={{ color: "#ccc" }}>
            Πλήρες e-commerce σύστημα με custom UI/UX, backend σε Node.js / Express,
            MongoDB, AI δυνατότητες και CMS-style διαχείριση. Σε παραγωγή για πραγματικό πελάτη.
          </Typography>
        </Grid>
      </Grid>


      {/* ===================================================== */}
      {/* PROJECT 2 — SHARED FEES                                */}
      {/* ===================================================== */}
      <Grid container spacing={4} alignItems="center" mb={10}>

        {/* TEXT LEFT */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography sx={{ color: "#ccc" }}>
            Custom web εφαρμογή για διαχείριση κοινοχρήστων με Excel import,
            αυτόματη δημιουργία λογαριασμών, emails, multi-building management,
            uploads, approvals, dashboards & native mobile app. Σε λειτουργία για πραγματικό πελάτη.
          </Typography>
        </Grid>

        {/* CARD RIGHT */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <ProjectCard
            title="Shared Fees Project — Web App + Mobile"
            description="Multi-tenant web app για πολυκατοικίες. Από Excel → αυτόματοι λογαριασμοί,
            email notifications, uploads, approval workflow, dashboard &
            React Native mobile app."
            href="/services/customApps"
            bg="#fff3e0"
            btnColor="#ef6c00"
          />
        </Grid>
      </Grid>


      {/* ===================================================== */}
      {/* PROJECT 3 — RAG KUHN                                   */}
      {/* ===================================================== */}
      <Grid container spacing={4} alignItems="center" mb={10}>

        {/* CARD LEFT */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <ProjectCard
            title="Chat With Document (RAG) — KuhnGPT"
            description="RAG εφαρμογή βασισμένη στο βιβλίο του Thomas Kuhn. Embeddings,
            semantic search, Mongo vector store, memory, auto summary."
            href="/services/customApps#rag-section"
            bg="#f3e5f5"
            btnColor="#9c27b0"
          />
        </Grid>

        {/* TEXT RIGHT */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography sx={{ color: "#ccc" }}>
            Proof-of-concept RAG system για manuals, policy documents και
            knowledge bases — ώστε ένας AI agent να απαντά με βάση πραγματικά έγγραφα εταιρείας.
          </Typography>
        </Grid>
      </Grid>

    </Container>
  );
}
