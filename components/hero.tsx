import { Bitter } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import cx from "classnames";
import portrait from "@/public/portrait.png";
import style from "./hero.module.scss";

const bitter = Bitter({ subsets: ["latin"] });

export function Hero(): JSX.Element {
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.25,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "tween",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.2,
      },
    },
  };

  return (
    <motion.div className={style.heroContainer}>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        className={cx(style.text, bitter.className)}
      >
        <motion.div variants={childVariants} className={style.greeting}>
          Hi there! My name is
        </motion.div>
        <motion.div variants={childVariants} className={style.name}>
          Chris Nivera<span className={style.punctuation}>.</span>
        </motion.div>
        <motion.div variants={childVariants} className={style.subtitle}>
          I craft user experiences.
        </motion.div>
        <motion.div variants={childVariants} className={style.description}>
          I&apos;m a software engineer currently building the next evolution of
          search at Neeva.
        </motion.div>
      </motion.div>
      <motion.div variants={imageVariants} initial="hidden" animate="visible">
        <Image src={portrait} alt="Portrait image" className={style.image} />
      </motion.div>
    </motion.div>
  );
}
