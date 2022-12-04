/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";

export default function Home() {
  console.log("✅ Pylar AI");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>Pylar AI by Pencil</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <main>
      <TitlePylar />
      <div className="pylarDiv">
      <motion.img
          className="pylarDimension"
          src="https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.0/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLpA_RealESRGAN_x4plus.jpeg"
          alt="Pylar AI"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.img
          className="pylarDimension"
          src="https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.1/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLjw_RealESRGAN_x4plus.jpeg"
          alt="Pylar AI"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        />
      </div>
      </main>
      <Footer />
    </div>
  );
}
