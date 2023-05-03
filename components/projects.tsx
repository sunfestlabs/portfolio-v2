import { Bitter, Roboto_Mono } from "next/font/google";
import { Button } from "./design-system/button";
import { Divider } from "./design-system/divider";
import { HStack, VStack } from "./design-system/stack";
import { ProjectContent } from "@/.contentlayer/generated";
import { SectionTitle } from "./design-system/section-title";
import { motion } from "framer-motion";
import { useAnimateOnViewOnce } from "./design-system/animations";
import { useRef } from "react";
import Image from "next/image";
import Spacer from "./design-system/spacer";
import cx from "classnames";
import style from "./projects.module.scss";

const bitter = Bitter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

// Enum that maps to the project name in the .contentlayer folder.
enum ProjectID {
  Stopwatch = "Stopwatch",
  NLPTwitchPlugin = "AI Twitch Chat Filter",
  MLStroke = "A Sixth Sense for Stroke",
}

interface ProjectsProps {
  content: ProjectContent[];
}

export function Projects(props: ProjectsProps): JSX.Element {
  const { content } = props;
  const titleRef = useRef<HTMLDivElement>(null);
  const animationProps = useAnimateOnViewOnce({ ref: titleRef });
  const stopwatch =
    content.find((project) => project.name === ProjectID.Stopwatch) ??
    content[0];
  const nlpExtension =
    content.find((project) => project.name === ProjectID.NLPTwitchPlugin) ??
    content[0];
  const stroke =
    content.find((project) => project.name === ProjectID.MLStroke) ??
    content[0];

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

function Project(props: { project: ProjectContent }): JSX.Element {
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
