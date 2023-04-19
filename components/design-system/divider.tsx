import { HTMLProps } from "react";
import cx from "classnames";
import style from "./divider.module.scss";

export function Divider(props: HTMLProps<HTMLDivElement>): JSX.Element {
  return <div className={style.divider} {...props} />;
}
