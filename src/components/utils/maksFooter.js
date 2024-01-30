import React from "react";
import styles from "./maksFooter.module.css";
const MaksFooter = () => {
  return (
    <>
      <div className={styles["section2"]}>
        <div className={styles["footer-basic"]}>
            <div className={styles["social"]}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohitkumar-mahto-7016311b7/"
              >
                <i className="icon ion-social-linkedin"></i>
              </a>
              <a target="_blank" href="https://github.com/mohitkr07">
                <i className="icon ion-social-github"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/mohit_kr07/">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
            <ul className={styles["list-inline"]}>
              <li className={styles["list-inline-item"]}>
                <span>Developed & Deployed by: </span>Mohitkumar Mahto
              </li>
            </ul>
            <p className={styles["copyright"]}>MAK Insights ©</p>
        </div>
      </div>
    </>
  );
};

export default MaksFooter;
