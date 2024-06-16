import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h2>
          <a href="#">Shorty</a>
        </h2>
        <div className={styles.linkList}>
          <h3>Features</h3>
          <ul>
            <li>
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </ul>
        </div>
        <div className={styles.linkList}>
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className={styles.linkList}>
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.socialContainer}>
          <img src="/images/icon-facebook.svg" alt="facebook icon" />
          <img src="/images/icon-twitter.svg" alt="twitter icon" />
          <img src="/images/icon-pinterest.svg" alt="pinterest icon" />
          <img src="/images/icon-instagram.svg" alt="instagram icon" />
        </div>
      </div>
    </footer>
  );
}
