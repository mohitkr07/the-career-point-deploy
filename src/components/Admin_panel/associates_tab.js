import React, { useEffect, useState } from "react";
import styles from "./admin_panel.module.css";
import Head from "./head";
import Add_Associate from "./intermediaries/add_associate";
import Warning from "./intermediaries/remove_warning";
import Loading from "./intermediaries/loading";

const Associates = () => {
  const [associates, setData] = useState([]);
  const [showForm, setForm] = useState(false);
  const [showWarning, setWarning] = useState(false);
  const [associateId, setId] = useState("");
  const [associate, setName] = useState("");
  let [loading, setLoading] = useState(true);

  const handleClick = () => {
    if (showForm == false) setForm(true);
    else setForm(false);
    fetchData();
  };
  const handleWarning = (e) => {
    if (showWarning) setWarning(false);
    else setWarning(true);
    setName(e.target.name);
    setId(e.target.id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/api/associates", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setData(data);
    setLoading(false);
    // console.log(data);
  };

  const warningClick = async (rec) => {
    setLoading(true);
    setWarning(rec);
    await fetchData();
  };

  const handleAdd = async (rec) => {
    setForm(rec);
    setLoading(true);
    await fetchData();
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
            {/* <button className={styles["close-button"]} onClick={}>
              X
            </button> */}
            <div className={styles["float-add-associate"]}>
              <Add_Associate onClick={handleAdd} />
            </div>
          </>
        ) : null}
        {showWarning ? (
          <>
            <div className={styles["float-warning"]}>
              <Warning
                onClick={warningClick}
                id={associateId}
                toRemove={associate}
                section="associate"
              />
            </div>
          </>
        ) : null}
        <div className={styles["profile-others"]}>
          <Head title="Associates" />

          <div className={styles["student-list"]}>
            <table className={styles["student-table"]}>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>College/ University</th>
                  <th>Courses</th>
                  <th>Location</th>
                  <th>Website</th>
                  <th>Manage</th>
                </tr>
                {associates.map((i) => (
                  <tr key={i._id}>
                    <td>{sr++}</td>
                    <td>{i.college_name}</td>
                    <td>
                      {i.courses.map((j, pos) => (
                        <span key={pos}>{j + ", "}</span>
                      ))}
                    </td>
                    <td>{i.location}</td>
                    <td>
                      <a href={i.website} target="_blank">
                        visit
                      </a>
                    </td>
                    <td>
                      <button
                        key={i._id}
                        id={i._id}
                        name={i.college_name}
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
              <button onClick={handleClick}>Add Associate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Associates;
