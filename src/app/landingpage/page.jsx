"use client";
import React, { useEffect, useRef, useState } from "react";
import About from "../about/page";
import Portfolio from "../portfolio/page";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Aside from "../components/Aside";
import styles from "./page.module.css";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Image from "next/image";
import Footer from "../footer/page";
import Link from "next/link";
import { LiaMoonSolid, LiaSunSolid } from "react-icons/lia";
import { useTheme } from "next-themes";

const LandingPage = () => {
  const ref = useRef();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const [asideVisible, setAsideVisible] = useState(true);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 400) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleAside = () => {
    setAsideVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 520) {
        setAsideVisible(false);
      } else {
        setAsideVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const themeIcon =
    theme === "light" ? (
      <LiaMoonSolid onClick={toggleTheme} />
    ) : (
      <LiaSunSolid onClick={toggleTheme} />
    );

  const scrollToHomeClose = () => {
    ref.current.scrollTo(0);
    closeMenu();
  };

  const scrollToAboutClose = () => {
    ref.current.scrollTo(1);
    closeMenu();
  };

  const scrollToPortfolioClose = () => {
    ref.current.scrollTo(3);
    closeMenu();
  };
  const pages =
    typeof window !== "undefined" && window.innerWidth < 1400 ? 7 : 4.3;

  return (
    <Parallax pages={pages} ref={ref} className={styles.parallaxContainer}>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={0.08}
        style={{ zIndex: "9999", height: "4rem" }}
        className={styles.scrollbuttons}
        sticky={{ start: 0, end: 8.3 }}
      >
        <div className={styles.buttonandbeaula}>
          <div>
            {" "}
            <button
              onClick={() => ref.current.scrollTo(0)}
              className={styles.beaula}
            >
              {"< Beaula />"}
            </button>
          </div>
          <div className={styles.nav_hamburger_desktopmenu}>
            <div className={`${styles.nav} ${showMenu ? styles.open : ""}`}>
              <div className={styles.buttonsbox}>
                <button
                  onClick={() => ref.current.scrollTo(0)}
                  className={styles.beaula}
                >
                  Home
                </button>
                <button
                  onClick={() => ref.current.scrollTo(1)}
                  className={styles.beaula}
                >
                  About
                </button>
                <button
                  onClick={() => ref.current.scrollTo(2.5)}
                  className={styles.beaula}
                >
                  Portfolio
                </button>

                <Link
                  href="/assets/resume.pdf"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <div className={styles.beaula}>Resume</div>
                </Link>

                <div className={styles.beaula}>{themeIcon}</div>
              </div>
            </div>
          </div>
          <div className={styles.nav_hamburger} onClick={toggleMenu}>
            <div className={styles.hamburger_menu_bar}></div>
            <div className={styles.hamburger_menu_bar}></div>
            <div className={styles.hamburger_menu_bar}></div>
          </div>
        </div>
        {showMenu && (
          <div>
            {" "}
            <div
              className={`${styles.nav_mobile} ${showMenu ? styles.open : ""}`}
            >
              <div className={styles.mobile_buttonsbox}>
                <button onClick={scrollToHomeClose} className={styles.beaula}>
                  Home
                </button>
                <button onClick={scrollToAboutClose} className={styles.beaula}>
                  About
                </button>
                <button
                  onClick={scrollToPortfolioClose}
                  className={styles.beaula}
                >
                  Portfolio
                </button>

                <Link
                  href="/assets/resume.pdf"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={closeMenu}
                >
                  {" "}
                  <div className={styles.beaula}>Resume</div>
                </Link>

                <div onClick={closeMenu} className={styles.beaula}>
                  {themeIcon}
                </div>
              </div>
            </div>
          </div>
        )}
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0} style={{ zIndex: "999" }}>
        <div
          className={`${styles.toggleButton} ${
            asideVisible ? styles.visible : ""
          }`}
          onClick={toggleAside}
        >
          <RiMenuUnfoldFill />
        </div>
        {asideVisible && <Aside />}
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0} style={{ zIndex: -1 }}>
        <div className={styles.landingpage_herotext}>
          <h1>Hi! My name is Beaula.</h1>
          <p className={styles.landingpage_herotext_p}>
            I’m a Front-End web developer, a graphic designer & a UX/UI designer
          </p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1}>
        <div className={`${styles.landingpage_clouds} ${styles.clouda}`}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.5}>
        <div className={`${styles.landingpage_clouds} ${styles.cloudb}`}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.9}>
        <div className={`${styles.landingpage_clouds} ${styles.cloudc}`}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={4}>
        <Image
          src="/assets/superwoman.png"
          width={357}
          height={834}
          alt="superwoman"
          className={styles.landingpage_superwoman}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2}>
        <div className={`${styles.landingpage_clouds} ${styles.cloudd} `}></div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={3} style={{ zIndex: "10" }} factor={1.7}>
        <div className={styles.aboutContainer} id="aboutPagea">
          <About />
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={
          typeof window !== "undefined" && window.innerWidth < 1400 ? 2.8 : 2
        }
        speed={0.5}
        style={{ zIndex: "999" }}
        className={styles.portfoliodiv}
        factor={
          typeof window !== "undefined" && window.innerWidth < 1200 ? 2.5 : 2
        }
      >
        <div id="portfolioParallax">
          <Portfolio />
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={
          typeof window !== "undefined" && window.innerWidth < 1400 ? 6.7 : 4
        }
        speed={0}
        style={{ zIndex: "999" }}
        factor={0.3}
      >
        <div className={styles.footerContainer}>
          <button
            onClick={() => ref.current.scrollTo(0)}
            className={styles.backtotop}
          >
            Scroll to top
          </button>
          <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default LandingPage;
