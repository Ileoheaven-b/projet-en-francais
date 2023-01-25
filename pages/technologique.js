import styles from "../styles/category.module.css";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/RobotImage2.png";
import thumbnail2 from "./imagesFrontPage/RobotImage3.png";

export default function Technologique() {
  return (
    <>
      <div className={styles.homeContainer}>
        <ul className={styles.list}>
          <Link
            className={styles.article}
            href="/articles/technologique/articleAI"
          >
            <div className={styles.articleTitle}>
              ChatGPT : Le partenaire d'étude intelligent
            </div>
            <div className={styles.articleText}>
              ChatGPT, un outil Ai avancé qui pourrait aider les étudiants à se
              développer dans un large éventail d'aspects de leur éducation,
              tels que l'organisation des ressources et des informations,
              l'écriture, la communication et le développement linguistique...
            </div>
            <Image
              className={styles.articleImage}
              src={thumbnail1}
              alt="Image d'une IA"
              layout="responsive"
            />
          </Link>

          <Link
            className={styles.article}
            href="/articles/technologique/articleImagesAI"
          >
            <div className={styles.articleTitle}>
              Explorer la créativité à travers des images générées par l'IA : Un
              regard sur la diffusion stable
            </div>
            <div className={styles.articleText}>
              Les images générées par l'IA, notamment lorsqu'elles utilisent la
              méthode de diffusion stable, offrent aux élèves un nouveau moyen
              de s'exprimer et d'exercer leur créativité.
            </div>
            <Image
              className={styles.articleImage}
              src={thumbnail2}
              alt="Image d'une IA"
              layout="responsive"
            />
          </Link>
        </ul>
      </div>
    </>
  );
}
