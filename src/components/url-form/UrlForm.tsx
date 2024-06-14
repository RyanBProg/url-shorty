import styles from "./UrlForm.module.scss";

export default function UrlForm() {
  return (
    <form action="" className={styles.form}>
      <input type="text" />
      <button>Shorten It!</button>
    </form>
  );
}
