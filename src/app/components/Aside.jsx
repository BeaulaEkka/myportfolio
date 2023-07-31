import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
const Aside = () => {
  return (
    <aside>
      <div className={styles.aside_icon_container}>
        <Link
          href="https://www.linkedin.com/in/beaula-ekka-favejee-97316558/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/linkedin-icon.svg"
            alt="LinkedIn Icon"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://www.behance.net/beaula"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/behance.svg"
            alt="LinkedIn Icon"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://github.com/BeaulaEkka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/github.svg"
            alt="github Icon"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://dribbble.com/Beaulafavejee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/dribbble.svg"
            alt="dribble Icon"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </aside>
  );
};

export default Aside;
