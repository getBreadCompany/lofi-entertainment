"use client";

import React, { useState } from "react";
import Drawer from "../drawer";
import Header from "../header";
import Footer from "../footer";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const drawerHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="h-auto max-w-[1440px] m-auto">
      {open ? (
        <Drawer drawerHandler={drawerHandler} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="h-auto min-h-screen bg-dark"
        >
          <Header drawerHandler={drawerHandler} />
          {children}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
