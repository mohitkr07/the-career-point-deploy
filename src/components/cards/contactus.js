import React from "react";
import styles from "./cards.module.css";

const Contact_Card = (props) => {
  return (
    <>
      <div className={styles["contact-container"]}>
          <div className={styles["contact-icon"]}>{props.icon}</div>
          <div className={styles["contact-content"]}>
            <div className={styles["contact-title"]}>
              <h3>{props.region}</h3>
            </div>
            <div className={styles["contact-body"]}>
              <p>{props.address}</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Contact_Card;
