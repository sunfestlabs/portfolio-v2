import { AboutMe } from "@/components/about";
import { AnimatePresence, motion } from "framer-motion";
import { ContactMe } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Projects } from "@/components/projects";
import { Socials } from "@/components/layout/socials";
import { WorkHistory } from "@/components/work";
import { useEffect, useState } from "react";
import Head from "next/head";
import Loading from "@/components/loading";
import Spacer from "@/components/design-system/spacer";
import cx from "classnames";
import style from "@/styles/home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Play the loading animation for 1 second.
  useEffect((): (() => void) => {
    const timeout = setTimeout((): void => {
      setIsLoading(false);
    }, 1250);

    return (): void => {
      clearTimeout(timeout);
    };
  }, []);

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
      <AnimatePresence>
        {isLoading ? <Loading key="loading" /> : <PageContent key="content" />}
      </AnimatePresence>
    </>
  );
}

function PageContent(): JSX.Element {
  return (
    <motion.div className={cx(style.main, inter.className)}>
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
    </motion.div>
  );
}
