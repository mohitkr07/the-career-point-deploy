import { React, useState, useEffect } from "react";
import styles from "../Admin_panel/admin_panel.module.css";
import Head from "../Admin_panel/head";
import Student_tab from "../Admin_panel/student_tab";

const Partner = () => {
  const [page, setPage] = useState("");

  return (
    <>
      <div className={styles["admin-dash"]}>
        <div className={styles["header"]}>
          <div className={styles["header-content"]}>
            <div className={styles["logo"]}>
              <img src="images/logo.png"></img>
            </div>
            <div className={styles["header-title"]}>
              <h1>Partner</h1>
            </div>
            <div className={styles["logout"]}>
              <button>Logout</button>
            </div>
          </div>
        </div>
        <div className={styles["partner-bottom"]}>
          {/* <div className={styles["bottom-left"]}>
            <div className={styles["side-bar"]}></div>
          </div> */}
          <div className={styles["partner-display"]}>
            <div className={styles["profile"]}>
              <Head title="Enrolled Students" />

              <div className={styles["student-list"]}>
                <table className={styles["student-table"]}>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Father's Name</th>
                    <th>Gender</th>
                    <th>Email Id</th>
                    <th>Contact No.</th>
                    <th>State</th>
                    <th>Manage</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mohit</td>
                    <td>B.Tech</td>
                    <td>Anurudh Kumar</td>
                    <td>Male</td>
                    <td>makeduspike@gmail.com</td>
                    <td>+91 7878441090</td>
                    <td>Bihar</td>
                    <td>
                      <button className={styles["remove-button"]}>
                        Remove
                      </button>
                    </td>
                  </tr>
                </table>
                <div className={styles["add-button"]}>
                  <button>Add Student</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
