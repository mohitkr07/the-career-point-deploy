import { React, useState, useEffect } from "react";
import styles from "./admin_panel.module.css";
import { useNavigate } from "react-router-dom";
import Profile from "./profile";
import Student_tab from "./student_tab";
import Partners_tab from "./partners_tab";
import Associates from "./associates_tab";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const AdminDash = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("");

  const [showNav, setNav] = useState(false);

  const refresh = () => window.location.reload(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAccess();
  });

  const fetchAccess = async () => {
    const res = await fetch("/api/admin_auth", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (!data) {
      navigate("/login");
    }
  };

  const logout = async () => {
    const res = await fetch("/api/logout", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    refresh();
  };

  const logoutAll = async () => {
    const res = await fetch("/api/logoutall", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    refresh();
  };

  const handleClick = () => {
    if (showNav) setNav(false);
    else setNav(true);
  };

  return (
    <>
      <div className={styles["admin-dash"]}>
        <div className={styles["header"]}>
          <div className={styles["header-content"]}>
            <div className={styles["logo"]}>
              <a href="/">
                <img src="images/logo.png"></img>
              </a>
            </div>
            <div className={styles["header-title"]}>
              <h1>Admin</h1>
              <div onClick={handleClick} className={styles["toggle-icon"]}>
                <FontAwesomeIcon icon={showNav ? faXmark : faBars} size="2xl" />
              </div>
            </div>
            <div className={styles["logout"]}>
              <button onClick={logout}>Logout</button>
              <button onClick={logoutAll} style={{ marginLeft: "1rem" }}>
                Logout all device
              </button>
            </div>
          </div>
          <div
            className={
              showNav ? `${styles["small-nav"]}` : `${styles["hide-nav"]}`
            }
          >
            <button
              name="profile"
              onClick={(e) => {
                setPage("profile");
                setNav(false);
              }}
            >
              Profile
            </button>
            <button
              onClick={(e) => {
                setPage("partners");
                setNav(false);
              }}
            >
              Partners
            </button>
            <button
              onClick={(e) => {
                setPage("associates");
                setNav(false);
              }}
            >
              Associates
            </button>
            <button
              onClick={(e) => {
                setPage("student");
                setNav(false);
              }}
            >
              Manage Students
            </button>
            <button onClick={logout}>Logout</button>
            <button onClick={logoutAll}>Logout all device</button>
          </div>
        </div>
        <div className={styles["admin-bottom"]}>
          <div className={styles["bottom-left"]}>
            <div className={styles["side-bar"]}>
              <button
                name="profile"
                onClick={(e) => {
                  setPage("profile");
                }}
              >
                Profile
              </button>
              <button
                onClick={(e) => {
                  setPage("partners");
                }}
              >
                Partners
              </button>
              <button
                onClick={(e) => {
                  setPage("associates");
                }}
              >
                Associates
              </button>
              <button
                onClick={(e) => {
                  setPage("student");
                }}
              >
                Manage Students
              </button>
            </div>
          </div>
          <div className={styles["display"]}>
            {page == "partners" ? (
              <Partners_tab />
            ) : page == "associates" ? (
              <Associates />
            ) : page == "student" ? (
              <Student_tab />
            ) : (
              <Profile />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDash;
