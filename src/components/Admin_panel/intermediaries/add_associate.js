import React, { useState } from "react";
import styles from "../../login/login.module.css";
import styles1 from "./intermediaries.module.css";
import Loading from "./loading";

const Add_Associate = (props) => {
  const [data, setData] = useState({
    college_name: "",
    location: "",
    website: "",
    logo_link: "",
  });
  const [courses, setCourses] = useState("");
  const [message, setMassage] = useState("");
  const [loading, setLoading] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleChange2 = (e) => {
    setCourses(e.target.value);
    // console.log(e.target.value);
  };

  const postData = async () => {
    const res = await fetch("/api/associate", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, courses: courses.split(",") }),
    });

    const dataRec = await res.json();
    setMassage(dataRec.message);
    setLoading(false);
  };

  const handleSubmit = async () => {
    await postData();
    props.onClick(false);
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
              <h1>Add Associate</h1>
              <div className={styles1["cross"]}>
                <img onClick={handleClose} src="/images/cross.svg" />
              </div>
            </div>

            <div className={styles["credentials"]}>
              <input
                type="text"
                value={data.college_name}
                name="college_name"
                onChange={handleChange}
                placeholder="College Name"
              />
              <input
                type="text"
                value={data.courses}
                name="courses"
                onChange={handleChange2}
                placeholder="Courses"
              />
              <input
                type="text"
                value={data.location}
                name="location"
                onChange={handleChange}
                placeholder="Location"
              />
              <input
                type="text"
                value={data.website}
                name="website"
                onChange={handleChange}
                placeholder="Website Link"
              />
              <input
                type="text"
                value={data.logo_link}
                name="logo_link"
                onChange={handleChange}
                placeholder="Logo_link"
              />
            </div>

            <div className={styles["login-btn"]}>
              <button onClick={handleSubmit}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Associate;
