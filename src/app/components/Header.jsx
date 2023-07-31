import React from "react";
import Nav from "./Nav";
import styles from "../page.module.css";
import rootcolors from "../styles/global.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
};

export default Header;
