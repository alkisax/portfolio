"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR BAR */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#111",
          borderBottom: "1px solid #222",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LOGO */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff" }}>
              Pelopidas Kopakakis
            </Typography>
          </Link>

          {/* DESKTOP LINKS */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: "#ccc",
                    fontSize: "1rem",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ color: "#fff", display: { xs: "block", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, backgroundColor: "#111", height: "100%" }}>
          <List>
            {links.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  onClick={() => setOpen(false)}
                  component={Link}
                  href={item.href}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: { color: "#fff", fontSize: "1.1rem" },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
