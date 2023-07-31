import Link from "next/link";
import React from "react";
import { BsLinkedin, BsBehance, BsGithub, BsDribbble } from "react-icons/bs";
import styles from "../styles/socialmedia.module.css";

const SocialMedia = () => {
  return (
    <div>
      <ul className={styles.socialmedia_ul}>
        <li className={styles.socialmedia_li}>
          <Link
            href="https://www.linkedin.com/in/beaula-ekka-favejee-97316558/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin
              width={30}
              height={30}
              alt="LinkedIn Icon"
              className={styles.iconlinkedin}
            />
          </Link>
        </li>

        <li>
          {" "}
          <Link
            href="https://www.behance.net/beaula"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBehance
              width={30}
              height={30}
              alt="behance Icon"
              className={styles.iconbehance}
            />
          </Link>
        </li>

        <li>
          {" "}
          <Link
            href="https://github.com/BeaulaEkka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub
              width={30}
              height={30}
              alt="github Icon"
              className={styles.icongithub}
            />
          </Link>
        </li>

        <li>
          <Link
            href="https://dribbble.com/Beaulafavejee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsDribbble
              width={30}
              height={30}
              alt="Dribbble Icon"
              className={styles.icondribbble}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
