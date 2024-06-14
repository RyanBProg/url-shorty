import styles from "./UrlForm.module.scss";

export default function UrlForm() {
  return (
    <section className={styles.urlForm}>
      <form action="">
        <input type="text" placeholder="Shorten a link here..." />
        <button>Shorten It!</button>
        <span>
          <i>Please add a link</i>
        </span>
      </form>
    </section>
  );
}
