import { HTMLProps } from "react";
import cx from "classnames";
import style from "./button.module.scss";

export function Button(props: HTMLProps<HTMLDivElement>): JSX.Element {
  const { className, children, ...rest } = props;
  return (
    <div className={cx(style.button, className)} {...rest}>
      {children}
    </div>
  );
}
