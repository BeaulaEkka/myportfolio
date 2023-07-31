"use client";
import * as React from "react";
// import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import styles from "./page.module.css";
// import Link from "next/link";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./components/About";

import Footer from "./footer/page";
import Portfolio from "./portfolio/page";

export default function Home() {
  const aboutRef = useRef(null);

  return (
    <div className={styles.main}>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}
