import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    title: "About tripkolic",
    links: [
      { name: "About us", href: "/" },
      { name: "Newsroom", href: "/" },
      { name: "tripkolic Blog", href: "/" },
      { name: "Careers", href: "/" },
    ],
  },
  {
    title: "Partnership",
    links: [
      { name: "Merchant sign up", href: "/" },
      { name: "Merchant log in", href: "/" },
      { name: "Affiliate Partnership", href: "/" },
      { name: "Infuluencer Program", href: "/" },
      { name: "Agent Marketplace", href: "/" },
      { name: "tripkolic Partner Hub", href: "/" },
      { name: "Distribution & Marketing Enquiries", href: "/" },
    ],
  },
  {
    title: "Term of use",
    links: [
      { name: "General terms of use", href: "/" },
      { name: "Privacy policy", href: "/" },
      { name: "Cookie policy", href: "/" },
      { name: "Bug Bounty Program", href: "/" },
      { name: "Animal Welfare Policy", href: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t-2 border-gray-200">
      <div className="max-w-screen-[1780px] mx-auto px-4 sm:px-8 lg:px-16 py-2 sm:py-6 lg:py-6">
        <div className="flex flex-col gap-2 mb-12">
          <Image src="/logo.png" width={125} height={125} alt="Logo" />
          <h2 className="text-gray-600">
            Lorem ipsum odor amet, consectetuer adipiscing elit. <br /> Gravida
            elit diam hendrerit dapibus diam velit non habitant potenti?
          </h2>
        </div>
        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="text-gray-800 font-bold text-lg mb-4">
                {section.title}
              </h2>
              <div className="flex flex-col gap-2">
                {section.links.map((link, linkIndex) => (
                  <p key={linkIndex} className="text-gray-500 font-semibold">
                    <Link href={link.href}>{link.name}</Link>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Copyright Information */}
      <div className="w-full border-t border-gray-200">
        <div className="max-w-screen-[1780px] mx-auto px-4 sm:px-8 lg:px-16 py-8">
          <p className="text-sm text-gray-600">
            © 2024 <span className="font-bold text-gray-500">Tripkolic</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
