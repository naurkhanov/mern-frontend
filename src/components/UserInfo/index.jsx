import React from "react";
import styles from "./UserInfo.module.scss";

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.avatar}
        src={
          avatarUrl ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDw9oz0wALjnJz2MTmrL2BpE93fHkLZW-2qOPIBVFtlcYXGFUBDIqSiUajkk7Naf32lQ&usqp=CAU"
        }
        alt={""}
      />
      <div className={styles.userDetails}>
        <span classNam e={styles.userName}>
          {fullName}
        </span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};
