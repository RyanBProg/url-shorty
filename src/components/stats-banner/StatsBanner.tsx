import styles from "./StatsBanner.module.scss";

export default function StatsBanner() {
  return (
    <section className={styles.banner}>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img
              src="/images/icon-brand-recognition.svg"
              alt="brand recognition icon"
            />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost you brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confindence in your content.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img
              src="/images/icon-detailed-records.svg"
              alt="detailed records icon"
            />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img
              src="/images/icon-fully-customizable.svg"
              alt="fully customizable icon"
            />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
        <hr />
      </div>
    </section>
  );
}
