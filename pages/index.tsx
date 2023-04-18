import Head from "next/head";
import cx from "classnames";
import style from "@/styles/home.module.scss";
import { Hero } from "@/components/hero";
import { ScrollAffordance } from "@/components/scroll";
import { Inter } from "next/font/google";
import { AboutMe } from "@/components/about";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Nivera | Software Engineer</title>
        <meta
          name="description"
          content="I'm an engineer building innovative web experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={cx(style.main, inter.className)}>
        <Hero />
        <ScrollAffordance />
        <AboutMe />
      </main>
    </>
  );
}
