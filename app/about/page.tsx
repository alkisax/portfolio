// portfolio-page/app/about/page.tsx
"use client";

import {
  Container,
  Divider,
  Grid,
} from "@mui/material";

import AboutSectionBlock from "@/components/page-components/about-components/AboutSectionBlock";
import FeatureListCard from "@/components/common/FeatureListCard";

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>

      {/* HEADER */}
      <AboutSectionBlock
        title="About Me"
        text="Είμαι ο Πελοπίδας Κοπακάκης, full-stack developer με εξειδίκευση στο MERN,
        Next.js, React Native και WordPress. Φτιάχνω επαγγελματικά e-shops,
        web apps, dashboards, AI εργαλεία και mobile εφαρμογές."
      />

      <Divider sx={{ my: 4 }} />

      {/* SECTION — WHO I AM */}
      <AboutSectionBlock
        title="Ποιος Είμαι"
        text={`Προέρχομαι από ακαδημαϊκό υπόβαθρο και ολοκλήρωσα επιτυχώς το 
        Coding Factory της ΑΣΟΕΕ με βαθμό 100/100. Τα τελευταία χρόνια 
        έχω επικεντρωθεί στην ανάπτυξη πλήρων συστημάτων: backend, frontend, 
        mobile και AI.

        Στόχος μου είναι να δημιουργώ λύσεις που είναι πραγματικά χρήσιμες — 
        γρήγορες, ασφαλείς, επεκτάσιμες και όμορφες στον χρήστη.`}
      />

      <Divider sx={{ my: 4 }} />

      {/* SECTION — What I Offer */}
      <AboutSectionBlock
        title="Τι Μπορώ Να Προσφέρω"
        text="Συνεργάζομαι με επιχειρήσεις που χρειάζονται:"
      >
        <Grid container spacing={4}>

          <Grid size={{ xs: 12, md: 6 }}>
            <FeatureListCard
              title="🔹 Websites & E-Shops"
              bg="#222"
              textColor="text.primary"
              bullets={[
                "Custom React / Next.js e-shops",
                "WordPress + WooCommerce",
                "Branding & UI/UX (με designer)",
              ]}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FeatureListCard
              title="🔹 Custom Web Applications"
              bg="#222"
              textColor="text.primary"
              bullets={[
                "Role-based συστήματα",
                "Dashboards / management εργαλεία",
                "File uploads, reports, automations",
              ]}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FeatureListCard
              title="🔹 Mobile Applications"
              bg="#222"
              textColor="text.primary"
              bullets={[
                "React Native (Expo)",
                "Camera, uploads, push notifications",
                "Integration με backend",
              ]}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FeatureListCard
              title="🔹 AI / RAG Projects"
              bg="#222"
              textColor="text.primary"
              bullets={[
                "Semantic search & vector DBs",
                "RAG chatbots για έγγραφα",
                "OpenAI automations & agents",
              ]}
            />
          </Grid>

        </Grid>
      </AboutSectionBlock>

      <Divider sx={{ my: 4 }} />

      {/* SECTION — Looking for Junior Position */}
      <AboutSectionBlock
        title="Αναζητώ Junior Full-Stack Θέση"
        text={`Παράλληλα με freelance συνεργασίες, αναζητώ junior full-stack θέση 
        σε ομάδα που χρησιμοποιεί React, Next.js, Node.js, TypeScript ή MERN.`}
      >
        <ul style={{ color: "text.primary", paddingLeft: 40, marginTop: 10 }}>
          <li>να συμμετέχω σε παραγωγικά projects,</li>
          <li>να εξελίξω τις γνώσεις μου σε backend & DevOps,</li>
          <li>να δουλέψω σε structured workflow (GitHub, CI/CD, SCRUM),</li>
          <li>να προσφέρω πραγματική αξία στην ομάδα.</li>
        </ul>
      </AboutSectionBlock>
    </Container>
  );
}
