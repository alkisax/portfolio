import { Box, Typography } from "@mui/material";
import Image from "next/image";

const HomeHeroImg = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          height: "220px",
          mx: "auto",
          my: 3,
        }}
      >
        {/* IMAGE */}
        <Image
          src="/heroImage.png"
          alt="pixel hero"
          fill
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />

        {/* OVERLAY TEXT */}
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "5rem",
            fontWeight: "bold",
            color: "#00E5FF",
            fontFamily: "var(--font-boldpixels)",
            textShadow: "0 0 12px rgba(0,0,0,0.9)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          Full Stack Developer
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#B388FF",
            fontFamily: "var(--font-boldpixels)",
            textShadow: "0 0 12px rgba(0,0,0,0.9)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          HELLO WORLD
        </Typography>
      </Box>
    </>
  );
};

export default HomeHeroImg;
