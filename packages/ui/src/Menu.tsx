import { Version } from "./Version";
import { MenuLogo } from "./MenuLogo";
import { motion, useScroll } from "framer-motion";
import "./styles.css";

{
  // show hour and minute locale
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}
export const Menu = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden sm:block">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-black to-gray-800">
        <MenuLogo />{" "}
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/">Our Works</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/what-is-pylar">What is Pylar</a>
        </button>
        <button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
        <a href="https://pencil.li">Pencil Domains&trade;</a>
        </button>
        <button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
          <a href="/pylar-license">The License</a>
        </button>
        <div
          className="hidden py-2 px-4 font-bold text-white md:block"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <button className="hidden py-2 px-4 font-bold text-white md:block">
            <a
              href="http://twitter.com/miguelgargallo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </button>
          <Version />
        </div>
      </div>
    </div>
  );
};

/* 
<button className="hidden rounded-xl px-8 font-bold text-white sm:block">
<a href="/">
  {new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  })}
</a>
</button>ç
*/

/*
<button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
<a
  href="https://newsroom.pencil.domains/"
  target="_blank"
  rel="noopener noreferrer"
>
  Newsroom
</a>
</button>
*/
