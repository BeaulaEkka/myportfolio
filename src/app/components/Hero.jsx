import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import Aside from "./Aside";
const Hero = () => {
  return (
    <div>
      <div className={styles.hero_main_container}>
        <Aside />

        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
          <main className={styles.hero_elements_container}>
            <MouseParallaxChild
              factorX={1}
              factorY={0.5}
              className={styles.hero_child}
            >
              <Image
                src="/assets/react.png"
                alt="react logo"
                width={200}
                height={200}
              />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.5} factorY={0.5}>
              <Image
                src="/assets/html-logo.png"
                alt="html logo"
                width={100}
                height={100}
              />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0} factorY={0}>
              <Image
                src="/assets/superwoman.png"
                alt="scating figure"
                width={800}
                height={800}
              />
            </MouseParallaxChild>

            <MouseParallaxChild factorX={0.1} factorY={0.8}>
              <Image
                src="/assets/css.png"
                alt="css logo"
                width={100}
                height={100}
              />
            </MouseParallaxChild>

            <MouseParallaxChild factorX={0.5} factorY={0.04}>
              <Image
                src="/assets/color-p.png"
                alt="html logo"
                width={200}
                height={200}
              />
            </MouseParallaxChild>
          </main>
        </MouseParallaxContainer>
      </div>
      <div className={styles.hero_text}>
        <h1 className={styles.hero_text_lg}>Hey! My name is Beaula.</h1>
        <p className={styles.hero_text_sm}>
          I’m a Front-End web developer, a graphic designer & a UX/UI designer
        </p>
      </div>
    </div>
  );
};

export default Hero;
