"use client";

import IntroBlock from "@/components/common/IntroBlock";
import FeatureListCard from "@/components/common/FeatureListCard";
import ExternalLinkButton from "@/components/common/ExternalLinkButton";

import { Container, Box, Typography, Divider, Grid } from "@mui/material";

export default function WordpressExamplePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* TITLE */}
      <IntroBlock
        title="Παράδειγμα WordPress / WooCommerce Καταστήματος"
        text="Ένα ολοκληρωμένο e-shop με WordPress, WooCommerce και πλήρη διαχείριση περιεχομένου, ιδανικό για μικρές επιχειρήσεις που χρειάζονται γρήγορη υλοποίηση, χαμηλό κόστος και απλή διαχείριση προϊόντων & παραγγελιών. Χρησιμοποιήθηκε Blocksy + Elementor, και επιλεγμένα plugins με επαγγελματικές δυνατότητες."
      />

      <Divider sx={{ my: 4 }} />

      {/* USER EXPERIENCE */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Λειτουργίες & Εμπειρία Χρήστη
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 3 }}>
          Το WordPress e-shop επιτρέπει ταχύτατη υλοποίηση με απλή διαχείριση
          περιεχομένου και παραγγελιών — ιδανικό για μικρές επιχειρήσεις.
          Παράλληλα, παραμένει ένα πλήρως λειτουργικό και οπτικά ελκυστικό
          κατάστημα, με σύγχρονο design, εύκολη πλοήγηση και όλα τα απαραίτητα
          εργαλεία για μια ολοκληρωμένη online παρουσία.
        </Typography>

        <Grid container spacing={4}>
          {/* CUSTOMER FEATURES */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FeatureListCard
              title="Λειτουργίες για Πελάτες"
              bg="#e3f2fd"
              bullets={[
                "Πλήρης κατάλογος προϊόντων",
                "Φίλτρα κατηγοριών & tags",
                "Wishlist με YITH Wishlist",
                "Καλάθι & checkout",
                "Πληρωμές Stripe & PayPal",
                "PDF τιμολόγια & αποδείξεις",
                "Responsive σχεδιασμός Blocksy",
              ]}
            />
          </Grid>

          {/* ADMIN FEATURES */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FeatureListCard
              title="Λειτουργίες Διαχείρισης"
              bg="#f1f8e9"
              bullets={[
                "Εύκολη διαχείριση προϊόντων & στοκ",
                "Σελίδες με Elementor (drag & drop)",
                "Προβολή παραγγελιών",
                "PDF invoices (WebToffee)",
                "Φόρμες επικοινωνίας με WPForms",
                "Προσαρμογή email με YayMail",
                "Caching με Seraphinite Accelerator",
              ]}
            />
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
          Επιλέχθηκαν για ταχύτητα, συμβατότητα, επεκτασιμότητα και ευκολία
          χρήσης.
        </Typography>

        <FeatureListCard
          title="Plugins"
          bg="#fff3e0"
          bullets={[
            "Blocksy Companion (Theme)",
            "Elementor",
            "Seraphinite Accelerator",
            "WooCommerce",
            "WooCommerce PayPal Payments",
            "WooCommerce Stripe Gateway",
            "WebToffee WooCommerce PDF Invoices",
            "YITH WooCommerce Wishlist",
            "WPForms Lite",
            "YayMail Email Customizer",
          ]}
        />
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
            <FeatureListCard
              title="Απόδοση & SEO"
              bg="#e8eaf6"
              bullets={[
                "Ελαφρύ theme (Blocksy)",
                "Asset optimization",
                "SEO-friendly δομή",
                "Schema + metadata",
                "Lazy loading εικόνων",
              ]}
            />
          </Grid>

          {/* SECURITY */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FeatureListCard
              title="Ασφάλεια"
              bg="#fce4ec"
              bullets={[
                "Τακτικά updates",
                "Protected admin panel",
                "Ασφαλείς πληρωμές (Stripe/PayPal)",
                "Server hardening",
                "GDPR συμμόρφωση",
              ]}
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* CTA BUTTON */}
      <ExternalLinkButton
        href="https://wp.portfolio-projects.space"
        label="Δείτε το Live Demo"
        color="#2e7d32"
        hoverColor="#1b5e20"
        mt={6}
      />
    </Container>
  );
}
