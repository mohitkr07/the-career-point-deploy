import React from "react";
import styles from "./utils.module.css";

const Welcome = () => {
  return (
    <div className={styles["welcome"]}>
      <div className={styles["welcome-content"]}>
        <div className={styles["welcome-left"]}>
          <div className={styles["welcome-title"]}>
            <h1>Welcome to The Career Point Educational Trust</h1>
          </div>
          <div className={styles["welcome-para"]}>
            <p>
              As a leading educational consultancy firm, The Career Point is
              dedicated to providing you with personalized guidance and support
              on your educational journey. Whether you are a student seeking
              guidance for college admissions, a professional looking to enhance
              your skills, or an institution in need of educational solutions,
              we are here to assist you every step of the way. Our team of
              experienced consultants is committed to understanding your unique
              goals and aspirations, and we strive to empower you with the
              knowledge, resources, and opportunities necessary to achieve
              success. Get ready to embark on an exciting educational adventure
              with us!
            </p>
          </div>
          <div className={styles["welcome-button"]}>
            <button>Find More</button>
          </div>
        </div>
        <div className={styles["welcome-right"]}>
          <img src="/images/study2.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
