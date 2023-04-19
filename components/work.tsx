import { Divider } from "./design-system/divider";
import { Roboto_Mono } from "next/font/google";
import { SectionTitle } from "./design-system/section-title";
import { useEffect, useState } from "react";
import Spacer from "./design-system/spacer";
import cx from "classnames";
import style from "./work.module.scss";

enum Company {
  Medinas = "Medinas",
  EG = "Evil Geniuses",
  Neeva = "Neeva",
}

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

// List of companies to display, in order.
// TODO: there's probably a better way to track this?
const companies = [Company.Neeva, Company.EG, Company.Medinas];

export function WorkHistory(): JSX.Element {
  const [activeCompany, setActiveCompany] = useState<Company>(Company.Medinas);
  return (
    <div className={style.workContainer}>
      <SectionTitle>Work</SectionTitle>
      <Spacer axis="vertical" size={32} />
      <Divider />
      <Spacer axis="vertical" size={32} />
      <div className={style.selectorContainer}>
        <WorkSelector
          activeCompany={activeCompany}
          setActiveCompany={setActiveCompany}
        />
      </div>
    </div>
  );
}

interface InnerProps {
  activeCompany: Company;
  setActiveCompany: (company: Company) => void;
}

function WorkSelector(props: InnerProps): JSX.Element {
  const { activeCompany, setActiveCompany } = props;
  const [activeCompanyIdx, setActiveCompanyIdx] = useState<number>(0);

  return (
    <div className={style.workSelector}>
      {/* render all companies in the companies list */}
      {companies.map((company, idx) => {
        return (
          <div
            key={`${company}-${idx}`}
            className={cx(style.company, robotoMono.className, {
              [style.active]: activeCompany === company,
            })}
            onClick={(): void => {
              setActiveCompany(company);
              setActiveCompanyIdx(idx);
            }}
          >
            {company}
          </div>
        );
      })}
      <Highlight activeCompanyIdx={activeCompanyIdx} />
    </div>
  );
}

interface HighlightProps {
  activeCompanyIdx: number;
}

// Component representing the small highlight strip that denotes the currently active work selection.
// Using a separate component instead of CSS borders in order to animate its motion.

function Highlight(props: HighlightProps): JSX.Element {
  const { activeCompanyIdx } = props;

  // Set the --active-company-index CSS variable to the index of the currently active company.
  // This is used to animate the highlight strip.
  useEffect((): void => {
    document.documentElement.style.setProperty(
      "--active-company-idx",
      `${activeCompanyIdx}`
    );
  }, [activeCompanyIdx]);

  return <div className={style.highlight} />;
}
