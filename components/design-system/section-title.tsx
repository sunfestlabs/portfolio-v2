import { Bitter } from "next/font/google";
import { HTMLProps } from "react";
import cx from "classnames";
import style from "./section-title.module.scss";

const bitter = Bitter({ subsets: ["latin"] });

export function SectionTitle(
  props: HTMLProps<HTMLHeadingElement>
): JSX.Element {
  return (
    <h2 className={cx(style.title, bitter.className)} {...props}>
      {props.children}
    </h2>
  );
}
