"use client";
import React from "react";
import styles from "../styles/contactmebutton.module.css";
import { useRouter } from "next/navigation";
import "mailgo";
import Link from "next/link";

const Contactmebutton = () => {
  const router = useRouter();

  return (
    <Link
      href={"mailto:beaula.favejee@outlook.com"}
      target="blank"
      className={styles.emailmebutton}
    >
      CONTACT ME
    </Link>
  );
};

export default Contactmebutton;
