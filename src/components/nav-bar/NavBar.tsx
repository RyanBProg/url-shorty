import styles from "./NavBar.module.scss";
import { useState } from "react";
import { MenuAction } from "../../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenFinished, setMenuOpenFinished] = useState(false);

  const toggleMenu = (action: MenuAction) => {
    if (action === "open") {
      setMenuOpen(true);
      setTimeout(() => setMenuOpenFinished(true), 600);
    }

    if (action === "close") {
      setMenuOpen(false);
      setMenuOpenFinished(false);
    }
  };

  return (
    <header>
      <a href="#" className={styles.headerLogo}>
        Shorty
      </a>
      {menuOpen ? (
        <button className={styles.menuBtn} onClick={() => toggleMenu("close")}>
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </button>
      ) : (
        <button className={styles.menuBtn} onClick={() => toggleMenu("open")}>
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
      )}
      <div
        className={`${styles.navContainer} ${
          menuOpen && styles.mobileNavOpen
        } ${menuOpenFinished && styles.mobileNavZ}`}>
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
        <div className={styles.headerBtns}>
          <a href="#">Login</a>
          <button className={styles.signinBtn}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}
