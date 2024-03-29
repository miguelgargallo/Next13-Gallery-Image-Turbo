/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";
import { generateJSXMeshGradient } from "meshgrad";
import { YouTube } from "ui";

async function iframeYoutube() {
  const response = await fetch(
    "https://www.youtube.com/embed/tE0B0TxR8iY"
  );
  const data = await response.text();
  return data;
}

const ELEMENTS = 12;

export default function Home() {
  console.log("✅ Index page by Pylar AI, a Miguel Gargallo Startup");
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
            className="flex flex-col items-center justify-center text-center"
          >
            <p
              className="flex flex-row text-center text-2xl font-bold text-white"
            >
              Introducing PylarAI 3.0
              <p className="flex flex-row border-solid border-2 border-orange-500 rounded-full p-1 m-1 text-xl font-bold text-orange-500">
                New
              </p>

            </p>
            <div className="video">
              {/* iframe */}
              <div>
                <h1>My YouTube Video</h1>
                <YouTube videoId="iO_iWUNY3eM" />
              </div>
              <p
                className="text-center text-xl p-8 font-bold text-white"
              >
                Get ready to take your image editing game to the next level with PylarAI! 💥 Our revolutionary AI-powered tool allows you to create stunning images in just a few clicks. From removing unwanted objects to creating breathtaking composites, PylarAI has got you covered. Check out our latest video demo to see what it can do! 🎥 #PylarAI #ImageEditing #AI #Photography
              </p>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <p
              className="text-center text-2xl font-bold text-white"
            >
              PylarAI 2.0 Logistics and Supply Chain Exam
            </p>
            <div className="video">
              {/* iframe */}
              <div>
                <h1>My YouTube Video</h1>
                <YouTube videoId="tE0B0TxR8iY" />
              </div>
            </div>
            <p
              className="text-center text-xl py-8 font-bold text-white"
            >
              v1 is currently Available on Google Colab.
            </p>
            <p
              className="text-center text-xl font-bold text-white"
            >
              <div className="m-3 flex flex-col items-center justify-center">
                <button
                  className="m-2 hidden rounded-full py-3 px-4 text-xs font-bold text-black shadow-md hover:shadow-xl md:block"
                  style={generateJSXMeshGradient(ELEMENTS)}
                >
                  <a href="https://chat.pylar.org" target={"_blank"}
                    rel="noopener noreferrer">Chat PylarAI (GPT-4)</a>
                </button>
                <button className="rounded-xl py-2 px-4 font-bold text-white">
                  <a href="https://colab.research.google.com/drive/1odswULyZ_f1Mk48DSNRwdSd4HCw_Ebl8?usp=sharing">
                    Google Colab
                  </a>
                </button>
              </div>
            </p>
          </motion.div>
        </div>
        <div className="py-12">
          <h3 className="text-center text-2xl font-bold text-white">
            Our evolution from v1.4 to v1.5 to v2.0
          </h3>
          <div className="pylarDiv">
            <motion.img
              className="pylarDimension"
              src="https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.0/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLpA_RealESRGAN_x4plus.jpeg"
              alt="Earth by Stable Diffusion 1.4 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
            <motion.img
              className="pylarDimension"
              src="https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.1/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLjw_RealESRGAN_x4plus.jpeg"
              alt="Earth by Stable Diffusion 1.5 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            />
            <motion.img
              className="pylarDimension"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120422/00005-1833717168-Earth%20seen%20fr.png"
              alt="Earth by Stable Diffusion 2.0 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            />
          </div>
        </div>
        <div className="bg-yellow-600">
          <h3 className="text-center text-2xl font-bold text-black">
            Our latest advancements v2.1
          </h3>
          <h2 className="text-center text-2xl font-bold text-black">
            <button className="py-2 underline font-bold text-black ml-2">
              <a href="/collections/cats"
              >Discover our latest Collection</a>
            </button>
          </h2>
          <div className="pylarDiv">
            <a href="/collections/cats">
              <motion.img
                className="pylarDimension cursor-pointer"
                src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121822/5.png"
                alt="Earth by Stable Diffusion 1.4 and Pylar Prompt guidelines"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              />
            </a>
            <a href="/collections/cats">
              <motion.img
                className="pylarDimension cursor-pointer"
                src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121822/6.png"
                alt="Earth by Stable Diffusion 1.5 and Pylar Prompt guidelines"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
              /> </a>
            <a href="/collections/cats">
              <motion.img
                className="pylarDimension cursor-pointer"
                src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121822/7.png"
                alt="Earth by Stable Diffusion 2.0 and Pylar Prompt guidelines"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              /> </a>
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold text-white">
          <button className="py-2 underline font-bold text-white ml-2">
            <a href="/collections/box"
            >Discover Box Collection</a>
          </button>
        </h2>
        <div className="pylarDiv">
          <a href="/collections/box">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121622/1.png"
              alt="Earth by Stable Diffusion 1.4 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            /> </a>
          <a href="/collections/box">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121622/5.png"
              alt="Earth by Stable Diffusion 1.5 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
            /> </a>
          <a href="/collections/box">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121622/9.png"
              alt="Earth by Stable Diffusion 2.0 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
            /> </a>
        </div>
        <h2 className="text-center text-2xl font-bold text-white">
          <button className="py-2 underline font-bold text-white ml-2">
            <a href="/collections/human"
            >Discover Human Collection</a>
          </button>
        </h2>
        <div className="pylarDiv">
          <a href="/collections/human">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120622/12.png"
              alt="Earth by Stable Diffusion 1.4 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0 }}
            /> </a>
          <a href="/collections/human">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120622/13.png"
              alt="Earth by Stable Diffusion 1.5 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2 }}
            /> </a>
          <a href="/collections/human">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120622/14.png"
              alt="Earth by Stable Diffusion 2.0 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4 }}
            /></a>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <p
              className="text-center text-2xl font-bold text-white"
            >
              We provide images for your business or personal use.
            </p>
            <p
              className="text-center text-3xl font-bold text-white"
            >
              This will reduce costs and time to your business.
            </p>
            <p
              className="text-center text-xl font-bold text-white"
            >
              <div className="m-3 flex flex-col items-center justify-center">
                <button
                  className="m-3 rounded-full py-3 px-4 text-xl font-bold text-black shadow-md hover:shadow-xl md:block"
                  style={generateJSXMeshGradient(ELEMENTS)}
                >
                  <a href="mailto:sales@pylar.org" target={"_blank"}
                    rel="noopener noreferrer">Contact Sales Now 📧</a>
                </button>
              </div>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
