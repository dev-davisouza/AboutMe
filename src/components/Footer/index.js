import styles from "./Footer.module.css";
import { ReactComponent as Mark } from "assets/marca_registrada.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Mark />
      Developed by me with Alura!
    </footer>
  );
}
