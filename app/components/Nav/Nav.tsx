"use client";

//import Link from "next/link";
import { usePathname } from "next/navigation";

//import styles from "../styles/layout.module.css";

const Nav = () => {
  const pathname = usePathname();

  //TODO: Replace with better nav
  return (
    <header>
      {/* <nav className={styles.nav}>
        <Link
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.link} ${
            pathname === "/verify" ? styles.active : ""
          }`}
          href="/verify"
        >
          Verify
        </Link>
        <Link
          className={`${styles.link} ${
            pathname === "/quotes" ? styles.active : ""
          }`}
          href="/quotes"
        >
          Quotes
        </Link>
      </nav> */}
    </header>
  );
};

export default Nav;
