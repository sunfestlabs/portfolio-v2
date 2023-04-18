import style from "./about.module.scss";
export function AboutMe(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.title}>About Me</div>
      <div className={style.divider} />
      <div className={style.about}>
        <p>
          Hey there, I&apos;m Chris Nivera! I&apos;m a software engineer with a
          passion for creating user-friendly interfaces that solve real-world
          problems. I first got interested in computer science thanks to my love
          for gaming, much to my parents’ initial chagrin. Nevertheless, the
          countless hours I’ve spent leaping around on Super Mario Brothers or
          coordinating with friends on League of Legends fuel my desire to build
          memorable experiences on the web.
        </p>
        <p>
          Since then, I&apos;ve had the opportunity to craft some awesome
          products at some amazing organizations, including Medinas (a
          healthcare startup) and Evil Geniuses (an esports organization).
          Currently, I&apos;m a full stack engineer at Neeva, where I&apos;m
          excited to continue pushing the boundaries of what it means to be a
          search engine.
        </p>
        <p>Recently, I&apos;ve been building with the following tools:</p>
      </div>
    </div>
  );
}
