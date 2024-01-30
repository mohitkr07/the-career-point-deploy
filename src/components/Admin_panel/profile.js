import React, { useEffect, useState } from "react";
import styles from "./admin_panel.module.css";
import Head from "./head";
import Loading from "./intermediaries/loading";

const Profile = () => {
  const [basic, setBasic] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [1]);

  const fetchData = async () => {
    const res = await fetch("/api/basic", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setBasic(data);
    setLoading(false);
    // console.log(data);
  };

  return loading ? (
    <>
      <Loading />
    </>
  ) : (
    <>
      <div className={styles["profile"]}>
        <Head title="Profile" />
        <div className={styles["profile-top"]}>
          <div className={styles["profile-pic"]}>
            <img src="images/profile-pic.jpg"></img>
          </div>
          <div className={styles["top-right"]}>
            <h2>{basic.name}</h2>
            <h4>- {basic.position}</h4>
          </div>
        </div>
        <div className={styles["profile-bottom"]}>
          <table>
            <thead>
              <tr>
                <td className={styles["cell1"]}>userId</td>
                <td className={styles["cell2"]}>{basic.userId}</td>
              </tr>
              <tr>
                <td className={styles["cell1"]}>Phone</td>
                <td className={styles["cell2"]}>+91 {basic.contact}</td>
              </tr>
              <tr>
                <td className={styles["cell1"]}>Email</td>
                <td className={styles["cell2"]}>{basic.email}</td>
              </tr>
              <tr>
                <td className={styles["cell1"]}>Office</td>
                <td className={styles["cell2"]}>{basic.office_address}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default Profile;
