import { Divider } from "./design-system/divider";
import { SectionTitle } from "./design-system/section-title";
import { useState } from "react";
import Spacer from "./design-system/spacer";
import cx from "classnames";
import style from "./work.module.scss";

enum Company {
  Medinas = "Medinas",
  EG = "EvilGeniuses",
  Neeva = "Neeva",
}

export function WorkHistory(): JSX.Element {
  const [activeCompany, setActiveCompany] = useState<Company>(Company.Medinas);
  return (
    <div className={style.workContainer}>
      <SectionTitle>Work</SectionTitle>
      <Spacer axis="vertical" size={32} />
      <Divider />
      <WorkSelector
        activeCompany={activeCompany}
        setActiveCompany={setActiveCompany}
      />
    </div>
  );
}

interface InnerProps {
  activeCompany: Company;
  setActiveCompany: (company: Company) => void;
}

function WorkSelector(props: InnerProps): JSX.Element {
  const { activeCompany, setActiveCompany } = props;

  return (
    <div className={style.workSelector}>
      <div
        className={cx(style.company, {
          [style.active]: activeCompany === Company.Neeva,
        })}
        onClick={(): void => setActiveCompany(Company.Neeva)}
      >
        Neeva
      </div>
      <div
        className={cx(style.company, {
          [style.active]: activeCompany === Company.EG,
        })}
        onClick={(): void => setActiveCompany(Company.EG)}
      >
        EG
      </div>
      <div
        className={cx(style.company, {
          [style.active]: activeCompany === Company.Medinas,
        })}
        onClick={(): void => setActiveCompany(Company.Medinas)}
      >
        Medinas
      </div>
    </div>
  );
}
