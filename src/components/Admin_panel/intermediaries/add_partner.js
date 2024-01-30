import React, { useState } from "react";
import styles from "../../login/login.module.css";
import styles1 from "./intermediaries.module.css";

const Add_Partner = (props) => {
  const [data, setData] = useState({
    name: "",
    contact_number: "",
    email: "",
    address: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    // console.log(e.target.value);
  };

  const postData = async () => {
    const res = await fetch("/api/partner", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, password: data.contact_number }),
    });

    const dataRec = await res.json();
    console.log(dataRec.message);
  };

  const handleClick = async () => {
    props.onClick(false);
    await postData();
  };

  const handleClose = () => {
    props.onClick(false);
  };

  return (
    <>
      <div className={styles1["add-student"]}>
        <div className={styles1["login"]}>
          <div className={styles["container"]}>
            <div className={styles["title"]}>
              <h1>Add Partner</h1>
              <div className={styles1["cross"]}>
                <img onClick={handleClose} src="/images/cross.svg" />
              </div>
            </div>
            <div className={styles["credentials"]}>
              <input
                type="text"
                value={data.name}
                name="name"
                onChange={handleChange}
                placeholder="Name"
              />
              <input
                type="text"
                value={data.contact_number}
                name="contact_number"
                onChange={handleChange}
                placeholder="contact_number"
              />
              <input
                type="email"
                value={data.email}
                name="email"
                onChange={handleChange}
                placeholder="email"
              />
              <input
                type="text"
                value={data.contact}
                name="address"
                onChange={handleChange}
                placeholder="Address"
              />
            </div>

            <div className={styles["login-btn"]}>
              <button onClick={handleClick}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Partner;
