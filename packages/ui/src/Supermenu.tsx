import { motion, useScroll } from "framer-motion";
import "./styles.css";
import { Version } from "./Version";
import { MenuLogo } from "./MenuLogo";

export const Supermenu = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden sm:block">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-black to-gray-800">
      <MenuLogo />
        <button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
          <a href="https://pencil.li" target="_blank" rel="noopener noreferrer">
            Pencil Domains&trade;
          </a>
        </button>
        <button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
          <a
            href="https://superdata.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            SuperData&trade;
          </a>
        </button>
      </div>
    </div>
  );
};
