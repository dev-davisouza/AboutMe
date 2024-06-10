import styles from "./AboutMe.module.css";
import ModelPost from "components/ModelPost";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/coque.JPEG";

export default function AboutMe() {
  return (
    <ModelPost fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Hey, I'm Davi</h3>
      <img
        className={styles.fotoSobreMim}
        src={fotoSobreMim}
        alt="Davi Souza sorrindo na foto"
      />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        libero illum consequuntur impedit quae possimus, fugit, fugiat qui quam
        debitis porro! Aut repellat explicabo maiores, quia eum accusantium
        beatae nisi ipsum? Sunt voluptate reprehenderit adipisci soluta aperiam
        animi id ab neque dignissimos nemo sequi commodi fugiat illum quidem
        debitis qui, eveniet omnis laborum, repudiandae corporis quo nostrum
        vero consectetur iure? Id numquam quas autem, laborum nobis veniam
        distinctio delectus aspernatur! Eaque culpa quas sunt quos quam, sint
        debitis placeat iure dicta atque quibusdam fugit eveniet repellendus
        exercitationem molestias aspernatur et voluptate repudiandae dolore
        totam ipsa ipsam fuga. Non vero est dolorum sint, dignissimos quos
        repellat quas modi, ratione fugit, expedita tenetur quo. Numquam nihil
        iure sapiente asperiores enim sit sunt voluptate voluptates tempora a
        illum, suscipit hic cumque, omnis illo qui rem error dolor temporibus.
        Culpa nam in itaque pariatur eum et corporis asperiores deleniti totam
        enim reprehenderit impedit expedita incidunt distinctio quae maxime eos
        optio ea, atque facere! Ab totam velit autem eligendi exercitationem.
        Neque voluptates minus modi obcaecati aliquid, iste, doloremque aliquam
        eligendi eaque nisi fuga soluta nihil illum suscipit? Libero,
        voluptatum, tempore consequatur illo explicabo reprehenderit mollitia
        vero minima in, ea incidunt inventore nesciunt consequuntur tenetur
        impedit.
      </p>
    </ModelPost>
  );
}
