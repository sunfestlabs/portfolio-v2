import { Divider } from "./design-system/divider";
import { Fragment, useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { SectionTitle } from "./design-system/section-title";
import { VStack } from "./design-system/stack";
import Spacer from "./design-system/spacer";
import cx from "classnames";
import egData from "@/content/work/evil-geniuses.json";
import medinasData from "@/content/work/medinas.json";
import neevaData from "@/content/work/neeva.json";
import style from "./work.module.scss";

export enum Company {
  Medinas = "Medinas",
  EG = "Evil Geniuses",
  Neeva = "Neeva",
}

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

// List of companies to display, in order.
// TODO: there's probably a better way to track this?
const companies = [Company.Neeva, Company.EG, Company.Medinas];

// Schema describing the JSON fields for each company.
// These should map 1:1 to the fields in each company's JSON file.
export interface WorkSummary {
  company: string;
  startDate: string;
  endDate: string;
  role: string;
  summary: string[];
}

const defaultWorkSummary: WorkSummary = {
  company: "",
  startDate: "",
  endDate: "",
  role: "",
  summary: [],
};

export function WorkHistory(): JSX.Element {
  const [activeCompany, setActiveCompany] = useState<Company>(Company.Neeva);
  const activeCompanySummary = mapActiveCompanyToDescription(activeCompany);

  return (
    <div className={style.workContainer}>
      <SectionTitle>Work</SectionTitle>
      <Spacer axis="vertical" size={32} />
      <Divider />
      <Spacer axis="vertical" size={32} />
      <div className={style.content}>
        <div className={style.selectorContainer}>
          <WorkSelector
            activeCompany={activeCompany}
            setActiveCompany={setActiveCompany}
          />
        </div>
        <WorkDescription workSummary={activeCompanySummary} />
      </div>
    </div>
  );
}

interface InnerProps {
  activeCompany: Company;
  setActiveCompany: (company: Company) => void;
}

// Component for rendering the list of companies I've worked at.
function WorkSelector(props: InnerProps): JSX.Element {
  const { activeCompany, setActiveCompany } = props;
  const [activeCompanyIdx, setActiveCompanyIdx] = useState<number>(0);

  return (
    <div className={style.workSelector}>
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

interface WorkDescriptionProps {
  workSummary: WorkSummary;
}

// Component to render my responsibilities at a given company.
function WorkDescription(props: WorkDescriptionProps): JSX.Element {
  const { workSummary } = props;

  // apply animation every time this component re-renders
  return (
    <VStack key={workSummary.company} className={style.workDescription}>
      <div className={style.jobTitle}>
        {workSummary.role}{" "}
        <span className={style.companyName}>@ {workSummary.company}</span>
      </div>
      <div className={cx(style.dates, robotoMono.className)}>
        {workSummary.startDate} - {workSummary.endDate}
      </div>
      <Spacer axis="vertical" size={16} />
      <ul>
        {workSummary.summary.map((summary, idx) => {
          return (
            <Fragment key={idx}>
              <li key={`${summary}-${idx}`} className={style.responsibility}>
                {summary}
              </li>
              <Spacer key={`spacer-${idx}`} axis="vertical" size={4} />
            </Fragment>
          );
        })}
      </ul>
    </VStack>
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

// Given the currently selected company, return the corresponding work summary.
// Eventually we'll be using a CMS for this stuff, so hopefully we won't need such convenience functions.
function mapActiveCompanyToDescription(company: Company): WorkSummary {
  switch (company) {
    case Company.Medinas:
      return medinasData as WorkSummary;
    case Company.EG:
      return egData as WorkSummary;
    case Company.Neeva:
      return neevaData as WorkSummary;
    default:
      return defaultWorkSummary;
  }
}
