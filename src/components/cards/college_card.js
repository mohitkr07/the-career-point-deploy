import React, { useState } from "react";
import styles from "../utils/utils.module.css";
import Send_Enquiry from "../utils/sendEnquiry";

const CollegeCard = (props) => {
  const [showApply, setApply] = useState(false);

  const handleApply = () => {
    props.onClick(true);
  };

  return (
    <div className={styles["college-card"]}>
      <div className={styles["college-card-top"]}>
        <div className={styles["card-logo"]}>
          <img src={props.logo}></img>
        </div>
      </div>
      <div className={styles["college-card-bottom"]}>
        <p>{props.collegeName}</p>
        {/* <a href={props.collegePortal} target="_blank">
          {props.collegePortal}
        </a> */}
        <button onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
};
export default CollegeCard;
