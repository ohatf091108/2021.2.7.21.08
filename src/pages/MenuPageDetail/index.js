import React, { Component } from "react";
import styles from "./detail.module.scss";

export default () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.title}>
          <h1>StaffTraveler</h1>
          <p>Sep 2017 to Aug 201812345645678</p>
        </div>
        <section className={styles.content}></section>
      </div>
    </div>
  );
};
