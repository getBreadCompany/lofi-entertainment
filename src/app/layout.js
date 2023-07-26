"use client";

import React, { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Drawer from "./components/drawer";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  const drawerHandler = () => {
    setOpen(!open);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {open ? (
            <Drawer drawerHandler={drawerHandler} />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-screen bg-dark"
            >
              <Header drawerHandler={drawerHandler} />
              <AnimatePresence></AnimatePresence>
              {children}
              <Footer />
            </motion.div>
          )}
        </div>
      </body>
    </html>
  );
}
