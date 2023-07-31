"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/photoslider.module.css";
import Image from "next/image";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Link from "next/link";

const PhotoSlider = ({ photos }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideright();
      }, 3000);
  });

  const slideright = () => {
    if (current === photos.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const slideleft = () => {
    if (current === 0) {
      setCurrent(photos.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* <h2 className={styles.carousel_h1}> PORTFOLIO HIGHLIGHTS</h2> */}
      <div className={styles.carousel_arrows}>
        <div className={styles.arrowright}>
          <BsFillArrowLeftCircleFill onClick={slideright} />
        </div>
        <div className={styles.arrowleft} onClick={slideleft}>
          <BsFillArrowRightCircleFill />
        </div>
      </div>
      <div className={styles.carousel_wrapper}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={
              index === current
                ? styles.carousel_card + " " + styles.carousel_card_active
                : styles.carousel_card
            }
          >
            <div className={styles.card_overlay}>
              <Link
                href={`/portfolio/${photo.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h2>{photo.title}</h2>{" "}
              </Link>
              <p>{photo.text}</p>
            </div>
            <Link href={`/portfolio/${photo.id}`}>
              <Image
                src={photo.url}
                width={1500}
                height={1000}
                alt={photo.title}
                className={styles.carousel_image}
              />
            </Link>
          </div>
        ))}
        <div className={styles.carousel_pagination}>
          {photos.map((_, index) => (
            <div
              key={index}
              className={
                index === current
                  ? styles.pagination_dot + " " + styles.pagination_dot_active
                  : styles.pagination_dot
              }
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
