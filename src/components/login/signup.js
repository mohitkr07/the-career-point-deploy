import React, { useState } from "react";
import styles from "./login.module.css";

const SignUp = () => {
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
    // "Andaman and Nicobar Islands",
    // "Chandigarh",
    // "Dadra and Nagar Haveli",
    // "Daman and Diu",
    // "Delhi",
    // "Lakshadweep",
    // "Puducherry",
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
    console.log(e.target.value);
  };

  const listRegions = regions.map((i, index) => {
    return <option key={index}>{i}</option>;
  });
  const listCourses = courses.map((i, index) => {
    return <option key={index}>{i}</option>;
  });

  const postData = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataRec = await res.json();
    // console.log(dataRec);
  };

  return (
    <>
      <div className={styles["login-header"]}>
        <div className={styles["header-content"]}>
          <h2>New Student Registeration</h2>
        </div>
      </div>
      <div className={styles["login"]}>
        <div className={styles["container"]}>
          <div className={styles["title"]}>
            <h1>Register</h1>
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
              type="email"
              value={data.email}
              name="email"
              onChange={handleChange}
              placeholder="email"
            />
            {/* <input
              type="password"
              value={data.password}
              name="password"
              onChange={handleChange}
              placeholder="password"
            /> */}
            <input
              type="text"
              value={data.fathers_name}
              name="fathers_name"
              onChange={handleChange}
              placeholder="Father's Name"
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
            <select value={data.course} name="course" onChange={handleChange}>
              {listCourses}
            </select>
          </div>

          <div className={styles["login-btn"]}>
            <button onClick={postData}>Sign Up</button>
          </div>
          <div className={styles["register-option"]}>
            <p>
              Already Registered?<a href="/login"> Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
