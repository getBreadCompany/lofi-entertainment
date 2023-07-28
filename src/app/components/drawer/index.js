"use client"

import React from "react";
import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function Drawer(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-dark h-screen w-screen flex flex-col gap-28 p-10"
    >
      <div className="text-center">
        <IconButton
          icon={<CloseIcon />}
          color="white"
          onClick={props.drawerHandler}
          className="text-3xl"
        />
      </div>

      <div className="flex flex-col text-center gap-16">
        <Link
          href="/about-us"
          className="text-white text-heading5 hover:text-gray-600"
        >
          ABOUT US
        </Link>
        <Link
          href="/events"
          className="text-white text-heading5 hover:text-gray-600"
        >
          EVENTS
        </Link>
        <Link
          href="/events"
          className="text-white text-heading5 hover:text-gray-600"
        >
          CONTACT US
        </Link>
      </div>
    </motion.div>
  );
}
