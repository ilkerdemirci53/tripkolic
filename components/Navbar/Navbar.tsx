"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const menuItems = [
    { label: "Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
    { label: "Logout", href: "/logout" },
  ];

  return (
    <nav className="bg-white border-b-2 border-gray-200">
      <div className="max-w-screen-[1780px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/">
            <div className="flex-shrink-0">
              <Image src="/logo.png" alt="Logo" width={125} height={125} />
            </div>
          </Link>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-md font-medium"
              >
                Home
              </Link>
              <Link
                href="/tours"
                className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-md font-medium"
              >
                Tours
              </Link>
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <MdOutlineShoppingCart className="w-6 h-6" />
              </button>
              <div className="ml-3 relative">
                <div className="flex border border-gray-200 p-2 rounded-full gap-x-1">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <FaBars className="h-4 w-4" />
                  </button>
                  <button className="max-w-xs cursor-default bg-gray-200 p-1 border-none rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <Image
                      className="h-6 w-6 rounded-full"
                      src="/avatar.png"
                      alt="User avatar"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <FaBars className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated menu for both mobile and desktop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:absolute md:right-0 md:top-24 md:w-48 md:bg-white md:shadow-lg md:rounded-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:text-left text-center">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
