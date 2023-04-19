import { Bitter } from "next/font/google";
import Image from "next/image";
import cx from "classnames";
import portrait from "@/public/portrait.png";
import style from "./hero.module.scss";

const bitter = Bitter({ subsets: ["latin"] });

export function Hero(): JSX.Element {
  return (
    <div className={style.heroContainer}>
      <div className={cx(style.text, bitter.className)}>
        <div className={style.greeting}>Hi there! My name is</div>
        <div className={style.name}>
          Chris Nivera<span className={style.punctuation}>.</span>
        </div>
        <div className={style.subtitle}>I craft user experiences.</div>
        <div className={style.description}>
          I&apos;m a software engineer currently building the next evolution of
          search at Neeva.
        </div>
      </div>
      <div className={style.portrait}>
        <Image src={portrait} alt="Portrait image" className={style.image} />
      </div>
    </div>
  );
}
