import { AboutMe } from "@/components/about";
import {
  AboutMeContent,
  ContactContent,
  ProjectContent,
  WorkContent,
} from "@/.contentlayer/generated";
import { ContactMe } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Projects } from "@/components/projects";
import { Socials } from "@/components/layout/socials";
import { WorkHistory } from "@/components/work";
import {
  allAboutMeContents,
  allContactContents,
  allProjectContents,
  allWorkContents,
} from "@/.contentlayer/generated";
import Head from "next/head";
import Spacer from "@/components/design-system/spacer";
import cx from "classnames";
import style from "@/styles/home.module.scss";

const inter = Inter({ subsets: ["latin"] });

interface HomepageProps {
  aboutMe: AboutMeContent;
  work: WorkContent[];
  projects: ProjectContent[];
  contact: ContactContent;
}

export default function Home(props: HomepageProps): JSX.Element {
  const { aboutMe, work, projects, contact } = props;
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
        <AboutMe content={aboutMe} />
        <Spacer axis="vertical" size={192} />
        <WorkHistory content={work} />
        <Spacer axis="vertical" size={192} />
        <Projects content={projects} />
        <Spacer axis="vertical" size={192} />
        <ContactMe content={contact} />
        <Spacer axis="vertical" size={64} />
        <Socials />
      </main>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: HomepageProps }> {
  return {
    props: {
      aboutMe: allAboutMeContents[0],
      work: allWorkContents,
      projects: allProjectContents,
      contact: allContactContents[0],
    },
  };
}
