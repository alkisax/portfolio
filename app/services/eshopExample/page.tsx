// portfolio-page\app\services\eshopExample\page.tsx
"use client";

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Collapse,
  Button,
} from "@mui/material";
import { useState } from "react";
import IntroBlock from "@/components/common/IntroBlock";
import CollapsibleImageGallery from "@/components/common/CollapsibleImageGallery";
import FeatureListCard from "@/components/common/FeatureListCard";
import ExternalLinkButton from "@/components/common/ExternalLinkButton";

const EshopExamplePage = () => {
  const [openTech, setOpenTech] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* TITLE */}
      <IntroBlock
        title="Παράδειγμα Custom E-Shop: “Έχω Μια Ιδέα”"
        text="Το συγκεκριμένο e-shop είναι πλήρως κατασκευασμένο με custom κώδικα,
  κάτι που σημαίνει ότι προσαρμόζεται 100% στις ανάγκες κάθε επιχείρησης.
  Δεν βασίζεται σε έτοιμα templates και δεν έχει περιορισμούς, δίνοντας
  απόλυτη ελευθερία σε design, λειτουργίες και επέκταση στο μέλλον."
      />

      <ExternalLinkButton
        href="https://eshop.portfolio-projects.space"
        label="Δείτε το Live Demo"
      />

      <Divider sx={{ my: 4 }} />

      {/* ---------- SECTION: SCREENSHOTS COLLAPSABLE ---------- */}
      <Box mb={6}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Εικόνες από το Κατάστημα
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 2, maxWidth: "800px" }}>
          Μπορείτε να δείτε παρακάτω χαρακτηριστικά στιγμιότυπα από το e-shop
          “Έχω Μια Ιδέα”, τόσο σε desktop όσο και σε mobile προβολές.
        </Typography>

        <CollapsibleImageGallery
          buttonLabel="Δείτε εικόνες του καταστήματος"
          images={[
            {
              src: "/eshop-screenshots/home.png",
              alt: "Home",
              label: "Αρχική σελίδα",
            },
            {
              src: "/eshop-screenshots/shop.png",
              alt: "Shop",
              label: "Σελίδα καταστήματος",
            },
            {
              src: "/eshop-screenshots/itempage.png",
              alt: "Item Page",
              label: "Σελίδα προϊόντος",
            },
            {
              src: "/eshop-screenshots/dashboard.png",
              alt: "Dashboard",
              label: "Dashboard διαχείρισης",
            },
            {
              src: "/eshop-screenshots/login.png",
              alt: "Login",
              label: "Σελίδα εισόδου",
            },
            {
              src: "/eshop-screenshots/native-app.jpeg",
              alt: "Native",
              label: "Mobile έκδοση",
            },
          ]}
        />
      </Box>

      {/* SECTION 1 — USER EXPERIENCE */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Εμπειρία Χρήστη & Δυνατότητες E-Shop
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 2, maxWidth: "800px" }}>
          Το e-shop είναι πλήρως κατασκευασμένο με custom κώδικα, πράγμα που
          σημαίνει ότι μπορεί να προσαρμοστεί απόλυτα στις ανάγκες μιας
          επιχείρησης — χωρίς περιορισμούς και χωρίς έτοιμα templates.
          Περιλαμβάνει σελίδα καταστήματος με έξυπνη αναζήτηση (απλή και
          semantic), κατηγορίες προϊόντων, wishlist, σχόλια, αγορές με κάρτα και
          Google Pay, ενώ λειτουργεί άψογα σε κινητά. Διαθέτει επίσης ενότητα
          ανακοινώσεων (blogroll) και γραφιστική υποστήριξη σε συνεργασία με
          επαγγελματία designer.
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FeatureListCard
              title="Λειτουργίες για Πελάτες"
              bg="#e3f2fd"
              bullets={[
                "Έξυπνη αναζήτηση προϊόντων (απλή & semantic)",
                "Περιήγηση ανά κατηγορία",
                "Λειτουργία ως επισκέπτης ή με λογαριασμό",
                "Wishlist για εγγεγραμμένους χρήστες",
                "Σχόλια & αξιολογήσεις κάτω από προϊόντα",
                "Αγορές με κάρτα & Google Pay μέσω Stripe",
                "Πλήρως responsive σχεδιασμός για κινητά",
              ]}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FeatureListCard
              title="Dashboard Διαχείρισης"
              bg="#f1f8e9"
              bullets={[
                "Διαχείριση πελατών & παραγγελιών",
                "Αυτόματα email ενημέρωσης",
                "Εισαγωγή / επεξεργασία / διαγραφή προϊόντων",
                "Έλεγχος στοκ & τιμών",
                "Upload εικόνων προϊόντων",
                "Δημιουργία και δημοσίευση ανακοινώσεων (blog posts)",
              ]}
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* -------- SECTION 2 — TECH DETAILS (COLLAPSABLE) -------- */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Τεχνικά Χαρακτηριστικά
        </Typography>

        {/* Κάρτα με το κουμπί */}
        <Card sx={{ backgroundColor: "grey.900", mb: 3 }}>
          <CardContent sx={{ color: "text.secondary" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Πληροφορίες υλοποίησης
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 2 }}>
              Για να δείτε τι τεχνολογίες χρησιμοποιήθηκαν στην υλοποίηση του
              e-shop, πατήστε παρακάτω.
            </Typography>

            <Button
              variant="outlined"
              size="small"
              onClick={() => setOpenTech(!openTech)}
              sx={{
                textTransform: "none",
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  borderColor: "#1565c0",
                  backgroundColor: "rgba(21,101,192,0.07)",
                },
              }}
            >
              {openTech ? "Κλείσιμο" : "Περισσότερες πληροφορίες"}
            </Button>
          </CardContent>
        </Card>

        {/* COLLAPSE CONTENT */}
        <Collapse in={openTech}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <FeatureListCard
                title="Frontend"
                bg="#fff8e1"
                bullets={[
                  "React 19",
                  "MUI UI",
                  "Skeleton loaders & Suspense",
                  "SEO με react-helmet-async",
                  "Editor.js για rich content",
                  "Pagination, filters, search",
                ]}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <FeatureListCard
                title="Backend"
                bg="#e8f5e9"
                bullets={[
                  "Node.js + Express",
                  "MongoDB + Mongoose",
                  "JWT Authentication",
                  "Zod validation",
                  "Helmet, CORS, Rate Limiter, DOMPurifier",
                  "Nodemailer automated emails",
                  "Swagger API Docs",
                ]}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <FeatureListCard
                title="Testing, SEO & Deployment"
                bg="#f3e5f5"
                bullets={[
                  "Jest backend tests",
                  "Cypress end-to-end testing",
                  "GDPR συμμόρφωση",
                  "SEO-optimized με Helmet metadata",
                  "Deployment σε Hetzner",
                ]}
              />
            </Grid>
          </Grid>
        </Collapse>
      </Box>

      <ExternalLinkButton
        href="https://eshop.portfolio-projects.space"
        label="Δείτε το Live Demo"
      />
    </Container>
  );
};

export default EshopExamplePage;
