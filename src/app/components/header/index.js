"use client";

import React from "react";
import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = (props) => {
  return (
    <div className="flex  py-6 px-6 sm:px-10 lg:px-40 justify-between w-full">
      <div className="w-auto">
        <Link href="/" className="text-white">
          Your Logo
        </Link>
      </div>
      <div className="w-auto">
        <div className="hidden sm:flex w-full justify-end gap-10">
          <Link href="/about-us" className="text-white font-semibold">
            ABOUT US
          </Link>
          <Link href="/events" className="text-white font-semibold">
            EVENTS
          </Link>
          <Link href="/events" className="text-white font-semibold">
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex justify-end  items-center sm:hidden ">
          <IconButton
            icon={<HamburgerIcon />}
            color="white"
            onClick={props.drawerHandler}
            className="text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
