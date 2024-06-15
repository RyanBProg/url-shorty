import styles from "./LinkResult.module.scss";
import { useState } from "react";

export default function LinkResult() {
  const [btnText, setBtnText] = useState("Copy");

  return (
    <div className={styles.link} role="listitem">
      <p>https://www.google.com/images</p>
      <p>https://rel.link/gjo345</p>
      <button
        className={btnText === "Copy" ? styles.btnCopy : styles.btnCopied}
        onClick={() => {
          setBtnText("Copied");
        }}>
        {btnText}
      </button>
    </div>
  );
}
