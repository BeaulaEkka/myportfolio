"use client";
import React from "react";
import styles from "../styles/contactmebutton.module.css";
import { useRouter } from "next/navigation";

const Contactmebutton = () => {
  const router = useRouter();

  const handleEmailClick = () => {
    router.push("mailto:beaula.favejee@outlook.com");
  };

  return (
    // <button
    //   type="button"
    //   onClick={() => handleEmailClick}
    //   className={styles.emailmebutton}
    // >
    //   CONTACT ME
    // </button>
  );
};

export default Contactmebutton;
