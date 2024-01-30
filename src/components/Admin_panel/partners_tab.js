import React, { useEffect, useState } from "react";
import styles from "./admin_panel.module.css";
import Head from "./head";
import Add_Partner from "./intermediaries/add_partner";
import Warning from "./intermediaries/remove_warning";
import Loading from "./intermediaries/loading";

const Partners_tab = () => {
  const [partners, setPartners] = useState([]);
  const [showForm, setForm] = useState(false);
  const [showRemove, setRemove] = useState(false);
  const [partnerId, setId] = useState("");
  const [partnerName, setName] = useState("");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("/api/partners", {
      method: "get",
      headers: {
        Content_Type: "application/json",
      },
    });
    const data = await res.json();
    setPartners(data);
    setLoading(false);
  }
  const handleAdd = async (rec) => {
    setLoading(true);
    setForm(rec);
    await fetchData();
  };
  const handleClick = (e) => {
    setForm(true);
  };

  const handleRemove = (e) => {
    setRemove(true);
    setId(e.target.id);
    setName(e.target.name);
  };

  const warningClick = async (rec) => {
    setLoading(true);
    setRemove(rec);
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
            {/* <button className={styles["close-button"]} onClick={handleClick}>
              X
            </button> */}
            <div className={styles["float-add-student"]}>
              <Add_Partner buttonName="Add" onClick={handleAdd} />
            </div>
          </>
        ) : null}

        {showRemove ? (
          <>
            <div className={styles["float-warning"]}>
              <Warning
                id={partnerId}
                toRemove={partnerName}
                onClick={warningClick}
                section="partner"
              />
            </div>
          </>
        ) : null}
        <div className={styles["profile-others"]}>
          <Head title="Partners" />

          <div className={styles["student-list"]}>
            <table className={styles["student-table"]}>
              <thead>
                <tr>
                  <th key={"first"}>Sr. No.</th>
                  <th>Name</th>
                  <th>Contact No.</th>
                  <th>Email Id</th>
                  <th>address</th>
                  <th>Manage</th>
                </tr>
                {partners.map((i, pos) => (
                  <tr key={i._id}>
                    <td>{sr++}</td>
                    <td>{i.name}</td>
                    <td>{i.contact_number}</td>
                    <td>{i.email}</td>
                    <td>{i.address}</td>
                    <td>
                      <button
                        id={i._id}
                        name={i.name}
                        className={styles["remove-button"]}
                        section="partner"
                        onClick={handleRemove}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </thead>
            </table>
            <div className={styles["add-button"]}>
              <button onClick={handleClick}>Add Partner</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners_tab;
