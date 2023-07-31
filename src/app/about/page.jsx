import Image from "next/image";
import styles from "./page.module.css";
import { FaFigma, FaReact, FaHtml5 } from "react-icons/fa";
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
  SiAdobeacrobatreader,
  SiCinema4D,
  SiMicrosoftoffice,
  SiGit,
  SiChakraui,
  SiTypescript,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiJavascript,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import SocialMedia from "../components/SocialMedia";
import Contactmebutton from "../components/Contactmebutton";

const About = () => {
  return (
    <div id="aboutPage" className={`${styles.about_container}`}>
      <div className={styles.about_header}>
        <h1 className={styles.about_header_text}>ABOUT ME</h1>
      </div>
      <section className={styles.about_content_top}>
        <div className={styles.about_image}>
          <Image
            src="/assets/profileimage.jpg"
            width={300}
            height={418}
            alt="profile picture"
          />
        </div>

        <div className={styles.about_p}>
          <p>
            {" "}
            Hello, I&#39;m Beaula Ekka-Favejee, a Front-End developer and a
            UX/UI designer seeking new challanges.
          </p>
          <p>
            It was my unwavering curiosity and passion for coding that led me to
            switch careers. I aim to leverage my previous experiences as a
            Graphic Designer, a Trainer-Learning & Development, and as a
            Technical Support associate, and combine them with my newfound
            skills in Front-end development and UX/UI to create intuitive and
            visually appealing web applications.
          </p>
          <h4 className={styles.h3socialmedia}>
            Please feel free to explore my social media presence.{" "}
          </h4>
          <div className={styles.socialmediaiconsabout}>
            {" "}
            <SocialMedia />
          </div>

          <h4>Drop me a line !</h4>
          <Contactmebutton />
        </div>
      </section>
      <h1 className={styles.myskillsh1}>MY SKILLS</h1>{" "}
      <div className={styles.about_content}>
        <div className={styles.about_skillstext}>
          <div className={styles.about_developmenttext}>
            <h2>Front end Development</h2>
            <p>
              HTML, CSS, JavaScript, Node.js, Tailwind, Chakra, React, Next.js,
              Framer motion, react-spring and Git
            </p>
          </div>
          <div className={styles.about_designtext}>
            <h2>Design</h2>
            <p>
              UX/UI, Design Systems, Web Design, Typography, Brand Identity,
              Figma, Adobe Creative Suite - Photoshop, Illustrator, InDesign,
              Dimensions, Lightroom, XD, Accessibility, Sustainability, Desktop
              publishing.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.allskills_icons}>
        <div className={styles.scroll_parent}>
          <div className={`${styles.scroll_element} ${styles.primary} `}>
            <SiJavascript width={70} height={70} />
            <FaHtml5 width={270} height={270} />
            <SiCss3 width={70} height={70} />
            <SiTypescript width={70} height={70} />
            <SiTailwindcss width={70} height={70} />
            <SiChakraui width={70} height={70} />
            <SiGithub width={70} height={70} />
            <TbBrandVscode width={70} height={70} />
            <FaReact width={70} height={70} />
            <SiNextdotjs width={70} height={70} />
            <SiGit width={70} height={70} />
          </div>
        </div>

        <div className={styles.scroll_parent2}>
          <div className={`${styles.scroll_element2} ${styles.primary2}`}>
            <FaFigma width={50} height={50} />
            <SiAdobephotoshop width={50} height={50} />
            <SiAdobeillustrator width={50} height={50} />
            <SiAdobeindesign width={50} height={50} />
            <SiAdobelightroom width={50} height={50} />
            <SiAdobexd width={50} height={50} />
            <SiAdobeacrobatreader width={50} height={50} />
            <SiMicrosoftoffice width={50} height={50} />
            <SiCinema4D width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
