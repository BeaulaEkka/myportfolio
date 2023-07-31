import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Polar = () => {
  return (
    <div className={styles.polar}>
      <Image src="/assets/polar/1.jpg" alt="polar" width={1415} height={500} />
      <Image src="/assets/polar/2.jpg" alt="polar" width={1415} height={500} />
      <Image src="/assets/polar/3.jpg" alt="polar" width={1415} height={500} />
      <Image src="/assets/polar/4.jpg" alt="polar" width={1415} height={500} />
      <Image src="/assets/polar/5.jpg" alt="polar" width={1415} height={500} />
      <Image src="/assets/polar/6.jpg" alt="polar" width={1415} height={500} />
      <Image src="/assets/polar/7.jpg" alt="polar" width={1415} height={500} />
      <Image src="/assets/polar/8.jpg" alt="polar" width={1415} height={500} />
      <Image src="/assets/polar/9.jpg" alt="polar" width={1415} height={500} />
    </div>
  );
};

export default Polar;
