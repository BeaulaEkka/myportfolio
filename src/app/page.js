import * as React from "react";
import styles from "./page.module.css";
import LandingPage from "./landingpage/page";

export default function Home() {
  return (
    <div className={styles.main}>
      <LandingPage />
    </div>
  );
}
