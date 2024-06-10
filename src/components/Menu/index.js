import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navigation}>
        <MenuLink pathName="/">Home</MenuLink>

        <MenuLink pathName="/about-me">About me</MenuLink>
      </nav>
    </header>
  );
}

function MenuLink({ pathName, children }) {
  const location = useLocation();

  return (
    <Link
      className={`${styles.navigation} ${
        location.pathname === pathName ? styles.highlighted_link : ""
      } `}
      to={pathName}
    >
      {children}
    </Link>
  );
}
