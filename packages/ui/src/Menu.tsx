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
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500">
      <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/">Pylar&trade; AI</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/blog">Daily Work</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/what-is-pylar">About</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/pylar-license">The License</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="https://pencil.domains"
          target="_blank"
          rel="noreferrer">
          Pencil Domains</a>
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
          <a
            href="https://github.com/miguelgargallo/Next13-Fetch-Data-turbo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden py-2 px-4 font-bold text-white md:block"
          >
            <picture>
              <img
                src="https://img.shields.io/github/stars/miguelgargallo/Next13-Fetch-Data-turbo?style=social"
                alt="Landscape picture"
                width={100}
                height={20}
              />
            </picture>
          </a>{" "}
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
