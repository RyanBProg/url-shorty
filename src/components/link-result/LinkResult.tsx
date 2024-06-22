import { Link } from "../../utils/types";
import styles from "./LinkResult.module.scss";
import { useRef, useState } from "react";

type Props = {
  link: Link;
};

export default function LinkResult({ link }: Props) {
  const [btnText, setBtnText] = useState("Copy");
  const copyTextRef = useRef<HTMLParagraphElement>(null);

  const copyToClipboard = () => {
    if (copyTextRef.current) {
      const text = copyTextRef.current.innerText;
      navigator.clipboard.writeText(text).then(() => setBtnText("Copied"));
    }
  };

  return (
    <div className={styles.link} role="listitem">
      <p>{link.link}</p>
      <p ref={copyTextRef}>{link.shortLink}</p>
      <button
        className={btnText === "Copy" ? styles.btnCopy : styles.btnCopied}
        onClick={copyToClipboard}>
        {btnText}
      </button>
    </div>
  );
}
