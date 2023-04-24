import { Bitter } from "next/font/google";
import { Button } from "./design-system/button";
import { HStack, VStack } from "./design-system/stack";
import { SectionPopInVariants } from "./design-system/animations";
import { SocialLinks } from "@/content/socials";
import { motion } from "framer-motion";
import Image from "next/image";
import Spacer from "./design-system/spacer";
import cx from "classnames";
import githubIcon from "@/public/github.svg";
import linkedinIcon from "@/public/linkedin.svg";
import style from "./contact.module.scss";
import twitterIcon from "@/public/twitter.svg";

const bitter = Bitter({ subsets: ["latin"] });

export function ContactMe(): JSX.Element {
  return (
    <motion.div
      variants={SectionPopInVariants}
      initial="hidden"
      whileInView="visible"
    >
      <VStack className={style.chatContainer} id="contact">
        <div className={cx(style.title, bitter.className)}>
          Let&apos;s chat!
        </div>
        <Spacer axis="vertical" size={12} />
        <div className={style.snippet}>
          Although I&apos;m not actively seeking new opportunities at the
          moment, I&apos;m always happy to hear from anyone who&apos;s
          interested in my work. If you have a question, project idea, or just
          want to say hi, feel free to drop me a line!
        </div>
        <Spacer axis="vertical" size={36} />
        <a href={"mailto:christopher.nivera@gmail.com"} className={style.cta}>
          <Button className={style.button}>Connect With Me</Button>
        </a>
        <Spacer axis="vertical" size={36} />
        <HStack className={style.socials}>
          <a href={SocialLinks.Github} className={style.icon}>
            <Image src={githubIcon} alt={"GitHub"} />
          </a>
          <a href={SocialLinks.Twitter} className={style.icon}>
            <Image src={twitterIcon} alt={"Twitter"} />
          </a>
          <a href={SocialLinks.LinkedIn} className={style.icon}>
            <Image src={linkedinIcon} alt={"LinkedIn"} />
          </a>
        </HStack>
      </VStack>
    </motion.div>
  );
}
