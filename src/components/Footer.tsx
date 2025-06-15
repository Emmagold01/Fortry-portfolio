import fortry from "../assets/FORTRY.png";
import { motion } from "motion/react";

export const Footer = () => {
  const navLinks = ["About", "Services", "Portfolio", "Contact"];

  return (
    <section className="my-7 h-18 rounded-2xl bg-[#383838] px-3 md:px-6">
      <div className="flex items-center justify-between">
        <div>
          <img src={fortry} alt="logo" />
        </div>

        <ul className="font-nasa flex space-x-[5px] pb-2.5 text-sm font-medium text-white md:space-x-7 md:text-lg">
          {navLinks.map((link) => (
            <motion.li
              whileHover={{
                color: "#0073ff",
              }}
              key={link}
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
