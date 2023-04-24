import cx from "classnames";
import style from "./burger.module.scss";

interface BurgerButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClick: () => void;
}

// Component representing a hamburger button. Note that this is agnostic of the
// menu it opens.
export function BurgerButton(props: BurgerButtonProps): JSX.Element {
  const { isOpen, setIsOpen, onClick } = props;

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
