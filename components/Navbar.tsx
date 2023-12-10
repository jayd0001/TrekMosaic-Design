"use client";

import { NAV_LINKS } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { Button } from ".";

const Navbar = () => {
  const handleClick = () => {};
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={74} height={29} alt="logo" />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter curson-pointer pb-1.5
           transition-all hover:font-bold "
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Github"
          variant="btn_dark_green"
          onClick={() =>
            window.open("https://github.com/jayd0001/TrekMosaic-Design.git")
          }
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
