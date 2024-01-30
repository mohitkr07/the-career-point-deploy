import React from "react";
import styles from "./utils.module.css";
import Course from "../cards/course_card";

const Courses = () => {
  let courses = [
    "DIPLOMA IN ENGG.",
    "DIPLOMA IN H.M",
    "D. Pharm.",
    "BCA",
    "BBA",
    "B.TECH/BE",
    "BALLB",
    "BFA",
    "B.Ed",
    "B.PES",
    "BPT",
    "BHMTC",
    "GNM",
    "B. Pharma",
    "B.Voc (Yoga)",
    "MBA",
    "MCA",
    "LLB",
    "MJMC",
    "MBBS",
  ];

  return (
    <>
      <div className={styles["courses"]}>
        <div className={styles["courses-container"]}>
          <div className={styles["course-container-top"]}>
            <h1>Our Courses</h1>
          </div>
          <div className={styles["course-container-bottom"]}>
            {courses.map((i, pos) => {
              return <Course key={pos} courseName={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
