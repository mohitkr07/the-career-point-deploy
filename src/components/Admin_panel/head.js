import React from "react";
import styles from "./admin_panel.module.css"

const Head = (props)=>{
    return (
        <>
        <div className={styles["head"]}>
            <h3>{props.title}</h3>
        </div>
        </>
    )
}
export default Head;