import React from "react";
import styles from "./contactUs.module.css";
import Contact_Card from "../cards/contactus";

const ContactUs = () => {
  return (
    <>
      <div className={styles["login-header"]}>
        <div className={styles["header-content"]}>
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className={styles["contact-us"]}>
        <div className={styles["contact-us-content"]}>
        <Contact_Card
          region="Head Office Address"
          address="2J7P+5P8, Krishnapuri, Warisaliganj, Nawada, Bihar 805130"
          email="ranjan@gamil.com"
          phone="+91xxxxxxxxxx"
        />
        <Contact_Card
          region="Email"
          address="thecareerpoint@gmail.com"
        />
        <Contact_Card
          region="Phone"
          address="+91xxxxxxxxxx +91xxxxxxxxxx"
        />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
