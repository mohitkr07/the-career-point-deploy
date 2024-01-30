import React from "react";
import styles from "./cards.module.css";

const Course = (props) => {
  return (
    <>
      <div className={styles["course-card"]}>
        <p>{props.courseName}</p>
      </div>
    </>
  );
};

export default Course;
