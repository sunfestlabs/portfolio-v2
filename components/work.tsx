import { Divider } from "./design-system/divider";
import { Fragment, useEffect, useRef, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { SectionTitle } from "./design-system/section-title";
import { VStack } from "./design-system/stack";
import { WorkContent } from "@/.contentlayer/generated";
import { motion } from "framer-motion";
import { useAnimateOnViewOnce } from "./design-system/animations";
import Spacer from "./design-system/spacer";
import cx from "classnames";
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

interface WorkHistoryProps {
  content: WorkContent[];
}

export function WorkHistory(props: WorkHistoryProps): JSX.Element {
  const { content } = props;
  const [activeCompany, setActiveCompany] = useState<Company>(Company.Neeva);
  const activeCompanySummary =
    content.find((work) => work.company === activeCompany) ?? content[0];
  const ref = useRef<HTMLDivElement>(null);
  const animationProps = useAnimateOnViewOnce({ ref });

  return (
    <motion.div
      className={style.workContainer}
      id="work"
      ref={ref}
      {...animationProps}
    >
      <SectionTitle>Work Experience</SectionTitle>
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
    </motion.div>
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
  workSummary: WorkContent;
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
