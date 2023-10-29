import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import pfp from "../public/bil.jpeg";
import logo from "../public/logo.png";
import poster from "../public/poster.jpg";
import apps from "../public/apps.png";
import code from "../public/code.png";
import design from "../public/design.png";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>danialnbl Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between flex-col items-end">
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-black dark:text-white md:text-xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="CV_DanialNabil_01123138061.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 pt-0">
            <h2 className="text-5xl py-2 text-teal-300 font-medium md:text-6xl">
              Danial Nabil
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-black dark:text-white">
              Programmer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              ダニエル・Hi! I&apos;m a student at University Malaysia Pahang.
              Currently taking Bachelor of Computer Science (Software
              Engineering).
            </p>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <a href="https://twitter.com/danialnbl">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/mohamad-danial-nabil-mohamad-yusof-0735861bb">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/danialnbl">
                <AiFillGithub />
              </a>
            </div>
            {/* <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-10 overflow-hidden">
              <Image src={pfp} layout="fill"/>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
