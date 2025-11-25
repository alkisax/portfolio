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

export default function EshopExamplePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* TITLE */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Παράδειγμα Custom E-Shop: “Έχω Μια Ιδέα”
      </Typography>

      <Typography sx={{ color: "text.secondary", maxWidth: "800px", mb: 4 }}>
        Ένα πλήρως custom e-shop για χειροποίητα κοσμήματα, κατασκευασμένο με
        React, Node.js και σύγχρονες τεχνολογίες. Το κατάστημα “Έχω μια Ιδέα”
        διαθέτει επίσης ενεργή παρουσία στα social media και παρέχεται
        υποστήριξη γραφιστικού υλικού σε συνεργασία με επαγγελματία designer.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* SECTION 1 — USER EXPERIENCE */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Εμπειρία Χρήστη & Λειτουργίες E-Shop
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 2 }}>
          Το e-shop προσφέρει πλήρη εμπειρία καταστήματος με σύγχρονο UI,
          συμβατότητα με κινητά, εύκολη πλοήγηση και λειτουργίες προσαρμοσμένες
          για βελτίωση των πωλήσεων.
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%", backgroundColor: "#e3f2fd" }}>
              <CardContent sx={{ color: "grey.900" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Λειτουργίες για Πελάτες
                </Typography>
                <ul style={{ paddingLeft: 20, color: "inherit" }}>
                  <li>Προβολή προϊόντων με κατηγορίες & tags</li>
                  <li>Προσθήκη σε αγαπημένα (Wishlist)</li>
                  <li>Πλήρης λειτουργία καλαθιού</li>
                  <li>Σύστημα “Παρόμοια προϊόντα”</li>
                  <li>Ανακοινώσεις & blog posts</li>
                  <li>Πληρωμές με Stripe & Google Pay</li>
                  <li>Responsive σχεδιασμός σε κινητά</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%", backgroundColor: "#f1f8e9" }}>
              <CardContent sx={{ color: "grey.900" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Dashboard Διαχείρισης
                </Typography>
                <ul style={{ paddingLeft: 20, color: "inherit" }}>
                  <li>Διαχείριση εγγεγραμμένων πελατών</li>
                  <li>Προβολή παραγγελιών & αυτόματα email</li>
                  <li>Προσθήκη / επεξεργασία / διαγραφή προϊόντων</li>
                  <li>Διαχείριση στοκ & τιμών</li>
                  <li>Upload εικόνων μέσω Appwrite</li>
                  <li>Δημιουργία posts με Editor.js</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* SECTION 2 — TECHNICAL DETAILS */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Τεχνικά Χαρακτηριστικά & Υλοποίηση
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 3 }}>
          Το e-shop έχει αναπτυχθεί με επαγγελματικές προδιαγραφές και πρακτικές
          που συναντώνται σε production εφαρμογές.
        </Typography>

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
                  <li>MUI UI Components</li>
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
                  <li>Cron jobs</li>
                  <li>Swagger API Docs</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          {/* TESTING & DEPLOYMENT */}
          <Grid size={{ xs: 12 }}>
            <Card sx={{ backgroundColor: "#f3e5f5" }}>
              <CardContent sx={{ color: "grey.900" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Testing, SEO & Deployment
                </Typography>
                <ul style={{ paddingLeft: 20, color: "inherit" }}>
                  <li>Jest + Supertest backend tests</li>
                  <li>Cypress end-to-end testing</li>
                  <li>GDPR συμμόρφωση</li>
                  <li>SEO-optimized metadata</li>
                  <li>Deployment σε Hetzner VPS</li>
                  <li>Nginx reverse proxy & SSL</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* CTA */}
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
}
