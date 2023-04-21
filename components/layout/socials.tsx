import { VStack } from "../design-system/stack";
import Image from "next/image";
import githubIcon from "@/public/github.svg";
import linkedinIcon from "@/public/linkedin.svg";
import style from "./socials.module.scss";
import twitterIcon from "@/public/twitter.svg";

export function Socials(): JSX.Element {
  return (
    <VStack className={style.socials}>
      <a href="https://github.com/sunfestlabs">
        <Image src={githubIcon} alt={"GitHub"} className={style.icon} />
      </a>
      <a href="https://linkedin.com/christopher-nivera">
        <Image src={linkedinIcon} alt={"LinkedIn"} className={style.icon} />
      </a>
      <a href="https://twitter.com/nivera_">
        <Image src={twitterIcon} alt={"Twitter"} className={style.icon} />
      </a>
      <div className={style.verticalRule} />
    </VStack>
  );
}
