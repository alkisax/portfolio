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
import Image from "next/image";

const EshopExamplePage = () => {
  const [openTech, setOpenTech] = useState(false);
  const [showImages, setShowImages] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* TITLE */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Παράδειγμα Custom E-Shop: “Έχω Μια Ιδέα”
      </Typography>

      <Typography sx={{ color: "text.secondary", maxWidth: "800px", mb: 4 }}>
        Το συγκεκριμένο e-shop είναι πλήρως κατασκευασμένο με custom κώδικα,
        κάτι που σημαίνει ότι προσαρμόζεται 100% στις ανάγκες κάθε επιχείρησης.
        Δεν βασίζεται σε έτοιμα templates και δεν έχει περιορισμούς, δίνοντας
        απόλυτη ελευθερία σε design, λειτουργίες και επέκταση στο μέλλον.
      </Typography>

      <Box textAlign="center" mt={6}>
        <a
          href="https://eshop.portfolio-projects.space"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: 3,
              py: 1.5,
              backgroundColor: "#1976d2",
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            Δείτε το Live Demo
          </Box>
        </a>
      </Box>

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

        <Button
          variant="outlined"
          size="small"
          onClick={() => setShowImages(!showImages)}
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
          {showImages ? "Κλείσιμο εικόνων" : "Δείτε εικόνες του καταστήματος"}
        </Button>

        <Collapse in={showImages}>
          <Grid container spacing={2} mt="20px">
            {[
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
            ].map((img, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    backgroundColor: "#fafafa",
                  }}
                >
                  {/* Image Wrapper with fixed height */}
                  <Box
                    sx={{
                      width: "100%",
                      height: 230, // <-- ΣΤΑΘΕΡΟ FRAME ΓΙΑ ΟΛΕΣ ΤΙΣ ΕΙΚΟΝΕΣ
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={500}
                      height={500}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain", // <-- Η ΜΑΓΙΚΗ ΛΥΣΗ
                      }}
                      unoptimized
                    />
                  </Box>

                  {/* Caption */}
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
          {/* CARD 1 — Λειτουργίες για Πελάτες */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%", backgroundColor: "#e3f2fd" }}>
              <CardContent sx={{ color: "grey.900" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Λειτουργίες για Πελάτες
                </Typography>

                <ul style={{ paddingLeft: 20, color: "inherit" }}>
                  <li>Έξυπνη αναζήτηση προϊόντων (απλή & semantic)</li>
                  <li>Περιήγηση ανά κατηγορία</li>
                  <li>Λειτουργία ως επισκέπτης ή με λογαριασμό</li>
                  <li>Wishlist για εγγεγραμμένους χρήστες</li>
                  <li>Σχόλια & αξιολογήσεις κάτω από προϊόντα</li>
                  <li>Αγορές με κάρτα & Google Pay μέσω Stripe</li>
                  <li>Πλήρως responsive σχεδιασμός για κινητά</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          {/* CARD 2 — Dashboard Διαχείρισης */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%", backgroundColor: "#f1f8e9" }}>
              <CardContent sx={{ color: "grey.900" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Dashboard Διαχείρισης
                </Typography>

                <ul style={{ paddingLeft: 20, color: "inherit" }}>
                  <li>Διαχείριση πελατών & παραγγελιών</li>
                  <li>Αυτόματα email ενημέρωσης</li>
                  <li>Εισαγωγή / επεξεργασία / διαγραφή προϊόντων</li>
                  <li>Έλεγχος στοκ & τιμών</li>
                  <li>Upload εικόνων προϊόντων</li>
                  <li>Δημιουργία και δημοσίευση ανακοινώσεων (blog posts)</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* -------- SECTION 2 — TECH DETAILS (COLLAPSABLE) -------- */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Τεχνικά Χαρακτηριστικά (Προαιρετικά)
        </Typography>

        {/* Κάρτα με το κουμπί */}
        <Card sx={{ backgroundColor: "grey.900", mb: 3 }}>
          <CardContent sx={{ color: "grey.900" }}>
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
            {/* FRONTEND CARD */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%", backgroundColor: "#fff8e1" }}>
                <CardContent sx={{ color: "grey.900" }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Frontend
                  </Typography>
                  <ul style={{ paddingLeft: 20, color: "inherit" }}>
                    <li>React 19</li>
                    <li>MUI UI</li>
                    <li>Skeleton loaders & Suspense</li>
                    <li>SEO με react-helmet-async</li>
                    <li>Editor.js για rich content</li>
                    <li>Pagination, filters, search</li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>

            {/* BACKEND CARD */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%", backgroundColor: "#e8f5e9" }}>
                <CardContent sx={{ color: "grey.900" }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Backend
                  </Typography>
                  <ul style={{ paddingLeft: 20, color: "inherit" }}>
                    <li>Node.js + Express</li>
                    <li>MongoDB + Mongoose</li>
                    <li>JWT Authentication</li>
                    <li>Zod validation</li>
                    <li>Helmet, CORS, Rate Limiter, DOMPurifier</li>
                    <li>Nodemailer automated emails</li>
                    <li>Swagger API Docs</li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>

            {/* TESTING + DEPLOYMENT */}
            <Grid size={{ xs: 12 }}>
              <Card sx={{ backgroundColor: "#f3e5f5" }}>
                <CardContent sx={{ color: "grey.900" }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Testing, SEO & Deployment
                  </Typography>
                  <ul style={{ paddingLeft: 20, color: "inherit" }}>
                    <li>Jest backend tests</li>
                    <li>Cypress end-to-end testing</li>
                    <li>GDPR συμμόρφωση</li>
                    <li>SEO-optimized με Helmet metadata</li>
                    <li>Deployment σε Hetzner</li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Collapse>
      </Box>

      <Box textAlign="center" mt={6}>
        <a
          href="https://eshop.portfolio-projects.space"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: 3,
              py: 1.5,
              backgroundColor: "#1976d2",
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            Δείτε το Live Demo
          </Box>
        </a>
      </Box>
    </Container>
  );
};

export default EshopExamplePage;
