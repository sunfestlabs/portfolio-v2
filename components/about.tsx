import { AboutMeContent } from "@/.contentlayer/generated";
import { Divider } from "./design-system/divider";
import { Roboto_Mono } from "next/font/google";
import { ScrollAffordance } from "./scroll";
import { SectionTitle } from "./design-system/section-title";
import { VStack } from "./design-system/stack";
import { Variants, motion } from "framer-motion";
import { useAnimateOnViewOnce } from "./design-system/animations";
import { useRef } from "react";
import Image from "next/image";
import Spacer from "./design-system/spacer";
import avatar from "@/public/avatar.gif";
import cx from "classnames";
import style from "./about.module.scss";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

interface AboutMeProps {
  content: AboutMeContent;
}

export function AboutMe(props: AboutMeProps): JSX.Element {
  const { content } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const animationProps = useAnimateOnViewOnce({ ref: containerRef });

  const scrollAffordanceVariants: Variants = {
    hidden: { opacity: 0, y: 90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 2.75,
      },
    },
  };

  return (
    <motion.div className={style.container}>
      {/* little janky, but we put the scroll affordance here so it lines up with the section title */}
      <motion.div
        variants={scrollAffordanceVariants}
        initial="hidden"
        animate="visible"
        className={style.scroll}
      >
        <ScrollAffordance />
      </motion.div>
      <Spacer axis="vertical" size={64} />
      <motion.div ref={containerRef} {...animationProps}>
        <SectionTitle id="about">About Me</SectionTitle>
        <Spacer axis="vertical" size={24} />
        <Divider />
        <Spacer axis="vertical" size={24} />
        <div className={style.about}>
          <VStack className={style.description} gap="24px">
            {/* bio paragraphs */}
            <VStack
              gap="24px"
              dangerouslySetInnerHTML={{ __html: content.body.html }}
            />
            {/* tech stack list */}
            <Technologies technologies={content.technologies} />
          </VStack>
          <Image src={avatar} alt="animated avatar" className={style.avatar} />
        </div>
      </motion.div>
    </motion.div>
  );
}

interface TechnologiesProps {
  technologies: string[];
}

function Technologies(props: TechnologiesProps): JSX.Element {
  const { technologies } = props;
  return (
    <div className={cx(style.tech, robotoMono.className)}>
      {technologies.map((tech, i) => (
        <div key={i} className={style.tool}>
          {tech}
        </div>
      ))}
    </div>
  );
}
