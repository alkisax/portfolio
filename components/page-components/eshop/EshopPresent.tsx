"use client";

import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
        {children}
      </Typography>
    </Box>
  );
};


const customerShowcaseSections = [
  {
    src: "/eshop-fb-screenshots/home.jpg",
    alt: "Home page",
    title: "Αρχική σελίδα",
    text: "Η αρχική σελίδα παρουσιάζει το brand, βασικές κατηγορίες και επιλεγμένα προϊόντα, ώστε ο επισκέπτης να καταλαβαίνει άμεσα τι πουλάτε.",
  },
  {
    src: "/eshop-fb-screenshots/store.jpg",
    alt: "Store",
    title: "Κατάλογος προϊόντων",
    text: "Ο πελάτης περιηγείται εύκολα σε όλα τα προϊόντα και βρίσκει γρήγορα αυτό που τον ενδιαφέρει, με αναζήτηση ανά λέξη-κλειδί, κατηγορία ή εύρος τιμής.",
  },
  {
    src: "/eshop-fb-screenshots/item.jpg",
    alt: "Product page",
    title: "Σελίδα προϊόντος",
    text: "Κάθε προϊόν διαθέτει ξεχωριστή σελίδα με φωτογραφίες, thumbnails, αναλυτική περιγραφή και τιμή. Υποστηρίζονται παραλλαγές προϊόντων (π.χ. μέγεθος, χρώμα κ.λπ.) και, αν θέλετε, σχόλια από εγγεγραμμένους πελάτες.",
  },
  {
    src: "/eshop-fb-screenshots/cart.jpg",
    alt: "Cart",
    title: "Καλάθι αγορών",
    text: "Ξεκάθαρη εικόνα της παραγγελίας πριν την ολοκλήρωση, με εύκολη αλλαγή ποσοτήτων και αφαίρεση προϊόντων.",
  },
  {
    src: "/eshop-fb-screenshots/shipping.jpg",
    alt: "Shipping",
    title: "Στοιχεία & αποστολή",
    text: "Απλή φόρμα στοιχείων και επιλογή τρόπου αποστολής ή παραλαβής.",
  },
  {
    src: "/eshop-fb-screenshots/stripe.jpg",
    alt: "Payments",
    title: "Πληρωμές",
    text: "Υποστήριξη αντικαταβολής, IRIS (τραπεζικό QR), καθώς και πληρωμές με κάρτα ή Google Pay μέσω της πλατφόρμας Stripe.",
  },
  {
    src: "/eshop-fb-screenshots/announcements.jpg",
    alt: "Announcements",
    title: "Ανακοινώσεις",
    text: "Σελίδα ανακοινώσεων για ενημερώσεις προς τους πελάτες (διαθεσιμότητα, καθυστερήσεις, νέα προϊόντα κ.λπ.).",
  },
  {
    src: "/eshop-fb-screenshots/login.jpg",
    alt: "Login",
    title: "Σύνδεση & λογαριασμοί",
    text: "Σύστημα σύνδεσης χρηστών και διαχειριστών, με δυνατότητα login μέσω Google.",
  },
];

const adminShowcaseSections = [
  {
    src: "/eshop-fb-screenshots/admin-transaction.jpg",
    alt: "Admin transactions",
    title: "Διαχείριση παραγγελιών",
    text: "Όλες οι παραγγελίες συγκεντρωμένες σε ένα panel, με αλλαγή κατάστασης και αυτόματη ενημέρωση του πελάτη με email.",
  },
  {
    src: "/eshop-fb-screenshots/admin-add-item.jpg",
    alt: "Admin add product",
    title: "Προσθήκη & επεξεργασία προϊόντων",
    text: "Διαχείριση προϊόντων με περιγραφές, φωτογραφίες, κατηγορίες, διαθεσιμότητα και παραλλαγές.",
  },
  {
    src: "/eshop-fb-screenshots/admin-excel.jpg",
    alt: "Admin Excel",
    title: "Διαχείριση με Excel",
    text: "Μαζική εισαγωγή και ενημέρωση προϊόντων μέσω Excel, ιδανικό για μεγάλους καταλόγους.",
  },
  {
  src: "/eshop-fb-screenshots/seo.jpg",
  alt: "SEO score",
  title: "SEO & απόδοση",
  text: "Το e-shop είναι βελτιστοποιημένο για μηχανές αναζήτησης, με σωστή δομή και καλή απόδοση, ώστε τα προϊόντα σας να μπορούν να εμφανίζονται ψηλά στα αποτελέσματα αναζήτησης.",
},
];

const EshopPresent = () => {
  const [fullscreenImage, setFullscreenImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <Box
        sx={{
          width: { xs: "90vw", md: "60vw" },
          mx: "auto",
          mt: 8,
        }}
      >
        <Section title="E-shop φτιαγμένο για μικρούς παραγωγούς">
          Αν πουλάς χειροποίητα ή τοπικά προϊόντα και θέλεις να έχεις το{" "}
          <strong>δικό σου ηλεκτρονικό κατάστημα</strong>, χωρίς προμήθειες και
          χωρίς πλατφόρμες τρίτων, αυτό το e-shop είναι φτιαγμένο ακριβώς γι’
          αυτό.
          <br />
          <br />
          Δεν πρόκειται για έτοιμο template. Είναι ένα{" "}
          <strong>πλήρες σύστημα πωλήσεων</strong>, προσαρμοσμένο στο brand σου,
          που μπορεί να είναι online μέσα σε λίγες ημέρες.
          <br />
          <br />
          Το κατάστημα μπορεί να προσαρμοστεί στο δικό σας brand και να λειτουργήσει
          άμεσα, αρκεί να μας παρέχετε τον κατάλογο προϊόντων, τις φωτογραφίες τους
          και ένα σύντομο κείμενο για την αρχική σελίδα.
        </Section>

        <Section title="Πώς λειτουργεί για τον πελάτη σας">
          Ο επισκέπτης μπορεί να περιηγηθεί στα προϊόντα, να δει αναλυτικές
          πληροφορίες, να προσθέσει προϊόντα στα αγαπημένα και στο καλάθι και να
          ολοκληρώσει την παραγγελία του σε λίγα απλά βήματα.
          <br />
          <br />
          Υποστηρίζονται πληρωμές με αντικαταβολή, τραπεζικό QR (IRIS), καθώς και
          κάρτα ή Google Pay μέσω της πλατφόρμας Stripe.
        </Section>

        <Section title="Πώς λειτουργεί για εσάς (διαχείριση καταστήματος)">
          Το e-shop συνοδεύεται από ένα πλήρες admin panel, μέσα από το οποίο
          μπορείτε να διαχειρίζεστε προϊόντα, παραγγελίες και περιεχόμενο.
          <br />
          <br />
          Η διαχείριση μπορεί να γίνει είτε από το περιβάλλον του συστήματος είτε
          μέσω Excel, κάτι που κάνει τις μαζικές αλλαγές ιδιαίτερα εύκολες.
        </Section>

        <Section title="Διαχείριση παραγγελιών & delivery">
          Κάθε παραγγελία εμφανίζεται στο admin panel και μπορεί να εγκριθεί,
          να επεξεργαστεί ή να σημειωθεί ως απεσταλμένη.
          <br />
          <br />
          Ο διαχειριστής του καταστήματος μπορεί να επιλέξει να ενημερώνεται μέσω
          email για κάθε νέα παραγγελία, ενώ ο πελάτης ενημερώνεται αυτόματα για
          την εξέλιξή της.
        </Section>

        <Section title="Επιπλέον δυνατότητες">
          Σελίδα ανακοινώσεων, σχόλια προϊόντων, σελίδες νομικών πληροφοριών,
          πλήρης συμβατότητα με κινητά και καλή απόδοση στις μηχανές αναζήτησης.
        </Section>

        <Section title="Τι περιλαμβάνει η παράδοση">
          • Στήσιμο και παραμετροποίηση καταστήματος
          <br />
          • Ανέβασμα αρχικού καταλόγου προϊόντων
          <br />
          • Ρύθμιση πληρωμών και αποστολών
          <br />
          • Εκπαίδευση για τη διαχείριση
        </Section>

        <Section title="Για ποιον είναι κατάλληλο">
          Μικρούς παραγωγούς, οικοτέχνες και τοπικές επιχειρήσεις που θέλουν έλεγχο
          χωρίς μεσάζοντες.
        </Section>

        <Section title="Παραδείγματα λειτουργίας του e-shop">
          Ενδεικτικά screenshots από το κατάστημα και το σύστημα διαχείρισης,
          ώστε να δείτε πώς λειτουργεί στην πράξη.
        </Section>

        <Box sx={{ mt: 8 }}>
          {customerShowcaseSections.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <Grid
                key={item.src}
                container
                spacing={4}
                alignItems="center"
                direction={{
                  xs: "column",
                  md: isEven ? "row" : "row-reverse",
                }}
                sx={{
                  mb: 6,
                  pb: 6,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    {item.text}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "4 / 3",
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: 3,
                      cursor: "zoom-in",
                    }}
                    onClick={() => setFullscreenImage(item)}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Box>

        <Section title="Πώς λειτουργεί για εσάς (διαχείριση)">
          Παραδείγματα από το σύστημα διαχείρισης του καταστήματος.
        </Section>

        <Box sx={{ mt: 8 }}>
          {adminShowcaseSections.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <Grid
                key={item.src}
                container
                spacing={4}
                alignItems="center"
                direction={{
                  xs: "column",
                  md: isEven ? "row" : "row-reverse",
                }}
                sx={{
                  mb: 6,
                  pb: 6,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    {item.text}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "4 / 3",
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: 3,
                      cursor: "zoom-in",
                    }}
                    onClick={() => setFullscreenImage(item)}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Box>

      {fullscreenImage && (
        <Box
          onClick={() => setFullscreenImage(null)}
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ maxWidth: "90vw", maxHeight: "90vh" }}>
            <Image
              src={fullscreenImage.src}
              alt={fullscreenImage.alt}
              width={1600}
              height={1200}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default EshopPresent;
