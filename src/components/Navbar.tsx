"use client";

import Link from "next/link";
import { useState } from "react";
import { Playpen_Sans } from "next/font/google";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

const playpen = Playpen_Sans({ weight: "800" });

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg ease-in-out border-b bg-background/90 border-border">
      <div className="container mx-auto flex h-16 items-center justify-between max-w-7xl px-6 md:px-4">
        <div
          className={`text-xl md:text-3xl text-primary ${playpen.className}`}
        >
          LUX SHOP
        </div>

        <div className="hidden md:flex items-center gap-12">
          <Link
            href="?category=coffee#Products"
            className="hover:text-primary transition-colors duration-300"
          >
            قهوه
          </Link>
          <Link
            href="?category=vitamin#Products"
            className="hover:text-primary transition-colors duration-300"
          >
            ویتامین
          </Link>
          <Link
            href="?category=creatine#Products"
            className="hover:text-primary transition-colors duration-300"
          >
            کراتین
          </Link>
          <Link
            href="?category=protein#Products"
            className="hover:text-primary transition-colors duration-300"
          >
            پروتئین بدنسازی
          </Link>
          <Link
            href="#Products"
            className="hover:text-primary transition-colors duration-300"
          >
            محصولات
          </Link>
          <Link
            href="/"
            className="hover:text-primary transition-colors duration-300"
          >
            صفحه اصلی
          </Link>
        </div>

        <div className="flex md:hidden items-center" onClick={handleOpen}>
          {!isOpen ? <Menu size={16} /> : <X size={16} />}
        </div>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-background/95 absolute inset-x-0 top-16 border-b backdrop-blur-lg md:hidden"
        >
          <div className="container mx-auto flex flex-col-reverse items-end gap-4 px-4 py-4">
            <Link
              href="?category=coffee#Products"
              className="hover:text-primary transition-colors duration-300"
            >
              قهوه
            </Link>
            <Link
              href="?category=vitamin#Products"
              className="hover:text-primary transition-colors duration-300"
            >
              ویتامین
            </Link>
            <Link
              href="?category=creatine#Products"
              className="hover:text-primary transition-colors duration-300"
            >
              کراتین
            </Link>
            <Link
              href="?category=protein#Products"
              className="hover:text-primary transition-colors duration-300"
            >
              پروتئین بدنسازی
            </Link>
            <Link
              href="#Products"
              className="hover:text-primary transition-colors duration-300"
            >
              محصولات
            </Link>
            <Link
              href="/"
              className="hover:text-primary transition-colors duration-300"
            >
              صفحه اصلی
            </Link>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

export default Navbar;
