import React, { useEffect, useState } from "react";
import styles from "./utils.module.css";
import styles1 from "./Interaction.module.css";
import CollegeCard from "../cards/college_card";
import LoadingPage from "./loading";
import Add_Student from "../Admin_panel/intermediaries/add_student";

const Associations = (props) => {
  const [associates, setAssociates] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showApply, setApply] = useState(false);

  useEffect(() => {
    fetchData();
  }, [1]);

  const fetchData = async () => {
    const res = await fetch("/api/associates", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setAssociates(data);
    setLoading(false);
  };

  const handleScroll = () => {
    setApply(false);
  };

  const handleApply = (rec) => {
    document.body.style.overflowY = "hidden";
    setApply(rec);
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setApply(false);
      document.body.style.overflowY = "auto";
    }
  };
  return loading ? (
    <>
      <LoadingPage />
    </>
  ) : (
    <>
      {showApply ? (
        <div
          onClick={handleClose}
          onScroll={handleScroll}
          className={styles1["handle-registeration"]}
        >
          <Add_Student
            title="Enquiry Form"
            buttonName="Send Enquiry"
            onClick={handleApply}
          />
        </div>
      ) : null}
      <div className={styles["associations"]}>
        <div onScroll={handleScroll} className={styles["associations-content"]}>
          <div className={styles["asso-top"]}>
            <div className={styles["asso-top-sub1"]}>
              <p>The Career Point</p>
            </div>
            <div className={styles["asso-top-sub2"]}>
              <h1>Our Associated Colleges & Universities</h1>
            </div>
          </div>
          <div className={styles["asso-bottom"]}>
            <div className={styles["asso-bottom-content"]}>
              {associates.map((i, pos) => (
                <CollegeCard
                  key={pos}
                  logo={i.logo_link}
                  collegeName={i.college_name}
                  collegePortal={i.website}
                  onClick={handleApply}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Associations;
