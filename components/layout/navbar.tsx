import { Bitter } from "next/font/google";
import { BurgerButton } from "../design-system/burger";
import { HStack, VStack } from "../design-system/stack";
import { Variants, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import cx from "classnames";
import style from "./navbar.module.scss";

const bitter = Bitter({ subsets: ["latin"] });

export function Navbar(): JSX.Element {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(true);
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

  // Framer Motion animation constants
  const animationVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
      },
    },
  };

  // Hide the navbar if the user is scrolling down,
  // then show it again if they scroll up.
  useEffect((): (() => void) => {
    let prevScroll = window.scrollY;

    function handleScroll(): void {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        // User is at the top of the page, so show the navbar but no box shadow.
        setVisible(true);
        setHasShadow(false);
      } else if (prevScroll > currentScroll) {
        // User is scrolling upwards, so show the navbar with a box shadow.
        setVisible(true);
        setHasShadow(true);
      } else {
        // User is scrolling downwards, so hide the navbar.
        setVisible(false);
        // Add a shadow if the user has scrolled past the initial viewport.
        if (currentScroll > window.innerHeight) {
          setHasShadow(true);
        }
      }
      prevScroll = currentScroll;
    }
    window.addEventListener("scroll", handleScroll);

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <VStack
      className={cx(style.navbarContainer, {
        [style.visible]: visible || burgerMenuOpen,
      })}
    >
      <HStack
        className={cx(style.navbar, {
          [style.shadow]: hasShadow && !burgerMenuOpen,
          [style.burgerOpen]: burgerMenuOpen,
        })}
        ref={navbarRef}
      >
        <motion.div
          className={cx(bitter.className, style.logo)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          CTN
        </motion.div>
        <motion.div
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          className={cx(style.desktopLinks, bitter.className)}
        >
          <motion.div variants={childVariants}>
            <Link
              href="#about"
              className={style.link}
              onClick={(e): void => scrollToSection(e, "about")}
            >
              About
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link
              href="#work"
              className={style.link}
              onClick={(e): void => scrollToSection(e, "work")}
            >
              Work
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link
              href="#projects"
              className={style.link}
              onClick={(e): void => scrollToSection(e, "projects")}
            >
              Projects
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link
              href="#contact"
              className={style.link}
              onClick={(e): void => scrollToSection(e, "contact")}
            >
              Contact
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link href="/ChrisNiveraCVResume.pdf" className={style.link}>
              Resume
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={style.mobileHamburger}
        >
          <BurgerButton
            isOpen={burgerMenuOpen}
            setIsOpen={setBurgerMenuOpen}
            onClick={(): void => {
              setBurgerMenuOpen(!burgerMenuOpen);
            }}
          />
        </motion.div>
      </HStack>
      <BurgerMenu isOpen={burgerMenuOpen} setIsOpen={setBurgerMenuOpen} />
    </VStack>
  );
}

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// Burger menu, which is only shown on mobile screen sizes (controlled by media query)
export function BurgerMenu(props: BurgerMenuProps): JSX.Element {
  const { isOpen, setIsOpen } = props;
  const animationVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      whileInView={isOpen ? "visible" : "hidden"} // also need to check that the burger menu is open and visible, since it's technically always "in view"
      className={cx(style.burgerMenu, bitter.className, {
        [style.visible]: isOpen,
      })}
    >
      <Link
        href="#about"
        className={style.link}
        onClick={(e): void => {
          scrollToSection(e, "about");
          setIsOpen(false);
        }}
      >
        <motion.div variants={childVariants}>About</motion.div>
      </Link>
      <Link
        href="#work"
        className={style.link}
        onClick={(e): void => {
          scrollToSection(e, "work");
          setIsOpen(false);
        }}
      >
        <motion.div variants={childVariants}>Work</motion.div>
      </Link>
      <Link
        href="#projects"
        className={style.link}
        onClick={(e): void => {
          scrollToSection(e, "projects");
          setIsOpen(false);
        }}
      >
        <motion.div variants={childVariants}>Projects</motion.div>
      </Link>
      <Link
        href="#contact"
        className={style.link}
        onClick={(e): void => {
          scrollToSection(e, "contact");
          setIsOpen(false);
        }}
      >
        <motion.div variants={childVariants}>Contact</motion.div>
      </Link>
      <Link href="/ChrisNiveraCVResume.pdf" className={style.link}>
        <motion.div variants={childVariants}>Resume</motion.div>
      </Link>
    </motion.div>
  );
}

// function for smooth scrolling, to override the default jump-to-section behavior
function scrollToSection(e: React.MouseEvent, id: string): void {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
