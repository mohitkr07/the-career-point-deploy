import React, { useEffect, useState } from "react";
import styles from "./intermediaries.module.css";

const Warning = (props) => {
  const id = props.id;

  const remove = async () => {
    const res = await fetch(`/api/${props.section}/${id}`, {
      method: "delete",
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (e.target.value == "yes") {
      await remove();
    }
    props.onClick(false);
  };

  return (
    <>
      <div className={styles["remove-warning"]}>
        <p>Are you sure want to remove {props.toRemove} ?</p>
        <div>
          <button value="yes" onClick={handleOnSubmit}>
            Yes
          </button>
          <button value="no" onClick={handleOnSubmit}>
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default Warning;
