import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import {
  FaBehanceSquare,
  FaGithubSquare,
  FaLinkedin,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>&lt; Beaula /&gt;</div>

      <div className={styles.footer_logos}>
        <Link
          href="https://www.linkedin.com/in/beaula-ekka-97316558/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin width={40} height={40} className={styles.linkedin} />
        </Link>
        <Link
          href="https://www.behance.net/beaula"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehanceSquare
            width={40}
            height={40}
            alt="behance Icon"
            className={styles.behancesquare}
          />
        </Link>

        <Link
          href="https://dribbble.com/Beaulafavejee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDribbbleSquare
            width={40}
            height={40}
            alt="dribbble logo"
            className={styles.dribbblesquare}
          />
        </Link>

        <Link
          href="https://github.com/BeaulaEkka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare
            width={40}
            height={40}
            className={styles.githubsquare}
          />
        </Link>
      </div>

      <p className={styles.footernote}>
        Designed and built by Beaula Ekka @ 2023
      </p>
    </div>
  );
};

export default Footer;
