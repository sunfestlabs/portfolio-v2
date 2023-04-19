import { useEffect, useRef, useState } from "react";
import cx from "classnames";
import style from "./scroll.module.scss";

interface ScrollAffordanceProps {
  className?: string;
}

export function ScrollAffordance(props: ScrollAffordanceProps): JSX.Element {
  const { className } = props;
  const lineRef = useRef<HTMLDivElement>(null);
  // State used to reapply the animation class, which will restart the jumping letters animation.
  const [restartAnimation, setRestartAnimation] = useState(true);

  // Shorten the vertical line depending on the current scroll position.
  useEffect((): (() => void) => {
    function handleScroll() {
      const minHeight = 400;
      const maxHeight = 500;
      // determines the rate at which scrolling on the page changes the height.
      // the higher the number, the faster the change (i.e. need to scroll less to change the height)
      const speed = 0.6;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height = Math.max(minHeight, maxHeight - speed * scrollTop);
      if (lineRef.current) {
        lineRef.current.style.height = `${height}px`;
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply the jumping animation to the text every 4 seconds.
  useEffect((): (() => void) => {
    const interval = setInterval((): void => {
      setRestartAnimation((prev) => !prev);
    }, 3000);
    return (): void => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={cx(style.container, className)}>
      <p
        className={cx(style.scrollText, { [style.jumping]: restartAnimation })}
      >
        <span>S</span>
        <span>C</span>
        <span>R</span>
        <span>O</span>
        <span>L</span>
        <span>L</span>
      </p>
      <div className={style.line} ref={lineRef} />
    </div>
  );
}
