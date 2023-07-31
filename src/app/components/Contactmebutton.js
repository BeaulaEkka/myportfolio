"use client";
import React from "react";
import styles from "../styles/contactmebutton.module.css";
import { useRouter } from "next/navigation";
import "mailgo";
import Link from "next/link";

const Contactmebutton = () => {
  const router = useRouter();

  const handleEmailClick = () => {
    router.push("mailto:beaula.favejee@outlook.com");
  };

  return (
    <Link
      href="#mailgo"
      data-address="beaula.favejee"
      data-domain="outlook.com"
      data-subject="Regarding Your Portfolio"
      data-body="Hello Beaula, I wanted to reach out regarding your portfolio."
      className={styles.emailmebutton}
    >
      CONTACT ME
    </Link>
  );
};

export default Contactmebutton;
