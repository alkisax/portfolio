"use client";

import {
  Container,
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

export default function WordpressExamplePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* TITLE */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Παράδειγμα WordPress / WooCommerce Καταστήματος
      </Typography>

      <Typography sx={{ color: "text.secondary", maxWidth: "800px", mb: 4 }}>
        Ένα ολοκληρωμένο e-shop με WordPress, WooCommerce και πλήρη διαχείριση
        περιεχομένου, ιδανικό για μικρές επιχειρήσεις που χρειάζονται γρήγορη
        υλοποίηση, χαμηλό κόστος και απλή διαχείριση προϊόντων & παραγγελιών.
        Χρησιμοποιήθηκε Blocksy + Elementor, και επιλεγμένα plugins με
        επαγγελματικές δυνατότητες.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* USER EXPERIENCE */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Λειτουργίες & Εμπειρία Χρήστη
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 3 }}>
          Το WordPress e-shop επιτρέπει ταχύτατη υλοποίηση με απλή διαχείριση
          περιεχομένου και παραγγελιών — ιδανικό για μικρές επιχειρήσεις.
        </Typography>

        <Grid container spacing={4}>

          {/* CUSTOMER FEATURES */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ backgroundColor: "#e3f2fd" }}>
              <CardContent sx={{ color: "grey.900" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Λειτουργίες για Πελάτες
                </Typography>

                <ul style={{ paddingLeft: 20 }}>
                  <li>Πλήρης κατάλογος προϊόντων</li>
                  <li>Φίλτρα κατηγοριών & tags</li>
                  <li>Wishlist με YITH Wishlist</li>
                  <li>Καλάθι & checkout</li>
                  <li>Πληρωμές Stripe & PayPal</li>
                  <li>PDF τιμολόγια & αποδείξεις</li>
                  <li>Responsive σχεδιασμός Blocksy</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          {/* ADMIN FEATURES */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ backgroundColor: "#f1f8e9" }}>
              <CardContent sx={{ color: "grey.900" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Λειτουργίες Διαχείρισης
                </Typography>

                <ul style={{ paddingLeft: 20 }}>
                  <li>Εύκολη διαχείριση προϊόντων & στοκ</li>
                  <li>Σελίδες με Elementor (drag & drop)</li>
                  <li>Προβολή παραγγελιών</li>
                  <li>PDF invoices (WebToffee)</li>
                  <li>Φόρμες επικοινωνίας με WPForms</li>
                  <li>Προσαρμογή email με YayMail</li>
                  <li>Caching με Seraphinite Accelerator</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* ADDONS LIST */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Χρησιμοποιούμενα Addons & Plugins
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 3 }}>
          Επιλέχθηκαν για ταχύτητα, συμβατότητα, επεκτασιμότητα και ευκολία χρήσης.
        </Typography>

        <Card sx={{ backgroundColor: "#fff3e0" }}>
          <CardContent sx={{ color: "grey.900" }}>
            <ul style={{ paddingLeft: 20 }}>
              <li>Blocksy Companion (Theme)</li>
              <li>Elementor</li>
              <li>Seraphinite Accelerator</li>
              <li>WooCommerce</li>
              <li>WooCommerce PayPal Payments</li>
              <li>WooCommerce Stripe Gateway</li>
              <li>WebToffee WooCommerce PDF Invoices</li>
              <li>YITH WooCommerce Wishlist</li>
              <li>WPForms Lite</li>
              <li>YayMail Email Customizer</li>
            </ul>
          </CardContent>
        </Card>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* TECHNICAL SECTION */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Τεχνικά Χαρακτηριστικά
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 3 }}>
          Παρά το ότι βασίζεται σε CMS, εφαρμόστηκαν πρακτικές ταχύτητας,
          ασφάλειας και SEO.
        </Typography>

        <Grid container spacing={4}>

          {/* PERFORMANCE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ backgroundColor: "#e8eaf6" }}>
              <CardContent sx={{ color: "grey.900" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Απόδοση & SEO
                </Typography>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Ελαφρύ theme (Blocksy)</li>
                  <li>Asset optimization</li>
                  <li>SEO-friendly δομή</li>
                  <li>Schema + metadata</li>
                  <li>Lazy loading εικόνων</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          {/* SECURITY */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ backgroundColor: "#fce4ec" }}>
              <CardContent sx={{ color: "grey.900" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Ασφάλεια
                </Typography>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Τακτικά updates</li>
                  <li>Protected admin panel</li>
                  <li>Ασφαλείς πληρωμές (Stripe/PayPal)</li>
                  <li>Server hardening</li>
                  <li>GDPR συμμόρφωση</li>
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
          href="https://wp.portfolio-projects.space"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: 3,
              py: 1.5,
              backgroundColor: "#2e7d32",
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#1b5e20" },
            }}
          >
            Δείτε το Live Demo
          </Box>
        </a>
      </Box>
    </Container>
  );
}
