import fortry from "../assets/FORTRY.png";
import { motion } from "framer-motion";

export const Footer = () => {
  const navLinks = ["About", "Services", "Portfolio", "Contact"];

  return (
    <section className="border-t border-gray-600 bg-[#383838] px-4 py-6 md:px-10">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-between md:flex-row md:gap-6">
        {/* Logo */}
        <img
          src={fortry}
          alt="Fortry Logo"
          className="transition-opacity duration-300 hover:opacity-80"
        />

        {/* Nav Links */}
        <ul className="flex flex-col items-center space-y-2 text-sm font-medium tracking-wide text-white uppercase md:flex-row md:space-y-0 md:space-x-8 md:text-base">
          {navLinks.map((link) => (
            <motion.li
              key={link}
              whileHover={{ color: "#0073ff" }}
              className="font-nasa relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#0073ff] after:transition-all after:duration-300 hover:after:w-full"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="mt-2 w-full border-t border-gray-700 pt-4 text-center text-xs text-gray-300">
        © 2024 Fortry. All rights reserved.
      </div>
    </section>
  );
};
