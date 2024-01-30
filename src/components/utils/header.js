import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./utils.module.css";

const Header = () => {
  const [showNav, setNav] = useState(false);

  const handleClick = () => {
    if (showNav) setNav(false);
    else setNav(true);
  };

  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["header-top"]}>
          <div className={styles["header-top-content"]}>
            <div className={styles["whatsapp"]}>
              <i className="fa-brands fa-whatsapp" />
              <p>+91-6202165509</p>
            </div>
          </div>
        </div>
        <div className={styles["header-bottom"]}>
          <div className={styles["header-bottom-content"]}>
            <div className={styles["logo-options"]}>
              <div className={styles["logo"]}>
                <a href="/">
                  <img src="images/logo.png"></img>
                </a>
              </div>
              <div onClick={handleClick} className={styles["options"]}>
                <FontAwesomeIcon icon={showNav ? faXmark : faBars} size="2xl" />
              </div>
            </div>
            <div className={styles["header-navigation"]}>
              <nav>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="/courses">Courses</a>
                  </li>
                  <li>
                    <a href="/associates">Associates</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="/contactus">Contact Us</a>
                  </li>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className={
                showNav ? `${styles["small-nav"]}` : `${styles["nav-hide"]}`
              }
            >
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="/courses">Courses</a>
                </li>
                <li>
                  <a href="/associates">Associates</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="/contactus">Contact Us</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
