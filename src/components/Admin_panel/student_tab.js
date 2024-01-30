import React, { useEffect, useState } from "react";
import styles from "./admin_panel.module.css";
import Head from "./head";
import Add_Student from "./intermediaries/add_student";
import Warning from "./intermediaries/remove_warning";
import Loading from "./intermediaries/loading";

const Student_tab = () => {
  const [students, setData] = useState([]);
  const [showForm, setForm] = useState(false);
  const [showRemove, setRemove] = useState(false);
  const [studentId, setId] = useState("");
  const [studentName, setName] = useState("");

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("/api/students", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!data) alert("please authenticate");
    else {
      setData(data);
      setLoading(false);
    }
  }

  const handleClick = (rec) => {
    setForm(rec);
    setLoading(true);
    fetchData();
  };

  const handleAdd = () => {
    setForm(true);
  };

  const handleWarning = (e) => {
    if (showRemove) setRemove(false);
    else setRemove(true);
    setId(e.target.id);
    setName(e.target.name);
  };
  const warningClick = (rec) => {
    setLoading(true);
    setRemove(rec);
    fetchData();
  };

  var sr = 1;

  return loading ? (
    <>
      <Loading />
    </>
  ) : (
    <>
      <div className={styles["st-tab"]}>
        {showForm ? (
          <>
            <div className={styles["float-add-student"]}>
              <Add_Student title="Add Student" buttonName="Add" onClick={handleClick} />
            </div>
          </>
        ) : null}
        {showRemove ? (
          <>
            <div className={styles["float-warning"]}>
              <Warning
                id={studentId}
                toRemove={studentName}
                onClick={warningClick}
                section="student"
              />
            </div>
          </>
        ) : null}
        <div className={styles["profile-others"]}>
          <Head title="Students" />

          <div className={styles["student-list"]}>
            <table className={styles["student-table"]}>
              <thead>
                <tr>
                  <th key={"first"}>Sr. No.</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Father's Name</th>
                  <th>Gender</th>
                  <th>Email Id</th>
                  <th>Contact No.</th>
                  <th>State</th>
                  <th>Manage</th>
                </tr>
                {students.map((i, pos) => (
                  <tr key={i._id}>
                    <td>{sr++}</td>
                    <td>{i.name}</td>
                    <td>{i.course}</td>
                    <td>{i.fathers_name}</td>
                    <td>{i.gender}</td>
                    <td>{i.email}</td>
                    <td>{i.contact_number}</td>
                    <td>{i.state}</td>
                    <td>
                      <button
                        id={i._id}
                        name={i.name}
                        className={styles["remove-button"]}
                        onClick={handleWarning}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </thead>
            </table>
            <div className={styles["add-button"]}>
              <button onClick={handleAdd}>Add Student</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student_tab;
