"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { data } from "../data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import Contactmebutton from "../components/Contactmebutton";
import PhotoSlider from "../components/PhotoSlider";

const Portfolio = () => {
  const boxRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const boxes = boxRef.current.children;

    gsap.from(boxes, {
      opacity: 0,
      y: 200,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  const photos = [
    {
      url: "/assets/carousel/photo-1.png",
      title: "Winc Events",
      text: "A dynamic React application that showcases a list of events with filtering options. This project demonstrates advanced React concepts and integrates with Chakra UI for a modern and visually appealing user interface. Users can search for events, filter them based on categories, and even add new events through a modal form. The application fetches event data from an API and allows users to navigate to individual event pages for more details. Allows the user to add events using a modal and also edit and delete the same.",
      id: 1,
    },
    {
      url: "/assets/carousel/photo-2.png",
      title: "Winc Recipes-Search App",
      text: "This project is successfully created to be a multi-page app where users can seamlessly navigate between the recipe list and detailed recipe information. By allowing recipe items to be clickable, this made it convenient for users to explore and select recipes of their choice. Styling the app using Chakra UI was a game-changer. The pre-built components and styling utilities provided by Chakra UI made it effortless to create visually appealing and responsive user interfaces. With Chakra UI, I was able to focus more on the functionality of the app while ensuring a polished and professional look.",
      id: 2,
    },
    {
      url: "/assets/carousel/photo-3.png",
      title: "Fresh Salad",
      text: "The 'Fresh Salad' UX/UI design project is a comprehensive case study that encompasses a range of design deliverables. The process begins with conducting competitive analysis, user surveys, and one-on-one interviews to gain valuable insights into user preferences and expectations. Based on the collected data, user personas are crafted to empathize with the target audience. Task flows and journey maps are created to understand user interactions and experiences with the app. Site maps are developed to organize the app's structure. Low fidelity wireframes and prototypes outline the basic layout and functionalities, while the high-fidelity prototype showcases the final design. The project focuses on delivering a delightful and sustainable farm-to-table experience, sourcing produce directly from their own farms to ensure freshness and quality in every bite.",
      id: 3,
    },
  ];

  return (
    <main className={styles.portfolio_container} id="portfolioPage">
      {" "}
      <h1>PORTFOLIO</h1>
      <div className={styles.photoslider_container}>
        <PhotoSlider photos={photos} />
      </div>
      <div className={styles.portfolio_header}>
        <p>
          Here are a few past design projects I&#39;ve worked on over the years,
          demonstrating my expertise and experience. I have also worked as a
          graphic designer, specializing in corporate visual identities, desktop
          publishing, and packaging. I would be delighted to share more of my
          work, showcasing my extensive experience and skills.
        </p>{" "}
        <Contactmebutton />
      </div>
      <div
        className={styles.portfolio_projects}
        ref={boxRef}
        id="portfolioSection"
      >
        {data.map((project) => (
          <div key={project.id} className={styles.projectContainer}>
            <Link href={`/portfolio/${project.id}`} target="_blank">
              <Image
                src={`/assets/portfolio/${project.profile_image}`}
                alt={project.name}
                width={320}
                height={330}
                className={styles.coverImage}
              />
              <div className={styles.projectOverlay}>
                <h2 className={styles.projectName}>{project.display_name}</h2>
                <p className={styles.projectRole}>{project.my_role}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
