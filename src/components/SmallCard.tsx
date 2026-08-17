import React from "react";
import styles from "./smallinitialcard.module.scss";

function Smallcardtitle({ config }) {
  const { title, status, items,icon } = config;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.title}>{title}</span>
        </div>

        <span className={`${styles.tag} ${styles.green}`}>
          {status}
        </span>
      </div>

      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>
            <span className={styles.itemLabel}>{item.label}:</span>{" "}
            <span className={styles.itemValue}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Smallcardtitle;
