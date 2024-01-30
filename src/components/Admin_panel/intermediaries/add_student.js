import React, { useState } from "react";
import styles from "../../login/login.module.css";
import styles1 from "./intermediaries.module.css";

const Add_Student = (props) => {
  let regions = [
    "--Select State--",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
  ];

  let courses = [
    "--Select Course--",
    "DIPLOMA IN ENGG.",
    "DIPLOMA IN H.M",
    "D. Pharm.",
    "BCA",
    "BBA",
    "B.TECH/BE",
    "BALLB",
    "BFA",
    "B.Ed",
    "B.PES",
    "BPT",
    "BHMTC",
    "GNM",
    "B. Pharma",
    "B.Voc (Yoga)",
    "MBA",
    "MCA",
    "LLB",
    "MJMC",
    "MBBS",
  ];

  const [data, setData] = useState({
    name: "",
    email: "",
    fathers_name: "",
    contact_number: "",
    gender: "",
    state: "",
    course: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const listRegions = regions.map((i, index) => {
    return <option key={index}>{i}</option>;
  });
  const listCourses = courses.map((i, index) => {
    return <option key={index}>{i}</option>;
  });

  const postData = async () => {
    const res = await fetch("/api/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataRec = await res.json();
    alert(dataRec.message);
    if (dataRec.status) {
      props.onClick(false);
    } else props.onClick(true);
  };

  const handleClick = async (e) => {
    await postData();

    // if (props.buttonName !== "Send Enquiry")
  };

  const handleClose = () => {
    props.onClick(false);
    document.body.style.overflowY = 'visible'
  };

  return (
    <>
      <div className={styles1["add-student"]}>
        <div className={styles1["login"]}>
          <div className={`${styles["container"]} ${styles["container"]}`}>
            <div
              className={`${styles["title"]} ${styles1["title-customized"]}`}
            >
              <div></div>
              <h2>{props.title}</h2>
              <div
                className={`${styles1["student-cross"]} ${styles1["close-icon"]}`}
              >
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
                value={data.fathers_name}
                name="fathers_name"
                onChange={handleChange}
                placeholder="Father's Name"
              />
              <select value={data.course} name="course" onChange={handleChange}>
                {listCourses}
              </select>
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
                name="contact_number"
                onChange={handleChange}
                placeholder="Contact Number"
              />
              <select value={data.gender} name="gender" onChange={handleChange}>
                <option key="1">--Gender--</option>
                <option key="2">Male</option>
                <option key="3">Female</option>
                <option key="4">Transgender</option>
              </select>
              <select value={data.state} name="state" onChange={handleChange}>
                {listRegions}
              </select>
            </div>

            <div className={styles["login-btn"]}>
              <button onClick={handleClick}>{props.buttonName}</button>
            </div>
            {/* <div className={styles["register-option"]}>
              <p>
                Already Registered?<a href="/login"> Login</a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Student;
