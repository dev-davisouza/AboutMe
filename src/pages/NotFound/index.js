import MainButton from "components/MainButton";
import styles from "./NotFound.module.css";
import error404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const history = useNavigate();

  return (
    <div className={styles.conteudoContainer}>
      <span className={styles.texto404}>404</span>

      <h1 className={styles.titulo}>Ops! Page not found.</h1>

      <p className={styles.paragrafo}>
        See if this link is what you search for.
      </p>

      <div className={styles.botaoContainer} onClick={() => history(-1)}>
        <MainButton size="lg">Voltar</MainButton>
      </div>

      <img
        src={error404}
        alt="Cachorro de óculos "
        className={styles.imagemCachorro}
      />
    </div>
  );
}
