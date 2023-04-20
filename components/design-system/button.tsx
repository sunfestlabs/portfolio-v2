import { HTMLProps } from "react";
import { Roboto_Mono } from "next/font/google";
import cx from "classnames";
import style from "./button.module.scss";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export function Button(props: HTMLProps<HTMLDivElement>): JSX.Element {
  const { className, children, ...rest } = props;
  return (
    <div
      className={cx(style.button, robotoMono.className, className)}
      {...rest}
    >
      {children}
    </div>
  );
}
