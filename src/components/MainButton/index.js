import styles from "./MainButton.module.css";

export default function MainButton(props, size) {
  return (
    <button className={`${styles.readButton} ${styles[size]} `}>
      {props.children}
    </button>
  );
}
