import cx from "classnames";
import style from "./divider.module.scss";
import { HTMLProps } from "react";

export function Divider(props: HTMLProps<HTMLDivElement>): JSX.Element {
  return <div className={style.divider} {...props} />;
}
