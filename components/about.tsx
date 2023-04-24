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

export function AboutMe(): JSX.Element {
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
            <p>
              Hi! I&apos;m Chris Nivera, a software engineer with a passion for
              making approachable and effective user interfaces. I first got
              interested in computer science thanks to my love for gaming, much
              to my parents&apos; initial chagrin. Nevertheless, the countless
              hours I&apos;ve spent glued to all sorts of games fuel my desire
              to build memorable experiences on the web.
            </p>
            <p>
              Since then, I&apos;ve had the opportunity to craft some awesome
              products at some amazing organizations, including Medinas (a
              healthcare startup) and Evil Geniuses (an esports organization).
              Currently, I&apos;m a full stack engineer at Neeva, where I&apos;m
              excited to push the boundaries of what it means to be a search
              engine.
            </p>
            <p>Recently, I&apos;ve been building with the following tools:</p>
            <Technologies />
          </VStack>
          <Image src={avatar} alt="animated avatar" className={style.avatar} />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Technologies(): JSX.Element {
  return (
    <div className={cx(style.tech, robotoMono.className)}>
      <div className={style.tool}>JavaScript (ES6+)</div>
      <div className={style.tool}>TypeScript</div>
      <div className={style.tool}>React</div>
      <div className={style.tool}>Next.js</div>
      <div className={style.tool}>Golang</div>
      <div className={style.tool}>GraphQL</div>
    </div>
  );
}
