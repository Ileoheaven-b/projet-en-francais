import styles from "../styles/category.module.css";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/Luceafar.jpg";

export default function Culture() {
  return (
    <>
      <div className={styles.homeContainer}>
        <ul className={styles.list}>
          <Link
            className={styles.articleHorizontal}
            href="/articles/technologique/articleAI"
          >
            <div>
              <div className={styles.articleTitle}>HYPÉRION</div>
              <div className={styles.articleText}>
                IMPRESSIONS SUR LE SPECTACLE "LUCEAFĂRUL" ET SUR LA MISE EN
                SCÈNE D'UN CLASSIQUE LITTÉRAIRE
                <div className={styles.empty}></div>
                Quand je suis entré dans la salle de théâtre Vasilache le 15
                janvier pour voir l'adaptation scénique d'un poème bien connu,
                je ne m'attendais pas à repartir les larmes aux yeux.
                "Luceafărul", réalisé par Ion Sapdaru, est bien sûr l'adaptation
                du célèbre poème de Mihai Eminescu du même nom. Avant de
                regarder l'émission, on nous promet une histoire d'amour sans
                fin, mais la puissance avec laquelle elle est présentée n'hésite
                pas à étonner le public. La performance offerte par les acteurs,
                ainsi que le décor, on fait ressentir le spectacle à la fois
                comme un rêve chaotique et comme une invasion de la vie privée
                par les forces divines...
              </div>
            </div>

            <Image
              className={styles.articleImage}
              src={thumbnail1}
              alt="Image d'une spectacle"
            />
          </Link>
        </ul>
      </div>
    </>
  );
}
