import { Bitter, Roboto_Mono } from "next/font/google";
import { Button } from "./design-system/button";
import { Divider } from "./design-system/divider";
import { HStack, VStack } from "./design-system/stack";
import {
  SectionPopInVariants,
  useAnimateOnViewOnce,
} from "./design-system/animations";
import { SectionTitle } from "./design-system/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Spacer from "./design-system/spacer";
import cx from "classnames";
import nlpExtensionData from "@/content/projects/nlp-twitch-plugin.json";
import stopwatchData from "@/content/projects/stopwatch.json";
import strokeData from "@/content/projects/dl-mechanical-thrombectomy.json";
import style from "./projects.module.scss";

const bitter = Bitter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

// Schema typing the JSON data that we store project info as.
interface ProjectData {
  name: string;
  snippet: string;
  url: string;
  thumbnail: string;
  technologies: string[];
}

export function Projects(): JSX.Element {
  const stopwatch = stopwatchData as ProjectData;
  const nlpExtension = nlpExtensionData as ProjectData;
  const stroke = strokeData as ProjectData;
  const titleRef = useRef<HTMLDivElement>(null);
  const animationProps = useAnimateOnViewOnce({ ref: titleRef });

  return (
    <div className={style.projectsContainer} id="projects">
      <motion.div {...animationProps} ref={titleRef}>
        <SectionTitle>Personal Projects</SectionTitle>
        <Spacer axis="vertical" size={32} />
        <Divider />
      </motion.div>
      <Spacer axis="vertical" size={48} />
      <Project project={stopwatch} />
      <Spacer axis="vertical" size={48} />
      <Project project={nlpExtension} />
      <Spacer axis="vertical" size={48} />
      <Project project={stroke} />
    </div>
  );
}

function Project(props: { project: ProjectData }): JSX.Element {
  const { project } = props;
  const ref = useRef<HTMLDivElement>(null);
  const animationProps = useAnimateOnViewOnce({ ref });

  return (
    <motion.div {...animationProps} ref={ref}>
      <div className={style.project}>
        <Image
          src={project.thumbnail}
          alt={project.name}
          className={style.thumbnail}
          width={385}
          height={235}
        />
        <VStack className={style.info}>
          <div className={cx(style.title, bitter.className)}>
            {project.name}
          </div>
          <Spacer axis="vertical" size={24} />
          <div className={style.snippet}>{project.snippet}</div>
          <Spacer axis="vertical" size={36} />
          <a href={project.url} target="_blank" className={style.cta}>
            <Button>Learn more</Button>
          </a>
          <Spacer axis="vertical" size={36} />
          <HStack className={style.technologies}>
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className={cx(robotoMono.className, style.technology)}
              >
                {tech}
              </div>
            ))}
          </HStack>
        </VStack>
      </div>
      <Spacer axis="vertical" size={48} />
      <hr className={style.rule} />
    </motion.div>
  );
}
