"use client";
import React, { Suspense } from "react";
import { data } from "../../data";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const router = useRouter();
  const { id } = params;
  const project = data.find((item) => item.id.toString() === id);

  const handleBackToOverview = () => {
    router.push("/#portfolioPage");
  };

  return (
    <div className={styles.projects_container_id}>
      <div className={styles.heroContainer_id}>
        {project && (
          <Image
            src={project.main_image}
            alt={project.name}
            width={640}
            height={360}
            className={styles.heroImage_id}
          />
        )}

        {project && (
          <div className={styles.id_role_card}>
            <h1>My Role</h1>
            {project.my_role}
            {project.tasks && (
              <div>
                <h2 className={styles.id_card_gap}>Tasks</h2>
                {project.tasks.map((task, index) => (
                  <div key={index}>
                    <p>{task}</p>
                  </div>
                ))}
                {project.tools_used && (
                  <div>
                    <h2 className={styles.id_card_gap}>Tools Used</h2>
                    {project.tools_used.map((tool, index) => (
                      <div key={index}>
                        <p>{tool}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <div className={styles.id_body}>
        <div className={styles.heading}>
          <h1>{project.display_name}</h1>
          {project.live_site && (
            <h5>
              <Link href={project.live_site} className={styles.weblink}>
                VIEW WEBSITE
              </Link>
            </h5>
          )}
        </div>
        <p className={styles.description}>{project.paragraph1}</p>{" "}
        <p className={styles.description}>{project.paragraph2}</p>{" "}
        <p className={styles.description}>{project.paragraph3}</p>{" "}
        <Suspense fallback={<p>Loading...</p>}>
          <div className={styles.imagesContainer}>
            {project.images.map((image, index) => (
              <Image
                key={index}
                src={`/assets/${project.name}/${image}`}
                alt={project.name}
                width={850}
                height={450}
                className={styles.portfolio_id_image}
              />
            ))}
            {/* <Link href={`/portfolio/${project.id}?selectedId=${project.id}`}> */}
            <button
              type="button"
              className={styles.id_overview_btn}
              // onClick={() => router.back()}
              // onClick={() => setSelectedId(project.id)}
              onClick={handleBackToOverview}
            >
              <h3>Back to Overview</h3>
            </button>
            {/* </Link> */}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
