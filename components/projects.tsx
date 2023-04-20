import { Button } from "./design-system/button";
import { Divider } from "./design-system/divider";
import { HStack, VStack } from "./design-system/stack";
import { Roboto_Mono } from "next/font/google";
import { SectionTitle } from "./design-system/section-title";
import Image from "next/image";
import cx from "classnames";
import nlpExtensionData from "@/content/projects/nlp-twitch-plugin.json";
import stopwatchData from "@/content/projects/stopwatch.json";
import strokeData from "@/content/projects/dl-mechanical-thrombectomy.json";
import style from "./projects.module.scss";

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
  return (
    <div className={style.projectsContainer}>
      <SectionTitle>Personal Projects</SectionTitle>
      <Divider />
      <Project project={stopwatch} />
      <Project project={nlpExtension} />
      <Project project={stroke} />
    </div>
  );
}

function Project(props: { project: ProjectData }): JSX.Element {
  const { project } = props;
  return (
    <div className={style.project}>
      <Image
        src={project.thumbnail}
        alt={project.name}
        className={style.thumbnail}
        width={365}
        height={235}
      />
      <VStack className={style.info}>
        <div className={style.title}>{project.name}</div>
        <div className={style.snippet}>{project.snippet}</div>
        <a href={project.url}>
          <Button>Learn more</Button>
        </a>
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
  );
}
