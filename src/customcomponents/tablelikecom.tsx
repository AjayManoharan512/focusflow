import React from "react";
import styles from "./tablelikecom.module.scss"

function Tablelikecom({ config }) {
  return (

    <div className={styles.card}>
      <h3>Email Channel Configuration</h3>

      <div className={styles.row}>
        <div className={styles.label}>{config}</div>
        <div className={styles.value}>
        <div className={`${styles.statusTag} ${
            styles.pink
          }`}>{config.aliasname}</div></div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Domain</div>
        <div className={styles.value}>{config.domain}</div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Support Email Address</div>
        <div className={styles.value}>{config.supportEmail}</div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Email Threshold</div>
        <div className={styles.value}>{config.emailThreshold}</div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Email Bot</div>
<div className={styles.value}>
        <div
          className={`${styles.statusTag} ${
            config.emailBot ? styles.green : styles.pink
          }`}
        >
          {config.emailBot ? "Enabled" : "Disabled"}
        </div></div>
      </div>
    </div>

  );
}

export default Tablelikecom;
