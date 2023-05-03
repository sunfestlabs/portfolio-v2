import { Bitter } from "next/font/google";
import { Button } from "./design-system/button";
import { ContactContent } from "@/.contentlayer/generated";
import { HStack, VStack } from "./design-system/stack";
import { SocialLinks } from "@/content/socials";
import { motion } from "framer-motion";
import { useAnimateOnViewOnce } from "./design-system/animations";
import { useRef } from "react";
import Image from "next/image";
import Spacer from "./design-system/spacer";
import cx from "classnames";
import githubIcon from "@/public/github.svg";
import linkedinIcon from "@/public/linkedin.svg";
import style from "./contact.module.scss";
import twitterIcon from "@/public/twitter.svg";

const bitter = Bitter({ subsets: ["latin"] });

interface ContactProps {
  content: ContactContent;
}

export function ContactMe(props: ContactProps): JSX.Element {
  const { content } = props;
  const ref = useRef<HTMLDivElement>(null);
  const animationProps = useAnimateOnViewOnce({ ref });
  return (
    <motion.div {...animationProps} ref={ref}>
      <VStack className={style.chatContainer} id="contact">
        <div className={cx(style.title, bitter.className)}>{content.title}</div>
        <Spacer axis="vertical" size={12} />
        <div
          className={style.snippet}
          dangerouslySetInnerHTML={{ __html: content.body.html }}
        ></div>
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
