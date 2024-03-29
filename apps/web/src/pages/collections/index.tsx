/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";

export default function Home() {
  console.log("✅ BlackHoles by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>Pylar AI by Pencil</title>
        <script async src="https://umami.decentralass.com/script.js" data-website-id="ee2353f0-e6b0-4086-a2ff-22236447f399"></script>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <main>
        <TitlePylar />
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="flex flex-col items-center justify-center">
              <button className="m-2 justify-center rounded-2xl bg-blue-600 py-3 px-4 text-xs font-bold text-white shadow-md hover:shadow-xl md:block">
                <a className="text-center" href="/">
                  Back to Home
                </a>
              </button>
            </div>
          </motion.div>
          <p className="py-8 text-center text-2xl font-bold text-white">
            Collections by Pylar&trade; AI
          </p>
          <div className="pylarDiv">
            <button className="m-2 justify-center rounded-2xl bg-blue-600 py-3 px-4 text-xs font-bold text-white shadow-md hover:shadow-xl md:block">
              <a className="text-center" href="/collections/blackholes">
                BlackHoles
              </a>
            </button>
            <button className="m-2 justify-center rounded-2xl bg-blue-600 py-3 px-4 text-xs font-bold text-white shadow-md hover:shadow-xl md:block">
              <a className="text-center" href="/collections/human">
                Human
              </a>
            </button>
            <button className="m-2 justify-center rounded-2xl bg-blue-600 py-3 px-4 text-xs font-bold text-white shadow-md hover:shadow-xl md:block">
              <a className="text-center" href="/collections/box">
                Box
              </a>
            </button>
            <button className="m-2 justify-center rounded-2xl bg-blue-600 py-3 px-4 text-xs font-bold text-white shadow-md hover:shadow-xl md:block">
              <a className="text-center" href="/collections/cats">
                Cats
              </a>
            </button>
          </div>
          <p className="py-8 text-center text-2xl font-bold text-white">
            2022 © Pylar&trade; AI by Superdatas, All Rights Reserved
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
