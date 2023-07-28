"use client";

import React from "react";
import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Logo from "../../../../public/logoWhite.png";

const Header = (props) => {
  return (
    <div className="flex py-6 px-6 sm:px-10 lg:px-20 justify-between w-full ">
      <div className="w-auto">
        <Link href="/" className="text-white">
          <Image src={Logo} width={100} height={100} alt="logo" />
        </Link>
      </div>
      <div className="w-auto flex items-center">
        <div className="hidden lg:flex w-full justify-end gap-10 items-center h-full">
          <Link
            href="/about-us"
            className="text-white text-heading5 hover:text-purple"
          >
            ABOUT US
          </Link>
          <Link
            href="/events"
            className="text-white text-heading5 hover:text-purple"
          >
            EVENTS
          </Link>
          <Link
            href="/events"
            className="text-white text-heading5 hover:text-purple"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex justify-end  items-center lg:hidden ">
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
