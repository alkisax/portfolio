// portfolio-page/app/services/page.tsx
"use client";

import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import IntroBlock from "@/components/common/IntroBlock";
import ServicesSectionBlock from "@/components/page-components/services-components/ServicesSectionBlock";

export default function ServicesPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      {/* MAIN HEADER */}
      <IntroBlock title={"Υπηρεσίες"} text={"Από websites και e-shops μέχρι custom web εφαρμογές και λύσεις τεχνητής νοημοσύνης. Σχεδιάζω και υλοποιώ λύσεις που  ταιριάζουν πραγματικά στις ανάγκες μιας επιχείρησης ή ενός ατόμου."} />

      {/* GRID WRAPPER */}
      <Grid container spacing={4}>
        {/* ----------------------------- */}
        {/* CUSTOM E-SHOP SECTION         */}
        {/* ----------------------------- */}
        <ServicesSectionBlock
          sectionTitle="Custom E-Shop Development"
          sectionDescription="Με το custom e-shop δεν εξαρτάστε από templates ή περιορισμούς
          πλατφόρμων. Ο κώδικας είναι 100% δικός σας και μπορεί να επεκταθεί
          απεριόριστα ανάλογα με τις ανάγκες σας."
          cardTitle="Custom E-Shop"
          cardDescription="Μοντέρνο, γρήγορο e-shop με σύγχρονο design και πλήρη πρόσβαση στα δεδομένα."
          bullets={[
            "Γρήγορο & ασφαλές",
            "Μοντέρνο responsive design",
            "Εύκολη διαχείριση προϊόντων",
            "Online πληρωμές",
            "SEO & υψηλή απόδοση",
          ]}
          href="/services/eshopExample"
          bg="#e3f2fd"
          buttonColor="#1976d2"
        />

        {/* ----------------------------- */}
        {/* WORDPRESS SECTION             */}
        {/* ----------------------------- */}
        <ServicesSectionBlock
          sectionTitle="WordPress / CMS Websites"
          sectionDescription="Η οικονομικότερη και ταχύτερη λύση για μικρές επιχειρήσεις που θέλουν επαγγελματική online παρουσία."
          cardTitle="WordPress Website"
          cardDescription="Γρήγορη υλοποίηση, εύκολη διαχείριση και χαμηλό budget. Ιδανικό για μικρές επιχειρήσεις."
          bullets={[
            "WordPress + WooCommerce",
            "Εύκολη διαχείριση χωρίς τεχνικές γνώσεις",
            "Φιλικό προς SEO",
            "Plugins για κάθε ανάγκη",
            "Χαμηλό κόστος κατασκευής",
          ]}
          href="/services/wordpressExample"
          bg="#e8f5e9"
          buttonColor="#2e7d32"
        />

        {/* ----------------------------- */}
        {/* CUSTOM WEB APPS SECTION       */}
        {/* ----------------------------- */}
        <ServicesSectionBlock
          sectionTitle="Custom Web Applications"
          sectionDescription="Για επιχειρήσεις που χρειάζονται εξειδικευμένες λύσεις όπως dashboards, automations, workflows,
          CRM συστήματα ή εσωτερικά εργαλεία."
          cardTitle="Custom Web App"
          cardDescription="Δυνατότητες για multi-tenant συστήματα, automations, dashboards, file uploads και mobile app."
          bullets={[
            "Role-based authentication",
            "Dashboards & αναφορές",
            "File uploads & document management",
            "Offline-first δυνατότητες",
            "Mobile app με React Native",
          ]}
          href="/services/customApps"
          bg="#fff3e0"
          buttonColor="#ef6c00"
        />
      </Grid>
    </Container>
  );
}
