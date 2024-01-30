import React from "react";
import Courses from "../utils/courses";
import styles from "./courses.module.css";

const Courses_nav = () => {
  return (
    <>
      <div className={styles["login-header"]}>
        <div className={styles["header-content"]}>
          <h2>Courses</h2>
        </div>
      </div>
      <Courses />
    </>
  );
};

export default Courses_nav;
