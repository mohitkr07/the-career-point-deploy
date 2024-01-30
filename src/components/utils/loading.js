import React from "react";
import {
  ClipLoader,
  GridLoader,
  HashLoader,
  BarLoader,
  PuffLoader,
} from "react-spinners";
import styles from "./utils.module.css";

const LoadingPage = () => {
  return (
    <div className={styles["loader"]}>
      <PuffLoader
        color={"#0E3AA7 "}
        // loading={loading}
        size={75}
        // width={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingPage;
