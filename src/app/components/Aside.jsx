import styles from "../page.module.css";
import Link from "next/link";
import { BsLinkedin, BsBehance, BsGithub, BsDribbble } from "react-icons/bs";

const Aside = () => {
  return (
    <aside>
      <div className={styles.aside_icon_container}>
        <Link
          href="https://www.linkedin.com/in/beaula-ekka-favejee-97316558/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin
            width={30}
            height={30}
            alt="LinkedIn Icon"
            style={{ color: "var(--lightpink)", cursor: "pointer" }}
            className={styles.iconhover}
          />
        </Link>

        <Link
          href="https://www.behance.net/beaula"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsBehance
            width={30}
            height={30}
            alt="behance Icon"
            style={{ color: "var(--lightblue)", cursor: "pointer" }}
            className={styles.iconhover}
          />
        </Link>
        <Link
          href="https://github.com/BeaulaEkka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub
            width={30}
            height={30}
            alt="github Icon"
            style={{ color: "var(--lightorange)", cursor: "pointer" }}
            className={styles.iconhover}
          />
        </Link>
        <Link
          href="https://dribbble.com/Beaulafavejee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsDribbble
            width={30}
            height={30}
            alt="Dribbble Icon"
            style={{ color: "var(--darkpink)", cursor: "pointer" }}
            className={styles.iconhover}
          />
        </Link>
      </div>
    </aside>
  );
};

export default Aside;
