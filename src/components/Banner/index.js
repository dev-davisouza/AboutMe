import styles from "./Banner.module.css";
import colorfulCircle from "assets/circulo_colorido.png";
import Me from "assets/mirrot.JPEG";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.title}>Hey World!</h1>

        <p className={styles.paragraph}>
          Fala galera! Eu me chamo Davi Souza, desenvolvedor fullstack. Esse é o
          meu mini portifólio estilizado para vocês, aproveitem! :D
        </p>
      </div>

      <div className={styles.images}>
        <img
          className={styles.colorfulCircle}
          src={colorfulCircle}
          alt="Colorful circle"
          aria-hidden={true}
        />

        <img className={styles.myPicture} src={Me} alt="" />
      </div>
    </div>
  );
}
