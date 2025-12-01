"use client";

import Image from "next/image";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface HomeBtnBadgeProps {
  src: string;
  top?: string | number;
  size?: number;
}

export default function HomeBtnBadge({
  src,
  top = "70%",   // only vertical offset
  size = 120,
}: HomeBtnBadgeProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        top,
        left: "65%",
        width: size,
        height: size,
        zIndex: 10,
        borderRadius: "50%",
        overflow: "hidden",
        mb: 10
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.12,
          rotate: 8,
          transition: { type: "spring", stiffness: 200, damping: 10 },
        }}
      >
        <Image
          src={src}
          alt="badge"
          width={size * 2.5}
          height={size * 2.5}
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </Box>
  );
}
