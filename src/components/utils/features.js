import React from "react";
import styles from "./utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightLong,
  faRoad,
  faGraduationCap,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
// import {}

const Features = () => {
  return (
    <div className={styles["features"]}>
      <div className={styles["features-content"]}>
        <div className={styles["features-box"]}>
          <div className={styles["feat-icon"]}>
            <div className={styles["featIcon"]}>
              <FontAwesomeIcon
                icon={faLightbulb}
                size="xl"
                // style={{ color: "#4a6fb0" }}
              />
            </div>
          </div>
          <h3>AWARENESS</h3>
          <p>
            Let Our Educational Consultancy Firm Guide You Towards a Bright
            Future
          </p>
        </div>
        <div className={styles["features-box"]}>
          <div className={styles["feat-icon"]}>
            <div className={styles["featIcon"]}>
              <FontAwesomeIcon
                icon={faRoad}
                size="xl"
                // style={{ color: "#244b8f" }}
              />
            </div>
          </div>
          <h3>PATH FINDERS</h3>
          <p>Ignite Your Passion for Learning and Gain a Competitive Edge</p>
        </div>
        <div className={styles["features-box"]}>
          <div className={styles["feat-icon"]}>
            <div className={styles["featIcon"]}>
              <FontAwesomeIcon
                size="xl"
                icon={faGraduationCap}
                // style={{ color: "#34558d" }}
              />
            </div>
          </div>
          <h3>PINNACLE INSTITUTIONS</h3>
          <p>Our Network Comprises India's Premier Educational Institutions</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
