import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { useCookies } from "react-cookie";

const Login = (props) => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    user: "",
    userId: "",
    password: "",
  });
  // const [cookies, setCookie] = useCookies([]);

  const handleSubmit = async (e) => {
    await postData(e);
  };

  const postData = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cred),
    });

    const data = await res.json();
    if (data.message == "success") {
      // setCookie("test", data.token);
      navigate("/admin");
    } else alert(data.message);
    console.log(data.message);
  };

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={styles["login-header"]}>
        <div className={styles["header-content"]}>
          <h2>Login Panel</h2>
        </div>
      </div>
      <div className={styles["login"]}>
        <div className={styles["container"]}>
          <div className={styles["title"]}>
            <h1>Login to your account!</h1>
            <p>with Reg No. & Password</p>
          </div>
          <div className={styles["credentials"]}>
            <select name="user" value={cred.user} onChange={handleChange}>
              <option>--Select Role--</option>
              <option>Admin</option>
              <option>Partner</option>
            </select>
            <input
              type="text"
              value={cred.userId}
              name="userId"
              placeholder="Reg No./UserId"
              onChange={handleChange}
            />
            <input
              type="password"
              value={cred.password}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div className={styles["forgot-pass"]}>
            <div className={styles["remember-me"]}>
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <div className={styles["login-btn"]}>
            <button onClick={handleSubmit}>Log In</button>
          </div>
          <div className={styles["register-option"]}>
            <p>
              Not a member?<a href="/signup"> Register</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
