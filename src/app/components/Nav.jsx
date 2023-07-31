"use client";
import styles from "../page.module.css";
import Link from "next/link";

import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { useState } from "react";

const Nav = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [nav, setNav] = useState(false);
  return (
    <nav className={styles.nav}>
      <div>
        <div>{"< Beaula />"}</div>
        <div className={styles.nav_mobile}>
          <button>{nav ? <IoMdClose /> : <IoMdMenu />}</button>
        </div>
      </div>
      <div>
        <ul className={styles.nav_ul}>
          <li className="nav_li">Home</li>
          <Link href="#aboutPage" attribute="id">
            <li>About</li>
          </Link>
          <Link href="#Portfolio" attribute="id">
            <li>Portfolio</li>
          </Link>
          <li>Resume</li>

          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              // className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="var(--lightblue)" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              // className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill
                size={25}
                color="black"
                backgroundColor="var(--lightblue)"
              />
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
