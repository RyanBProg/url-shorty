import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button>Get Started</button>
      </div>
      <div>
        <img src="/images/illustration-working.svg" alt="background image" />
      </div>
    </section>
  );
}
