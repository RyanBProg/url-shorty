import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <header>
      <a href="#" className={styles.headerLogo}>
        Shorty
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </nav>
      <div>
        <a href="#">Login</a>
        <button className={styles.signinBtn}>Sign Up</button>
      </div>
    </header>
  );
}
