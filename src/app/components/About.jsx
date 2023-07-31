import styles from "../styles/about.css";

const About = () => {
  return (
    <div id="aboutPage">
      <h1>About Me e</h1>
      <div className={styles.about_confetti}>
        <span className={styles.one}></span>
        <span className={` ${styles.two} ${styles.confetti}`}></span>
        <span className={` ${styles.three} ${styles.confetti}`}></span>
        <p>
          Graphic Designer I value simple content structure, clean design
          patterns, and thoughtful interactions. Things I enjoy designing: UX,
          UI, Web, Apps, Logos Design Tools: Figma
        </p>
        <p>
          Graphic Designer I value simple content structure, clean design
          patterns, and thoughtful interactions. Things I enjoy designing: UX,
          UI, Web, Apps, Logos Design Tools: Figma
        </p>
        <p>
          Trainer/facilitator I genuinely care about people, and love helping
          everyone realize their dreams and helping throughout the journey. From
          Experiences I draw from: UX/UI, Product design, Freelancing Mentor
          Stats: 7 years experience
        </p>
      </div>
    </div>
  );
};

export default About;
