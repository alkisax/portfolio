/**
 * ColorScrollBox
 *
 * Scroll-driven container με:
 * - internal scroll (ΔΕΝ κοιτάει το scroll της σελίδας)
 * - δυναμικό background color based on scroll progress
 * - sticky main content
 * - optional middle / end messages που εμφανίζονται σε συγκεκριμένα scroll thresholds
 * 🔧 ΠΩΣ ΧΡΗΣΙΜΟΠΟΙΕΙΤΑΙ
 * Το component ΠΡΕΠΕΙ να τοποθετείται μέσα σε layout τύπου:
 * <Box
 *   sx={{
 *     height: '100vh',
 *     display: 'flex',
 *     flexDirection: 'column',
 *   }}
 * >
 *   <Header />
 *   <Box sx={{ flex: 1, minHeight: 0 }}>
 *     <ColorScrollBox ... />
 *   </Box>
 * </Box>
 * ⛔ Γιατί:
 * - Το ColorScrollBox βασίζεται σε `height: 100%`
 * - Το internal scroll δουλεύει ΜΟΝΟ αν ο parent έχει περιορισμένο ύψος
 * - Το `minHeight: 0` είναι απαραίτητο σε flex layouts για να επιτραπεί overflow
 *
 * 🎨 PROPS
 * @param colors
 *   Array από χρώματα (string hex/rgb).
 *   Δημιουργούν ισομερώς κατανεμημένα scroll color stops.
 *   Αν δοθεί 1 ή κανένα χρώμα → σταθερό μαυρο background.
 *
 * @param endMessage
 *   Προαιρετικό string που εμφανίζεται στο τέλος του scroll (>= ~90%).
 *
 * 🧠 INTERNAL LOGIC (summary)
 * - useScroll({ container }) → παρακολουθεί ΜΟΝΟ το scroll του box
 * - buildColorStops(colors[]) → παράγει scroll breakpoints δυναμικά
 * - sticky zone → μένει σταθερή μέχρι να “τελειώσει” το content
 * - spacers → ελέγχουν πότε εμφανίζονται middle / end sections
 *
 * ⚠️ ΣΗΜΕΙΩΣΗ
 * ΜΗΝ το χρησιμοποιείς απευθείας σε page χωρίς constrained height
 * (π.χ. χωρίς 100vh flex column wrapper), αλλιώς:
 * - δεν θα δουλέψει το internal scroll
 * - δεν θα ενεργοποιηθούν σωστά τα scroll effects
 */

"use client";

import { Box } from "@mui/material";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { primaryBrightColor } from "@/constants/constants";
import { shade } from "@/utils/colorUtils";

// helper func
// πριν δεχόταν 5 χρωμάτα και στο useTransform(scrollYProgress,[],[]) είχαμε 5 χρώματα απο props και 5 hardcoded break points. Η συναρτηση αυτή μας βοηθά να φτιάξουμε breaking points αν έρθουν ως props λιγότερα (ή περισσοτερα) χρώματα. Πλέον τα χρώμματα έρχονται ως array []
// useTransform(scrollYProgress,[0, 0.25, 0.5, 0.75, 1],[fromColor, oneFourthColor, middleColor, threeFourthColor, toColor]);
const buildColorStops = (colors: string[]) => {
  const count = colors.length; // μετράει τα χρώμματα
  // Αν έχουμε 0 ή 1 χρώμα τότε ΔΕΝ υπάρχει πραγματικό color scroll απλώς κρατάμε σταθερό background
  if (count <= 1) {
    return {
      progressStops: [0, 1],
      colorStops: [colors[0] ?? "#000", colors[0] ?? "#000"], // βαζει μαυρο ως default αν κανένα χρώμα props
    };
  }
  // "κάθε πόσο στο scroll (0–1) αλλάζουμε χρώμα"
  //
  // π.χ.
  // count = 2 → step = 1 / (2 - 1) = 1
  // count = 3 → step = 1 / (3 - 1) = 0.5
  // count = 5 → step = 1 / (5 - 1) = 0.25
  const step = 1 / (count - 1);
  // φτιάχνουμε το input array (τα breakpoints του scroll)
  // π.χ. colors.length = 4
  // i = 0 → 0 * step = 0
  // i = 1 → 1 * step = 0.33
  // i = 2 → 2 * step = 0.66
  // i = 3 → 3 * step = 1
  // άρα input = [0, 0.33, 0.66, 1]
  const progressStops = colors.map((_, i) => i * step);
  // ΤΙ ΕΠΙΣΤΡΕΦΕΙ; ένα object με: - input: τα scroll breakpoints (0 → 1) - output: τα χρώματα όπως ήρθαν
  return { progressStops, colorStops: colors };
};

const MotionBox = motion(Box);

// 🧠 SCROLL COORDINATION LOGIC
// Το component μπορεί να λειτουργήσει είτε ως scroll engine είτε ως scroll consumer.
// - scrollProgress:
//   ΔΕΧΕΤΑΙ MotionValue<number> από parent.
//   Όταν δοθεί, το component ΔΕΝ παράγει δικό του scroll,
//   αλλά “ακούει” το external scroll stream.
// - onScrollProgress:
//   ΕΞΑΓΕΙ το internal MotionValue<number> προς τα έξω (ως reference).
//   Χρησιμοποιείται όταν το component είναι scroll engine
//   και θέλουμε parent / siblings να συγχρονιστούν στο ίδιο scroll.
// Αποτέλεσμα:
// - Κάθε component μπορεί να είναι parent ή child σε scroll hierarchy.
// - Ένα μόνο MotionValue μπορεί να οδηγεί πολλαπλά scroll-driven effects.
// - Διαχωρισμός: scroll engine ≠ visual / timing logic.
type ColorScrollBoxProps = {
  children: React.ReactNode;
  colors?: string[];
  endMessage?: string;
  middleMessage?: string;
  scrollProgress?: MotionValue<number>;
  onScrollProgress?: (progress: MotionValue<number>) => void;
};

const ColorScrollBox = ({
  children,
  colors,
  endMessage = "",
  middleMessage = "",
  scrollProgress,
  onScrollProgress,
}: ColorScrollBoxProps) => {
  const [showMiddle, setShowMiddle] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // ΔΕΝ κοιτάμε το scroll της σελίδας, κοιτάμε μόνο το scroll ΜΕΣΑ στο ColorScrollBox, το scrollYProgress είναι ένας αριθμός από 0 έως 1
  // ΠΡΙΝ:
  // Το ColorScrollBox είχε ΠΑΝΤΑ δικό του useScroll({ container }) και παρήγαγε
  // εσωτερικά το scrollYProgress. Αυτό σήμαινε ότι:
  // - το ColorScrollBox ΕΛΕΓΧΕ το scroll
  // - και ταυτόχρονα ΕΦΑΡΜΟΖΕ visual effects (background color, messages)
  //
  // ΠΛΕΟΝ:
  // Το ColorScrollBox ΔΕΝ είναι scroll engine.
  // - Μπορεί να δεχτεί ΕΞΩΤΕΡΙΚΟ scroll progress (MotionValue<number>)
  //   π.χ. από DivScrollBox ή άλλο scroll container.
  // - Αν ΔΕΝ του δοθεί external progress, χρησιμοποιεί internal useScroll
  //   για backward compatibility.
  //
  // ΓΙΑΤΙ:
  // - Διαχωρισμός ευθυνών (scroll engine ≠ visual effects)
  // - Επιτρέπει να συνδυάζουμε διαφορετικά scroll-driven effects
  //   (π.χ. slots, color transitions, decorative elements)
  // - Το ColorScrollBox γίνεται pure visual layer και πιο επαναχρησιμοποιήσιμο
  // const { scrollYProgress } = useScroll({
  //   container: scrollRef,
  // });

  const internalScroll = useScroll({
    container: scrollRef,
  }).scrollYProgress;

  // 👇 ΕΞΑΓΩΓΗ του MotionValue προς τα έξω (ΜΟΝΟ reference, όχι τιμή)
  // Δεν το κάνουμε σε useMotionValueEvent γιατί δεν θέλουμε updates,
  // απλώς “δίνουμε” το scroll stream στον parent.
  // Το κάνουμε σε useEffect για να μην τρέχει σε κάθε render.
  useEffect(() => {
    if (!onScrollProgress) return;
    onScrollProgress(internalScroll);
  }, [onScrollProgress, internalScroll]);
  // 👇 αν μας δώσουν external progress, το χρησιμοποιούμε
  const effectiveScrollProgress = scrollProgress ?? internalScroll;

  useMotionValueEvent(effectiveScrollProgress, "change", (latest) => {
    if (latest >= 0.45 && !showMiddle) {
      setShowMiddle(true);
    }

    if (latest >= 0.9 && !showEnd) {
      setShowEnd(true);
    }
  });

  useMotionValueEvent(effectiveScrollProgress, "change", (latest) => {
    if (latest >= 0.9) {
      setShowEnd(true);
    }
  });

  // δεν το χρησιμοποιούμε πια γιατί παίρνουμε array colors και δεν έχουμε hardcoded break points, αλλα μένει ως απολό δείγμα σύνταξης δημιουργίας scrollYProgress
  // 0   = είμαι τέρμα πάνω στο container, 0.5 = είμαι στη μέση, 1 = είμαι τέρμα κάτω
  // const backgroundColor = useTransform(
  //   scrollYProgress,
  //   [0, 0.25, 0.5, 0.75, 1],
  //   [fromColor, oneFourthColor, middleColor, threeFourthColor, toColor]
  // );

  const { progressStops, colorStops } = buildColorStops(
    colors ?? [primaryBrightColor]
  );

  const backgroundColor = useTransform(
    effectiveScrollProgress,
    progressStops,
    colorStops
  );

  // δεν το χρησιμοποιήσαμε αλλα το κρατάω γιατι είναι η σύνταξη για το fade in / fade out
  // 👇 reveal στο τέλος
  // από scroll 0 → 0.85, opacity = 0, το end box είναι αόρατο
  // από 0.85 → 1 το opacity ανεβαίνει 0 → 1
  // const endOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1], {
  //   clamp: true,
  // });

  const middleIndex = Math.floor(colorStops.length / 2);
  const middleColor = colorStops[middleIndex];
  const middleTextColor = shade(middleColor, 50);

  const endColor = colorStops[colorStops.length - 1];
  const endTextColor = shade(endColor, 50);

  return (
    <MotionBox
      ref={scrollRef}
      style={{ backgroundColor }}
      sx={{
        // height: "calc(100vh - 469px)",
        height: "100%",
        overflowY: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        p: 4,
      }}
    >
      {/* ContentWrapper */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          minHeight: "500%",
        }}
      >
        {/* Sticky zone */}
        <Box
          sx={{
            position: "sticky",
            top: 40,
          }}
        >
          {children}
        </Box>

        {/* Spacer για να “τελειώσει” το sticky */}
        {/* Δημιουργεί κενό χώρο μετά το sticky content  - flexgrow 1 για να πιέσει προς τα κάτω το endmessage*/}
        {/* Spacer μετά το sticky */}
        <Box sx={{ flexGrow: 1 }} />

        {/* MIDDLE BOX */}
        {showMiddle && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            sx={{
              width: "100%",
              p: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: middleTextColor,
              fontSize: {
                xs: "3rem",
                md: "5rem",
              },
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {middleMessage}
          </MotionBox>
        )}

        {/* Spacer μεταξύ middle και end */}
        <Box sx={{ flexGrow: 1 }} />

        {/* END BOX */}
        {showEnd && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            sx={{
              width: "100%",
              p: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: endTextColor,
              fontSize: {
                xs: "5rem",
                md: "15rem",
              },
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {endMessage}
          </MotionBox>
        )}
      </Box>
    </MotionBox>
  );
};

export default ColorScrollBox;
