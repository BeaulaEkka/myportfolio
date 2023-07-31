import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { data } from "../data";
import Polar from "../polar/page";
const Portfolio = () => {
  return (
    <main id="Portfolio" className={styles.portfolio_container}>
      <div className={styles.portfolio_projects}>
        {data.map((item) => (
          <div key={item.id}>
            <Link href={`/portfolio/${item.id}`} passHref>
              <Image
                src={`/assets/portfolio/${item.profile_image}`}
                alt={item.name}
                width={450}
                height={450}
                className={styles.coverImage}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
