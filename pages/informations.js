import styles from "../styles/informations.module.css";
import Link from "next/link";

export default function Informations() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.textBox}>
          <div className={styles.title}>Qui? Qu'est-ce que le? Pourquoi?</div>
          <div className={styles.text}>
            Il s'agit d'un projet réalisé en une semaine où notre classe était
            divisée en groupes, chacun devant rédiger des articles pour une
            rubrique de ce journal. Lors de la planification du projet, nous
            avons trouvé une idée intéressante pour créer une version numérique
            de ce journal, ainsi cette page Web est née. Il est tout à fait
            possible que je continue à améliorer ce site, il y a encore de
            nombreux aspects qui peuvent être améliorés et dans certains cas
            corrigés. Tous les articles sont rédigés par les équipes
            éditoriales, que vous pouvez retrouver plus bas dans la page à côté
            des informations.
          </div>
        </div>

        <div className={styles.textBox}>
          <div className={styles.title}>Contact</div>
          <div className={styles.text}>
            Email de la classe: example.email@gmail.com <br></br> Github des
            créateurs: <br></br>{" "}
            <a className={styles.link} href="https://github.com/distroierONE">
              Serban
            </a>{" "}
            <br></br>{" "}
            <a className={styles.link} href="https://github.com/Ileoheaven-b">
              Victor
            </a>{" "}
            <br></br>{" "}
            <a className={styles.link} href="https://github.com/Theosux">
              Teodor
            </a>{" "}
            <br></br>{" "}
            <a className={styles.link} href="https://github.com/GeneRIXGMI">
              Sebastian
            </a>{" "}
            <br></br>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
