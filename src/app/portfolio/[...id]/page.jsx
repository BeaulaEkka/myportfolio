import Header from "@/app/components/Header";
import React from "react";
import { data } from "../../data";
import Image from "next/image";
import styles from "../page.module.css";

const id = ({ params }) => {
  return (
    <div>
      <Header />
      <h1>{params.name}</h1>
      {/* {data.map((item) => (
        <div key={item.id}>
          {item.images &&
            item.images.map((image, index) => (
              <div key={index}>
                <Image
                  src={`/assets/${item.name.toLowerCase()}/${image}.jpg`}
                  srcSet={`/assets/${item.name.toLowerCase()}/${image}.jpg 1x, /assets/${item.name.toLowerCase()}/${image}.png 2x`}
                  alt={item.name}
                  width={450}
                  height={450}
                  className={styles.coverImage}
                />
              </div>
            ))}
        </div>
      ))} */}
    </div>
  );
};

export default id;
