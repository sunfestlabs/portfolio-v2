import { AboutMe } from "@/components/about";
import { ContactMe } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Projects } from "@/components/projects";
import { Socials } from "@/components/layout/socials";
import { WorkHistory } from "@/components/work";
import Head from "next/head";
import Spacer from "@/components/design-system/spacer";
import cx from "classnames";
import style from "@/styles/home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Chris Nivera | Software Engineer</title>
        <meta
          name="description"
          content="Chris Nivera is an engineer who passionately builds innovative web experiences."
        />
        <meta property="og:title" content="Chris Nivera | Software Engineer" />
        <meta
          property="og:description"
          content="Chris Nivera is an engineer who passionately builds innovative web experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={cx(style.main, inter.className)}>
        <Navbar />
        <Spacer axis="vertical" size={64} />
        <Hero />
        <Spacer axis="vertical" size={64} />
        <AboutMe />
        <Spacer axis="vertical" size={192} />
        <WorkHistory />
        <Spacer axis="vertical" size={192} />
        <Projects />
        <Spacer axis="vertical" size={192} />
        <ContactMe />
        <Spacer axis="vertical" size={64} />
        <Socials />
      </main>
    </>
  );
}
