/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { Letter } from "ui";
import { Headx } from "ui";

const ELEMENTS = 12;

export default function Home() {
  console.log("✅ Investors Relations page by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Headx />     
      <Menu />
      <main>
        <TitlePylar />
        <div>
          <Letter />
        </div>
      </main>
      <Footer />
    </div>
  );
}
