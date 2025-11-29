"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HomeBtnBadgeProps {
  src: string;
  top?: number;
  right?: number;
  size?: number;
}

export default function HomeBtnBadge({
  src,
  top = -60,
  right = 150,
  size = 120,
}: HomeBtnBadgeProps) {
  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        right,
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        zIndex: 10,
      }}
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
  );
}
