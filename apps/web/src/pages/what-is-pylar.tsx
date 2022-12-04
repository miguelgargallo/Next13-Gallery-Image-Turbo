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

      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="text-white text-4xl text-center m-4 px-8 py-8"
      >
        Pylar could stand for Prompt Yielding Lean and Agile Rapidness when used to
        define prompt engineering. This could refer to the use of prompt engineering
        methods to quickly and efficiently produce results that yield benefits or
        advantages, and that are based on lean and agile principles that focus on
        delivering value quickly and iteratively. By combining these capabilities,
        Pylar prompt engineering methods can help organizations respond quickly and
        effectively to changing needs or opportunities, and produce results that are
        valuable and beneficial.
      </motion.p>








      </main>
      <Footer />
    </div>
  );
}
