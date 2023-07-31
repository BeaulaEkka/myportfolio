"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LiaMoonSolid, LiaSunSolid } from "react-icons/lia";
import styles from "../styles/nav.module.css";
import Link from "next/link";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

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

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const themeIcon =
    theme === "light" ? (
      <LiaMoonSolid onClick={toggleTheme} />
    ) : (
      <LiaSunSolid onClick={toggleTheme} />
    );

  return (
    <nav className={styles.nav_main_container}>
      <div className={styles.nav_mobile_logoheader}>
        <Link
          passHref
          href="/"
          style={{
            textDecoration: "none",
          }}
        >
          {" "}
          <div className={styles.nav_logo}>{"< Beaula />"}</div>
        </Link>

        <div className={styles.nav_hamburger_desktopmenu}>
          <div className={`${styles.nav} ${showMenu ? styles.open : ""}`}>
            <ul className={`${styles.nav_ul} ${showMenu ? styles.active : ""}`}>
              <Link
                passHref
                href="/"
                style={{
                  textDecoration: "none",
                }}
              >
                {" "}
                <li className={styles.nav_li}>Home </li>
              </Link>
              <Link
                passHref
                href={"/#aboutPagea"}
                style={{ textDecoration: "none" }}
              >
                <li className={styles.nav_li}>About</li>
              </Link>{" "}
              <Link
                passHref
                href="/#portfolioPage"
                style={{ textDecoration: "none" }}
              >
                <li className={styles.nav_li}>Portfolio </li>{" "}
              </Link>
              <Link
                href="/assets/resume.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  width: "100%",
                  textDecoration: "none",
                }}
              >
                <li className={styles.nav_li}>Resume</li>
              </Link>
              <li className={styles.nav_li}> {themeIcon}</li>
            </ul>
          </div>

          <div className={styles.nav_hamburger} onClick={toggleMenu}>
            <div className={styles.hamburger_menu_bar}></div>
            <div className={styles.hamburger_menu_bar}></div>
            <div className={styles.hamburger_menu_bar}></div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className={styles.nav_mobile}>
          <ul className={styles.nav_mobile_ul}>
            <Link
              href="/"
              onClick={closeMenu}
              style={{ textDecoration: "none" }}
            >
              <li className={styles.nav_mobile_li}>Home </li>
            </Link>

            <Link
              href="/#aboutPage"
              onClick={closeMenu}
              style={{ textDecoration: "none" }}
            >
              <li className={styles.nav_mobile_li}>About </li>
            </Link>

            <Link
              href="/#portfolioPage"
              onClick={closeMenu}
              style={{ textDecoration: "none" }}
            >
              <li className={styles.nav_mobile_li}>Portfolio </li>
            </Link>

            <li
              className={styles.nav_mobile_li}
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
            >
              {" "}
              Theme
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
