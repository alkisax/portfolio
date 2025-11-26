"use client";

import Link from "next/link";
import { Container, Box, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function ServicesPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* HEADER */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Υπηρεσίες
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "text.secondary" }}
          maxWidth="700px"
          mx="auto"
        >
          Από websites και e-shops μέχρι custom web εφαρμογές και λύσεις
          τεχνητής νοημοσύνης. Σχεδιάζω και υλοποιώ λύσεις που ταιριάζουν
          πραγματικά στις ανάγκες μιας επιχείρησης ή ενός ατόμου που να
          ενισχύουν την ψηφιακή παρουσία κάθε πελάτη.
        </Typography>
      </Box>

      {/* GRID */}
      <Grid container spacing={4}>
        {/* ----------------------------- */}
        {/* CUSTOM E-SHOP — EXPLANATION   */}
        {/* ----------------------------- */}
        <Grid size={{ xs: 12 }}>
          <Box mb={2}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Custom E-Shop Development
            </Typography>

            <Typography sx={{ color: "text.secondary", maxWidth: "700px" }}>
              Με το custom e-shop δεν εξαρτάστε από έτοιμα templates ή
              περιορισμούς πλατφόρμων τύπου Shopify / WooCommerce. Ο κώδικας
              είναι 100% δικός σας, άρα μπορείτε να προσθέσετε οτιδήποτε: ειδικά
              φίλτρα, semantic search, AI προτάσεις προϊόντων, πλήρη πρόσβαση σε
              δεδομένα και πολύ καλύτερη ταχύτητα.
            </Typography>
          </Box>
        </Grid>

        {/* ----------------------------- */}
        {/* CUSTOM E-SHOP CARD            */}
        {/* ----------------------------- */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%", backgroundColor: "#e3f2fd" }}>
            <CardContent sx={{ color: "grey.900" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Custom E-Shop
              </Typography>

              <Typography sx={{ color: "grey.900", mb: 2 }}>
                Μοντέρνο, γρήγορο e-shop με σύγχρονο design, εύκολη διαχείριση
                προϊόντων και άριστη εμπειρία χρήστη. Φτιαγμένο ώστε να
                προσαρμόζεται στις ανάγκες της δικής σας επιχείρησης.
              </Typography>

              <ul style={{ paddingLeft: 20, margin: 0, color: "inherit" }}>
                <li>Γρήγορο & ασφαλές</li>
                <li>Μοντέρνο responsive design</li>
                <li>Εύκολη διαχείριση προϊόντων</li>
                <li>Δυνατότητα online πληρωμών</li>
                <li>Εξαιρετική απόδοση & SEO</li>
              </ul>

              <Box mt={3}>
                <Link
                  href="/services/eshopExample"
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2.5,
                      py: 1.2,
                      color: "white",
                      backgroundColor: "#1976d2",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#1565c0" },
                    }}
                  >
                    Δείτε Αναλυτικά
                  </Box>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* ----------------------------- */}
        {/* WORDPRESS — EXPLANATION       */}
        {/* ----------------------------- */}
        <Grid size={{ xs: 12 }}>
          <Box mb={2}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              WordPress / CMS Websites
            </Typography>

            <Typography sx={{ color: "text.secondary", maxWidth: "700px" }}>
              Η οικονομικότερη επιλογή για μικρές επιχειρήσεις που χρειάζονται
              επαγγελματική online παρουσία χωρίς υψηλό κόστος ανάπτυξης. Εύκολη
              διαχείριση περιεχομένου, γρήγορη κατασκευή και δυνατότητα
              επέκτασης μέσω plugins.
            </Typography>
          </Box>
        </Grid>

        {/* ----------------------------- */}
        {/* WORDPRESS CARD                */}
        {/* ----------------------------- */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%", backgroundColor: "#e8f5e9" }}>
            <CardContent sx={{ color: "grey.900" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Τι Προσφέρει
              </Typography>

              <Typography sx={{ color: "grey.900", mb: 2 }}>
                Γρήγορη υλοποίηση, εύκολη διαχείριση περιεχομένου και χαμηλό
                budget, ιδανικό για μικρές επιχειρήσεις.
              </Typography>

              <ul style={{ paddingLeft: 20, margin: 0, color: "inherit" }}>
                <li>WordPress + WooCommerce</li>
                <li>Εύκολη διαχείριση χωρίς τεχνικές γνώσεις</li>
                <li>Φιλικό προς SEO</li>
                <li>Plugins για κάθε ανάγκη</li>
                <li>Χαμηλό κόστος κατασκευής</li>
              </ul>

              <Box mt={3}>
                <Link
                  href="/services/wordpressExample"
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2.5,
                      py: 1.2,
                      color: "white",
                      backgroundColor: "#2e7d32",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#1b5e20" },
                    }}
                  >
                    Δείτε Αναλυτικά
                  </Box>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* ----------------------------- */}
        {/* CUSTOM APPS — EXPLANATION     */}
        {/* ----------------------------- */}
        <Grid size={{ xs: 12 }}>
          <Box mb={2}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Custom Web Applications
            </Typography>

            <Typography sx={{ color: "text.secondary", maxWidth: "700px" }}>
              Όταν μια επιχείρηση χρειάζεται κάτι περισσότερο από απλή σελίδα ή
              e-shop, αναλαμβάνουμε κατασκευή εσωτερικών εργαλείων, dashboards,
              automation flows και ολοκληρωμένων web εφαρμογών.
            </Typography>
          </Box>
        </Grid>

        {/* ----------------------------- */}
        {/* CUSTOM APPS CARD              */}
        {/* ----------------------------- */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%", backgroundColor: "#fff3e0" }}>
            <CardContent sx={{ color: "grey.900" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Τι Περιλαμβάνει
              </Typography>

              <Typography sx={{ color: "grey.900", mb: 2 }}>
                Custom business logic, multi-tenant λειτουργίες, dashboards,
                reports, automations, file uploads και δυνατότητα mobile app.
              </Typography>

              <ul style={{ paddingLeft: 20, margin: 0, color: "inherit" }}>
                <li>Role-based authentication</li>
                <li>Dashboards & αναφορές</li>
                <li>File uploads & διαχείριση εγγράφων</li>
                <li>Offline-first δυνατότητες</li>
                <li>Mobile app με React Native</li>
              </ul>

              <Box mt={3}>
                <Link
                  href="/services/customApps"
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2.5,
                      py: 1.2,
                      color: "white",
                      backgroundColor: "#ef6c00",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#e65100" },
                    }}
                  >
                    Δείτε Αναλυτικά
                  </Box>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
