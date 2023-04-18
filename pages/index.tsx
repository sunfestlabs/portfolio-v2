import Head from "next/head";
import style from "@/styles/home.module.scss";
import { Hero } from "@/components/hero";

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
      <main className={style.main}>
        <Hero />
      </main>
    </>
  );
}
