import { Bitter } from "next/font/google";
import { Button } from "./design-system/button";
import { VStack } from "./design-system/stack";
import Spacer from "./design-system/spacer";
import cx from "classnames";
import style from "./contact.module.scss";

const bitter = Bitter({ subsets: ["latin"] });

export function ContactMe(): JSX.Element {
  return (
    <VStack className={style.chatContainer}>
      <div className={cx(style.title, bitter.className)}>Let&apos;s chat!</div>
      <Spacer axis="vertical" size={12} />
      <div className={style.snippet}>
        Although I&apos;m not actively seeking new opportunities at the moment,
        I&apos;m always happy to hear from anyone who&apos;s interested in my
        work. If you have a question, project idea, or just want to say hi, feel
        free to drop me a line!
      </div>
      <Spacer axis="vertical" size={36} />
      <a href={"mailto:christopher.nivera@gmail.com"} className={style.cta}>
        <Button className={style.button}>Connect With Me</Button>
      </a>
    </VStack>
  );
}
