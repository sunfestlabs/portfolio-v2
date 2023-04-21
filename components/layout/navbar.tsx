import { Bitter, Roboto_Mono } from "next/font/google";
import { Button } from "../design-system/button";
import { HStack, VStack } from "../design-system/stack";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import cx from "classnames";
import style from "./navbar.module.scss";
import { BurgerButton } from "../design-system/burger";

const bitter = Bitter({ subsets: ["latin"] });

export function Navbar(): JSX.Element {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(true);
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

  // Hide the navbar if the user is scrolling down,
  // then show it again if they scroll up.
  useEffect((): (() => void) => {
    let prevScroll = window.scrollY;

    // TODO: debounce this
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
        [style.visible]: visible,
      })}
    >
      <HStack
        className={cx(style.navbar, {
          [style.visible]: visible,
          [style.shadow]: hasShadow && !burgerMenuOpen,
          [style.burgerOpen]: burgerMenuOpen,
        })}
        ref={navbarRef}
      >
        <div className={cx(bitter.className, style.logo)}>CTN</div>
        <div className={cx(style.desktopLinks, bitter.className)}>
          <Link
            href="#about"
            className={style.link}
            onClick={(e): void => scrollToSection(e, "about")}
          >
            About
          </Link>
          <Link
            href="#work"
            className={style.link}
            onClick={(e): void => scrollToSection(e, "work")}
          >
            Work
          </Link>
          <Link
            href="#projects"
            className={style.link}
            onClick={(e): void => scrollToSection(e, "projects")}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={style.link}
            onClick={(e): void => scrollToSection(e, "contact")}
          >
            Contact
          </Link>
          <Link href="/ChrisNiveraCVResume.pdf" className={style.link}>
            Resume
          </Link>
        </div>
        <div className={style.mobileHamburger}>
          <BurgerButton
            isOpen={burgerMenuOpen}
            setIsOpen={setBurgerMenuOpen}
            onClick={() => {
              setBurgerMenuOpen(!burgerMenuOpen);
            }}
          />
        </div>
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
  return (
    <VStack
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
        About
      </Link>
      <Link
        href="#work"
        className={style.link}
        onClick={(e): void => {
          scrollToSection(e, "work");
          setIsOpen(false);
        }}
      >
        Work
      </Link>
      <Link
        href="#projects"
        className={style.link}
        onClick={(e): void => {
          scrollToSection(e, "projects");
          setIsOpen(false);
        }}
      >
        Projects
      </Link>
      <Link
        href="#contact"
        className={style.link}
        onClick={(e): void => {
          scrollToSection(e, "contact");
          setIsOpen(false);
        }}
      >
        Contact
      </Link>
      <Link href="/ChrisNiveraCVResume.pdf" className={style.link}>
        Resume
      </Link>
    </VStack>
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
