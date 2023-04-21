import { on } from "events";
import style from "./burger.module.scss";
import cx from "classnames";
import { useState } from "react";

interface BurgerButtonProps {
  onClick: () => void;
}

// Component representing a hamburger button. Note that this is agnostic of the
// menu it opens.
export function BurgerButton(props: BurgerButtonProps): JSX.Element {
  const { onClick } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <button
      className={cx(style.burgerMenu, {
        [style.burgerActive]: isOpen,
      })}
      onClick={(): void => {
        setIsOpen(!isOpen);
        onClick();
      }}
    >
      <span className={style.burgerBox}>
        <span className={style.burgerInner}></span>
      </span>
    </button>
  );
}
