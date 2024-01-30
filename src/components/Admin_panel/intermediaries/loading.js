import React from "react";
import { ClipLoader, GridLoader, HashLoader, BarLoader } from "react-spinners";
import styles from "./intermediaries.module.css";

const Loading = () => {
  return (
    <div className={styles["loader"]}>
      <GridLoader
        color={"#0E3AA7 "}
        // loading={loading}
        size={20}
        // width={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
