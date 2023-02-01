import styles from "../styles/category.module.css";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/Irish.png";
import { useMediaQuery } from "@react-hook/media-query";

export default function Libre() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <ul className={styles.list}>
            <Link
              className={styles.articleHorizontal}
              href="/articles/libre/articleAnniversaire"
            >
              <div>
                <div className={styles.articleTitle}>
                  Où pouvez-vous avoir un anniversaire?
                </div>
                <div className={styles.articleText}>
                  CRAZY PUB EST UN ENDROIT PARFAIT POUR LES FÊTES
                  D'ANNIVERSAIRE. LES LA VUE EST SUPERBE ET LE MENU EST BON ET À
                  UN PRIX AVANTAGEUX...
                </div>
              </div>

              <Image
                className={styles.articleImageHorizontal}
                src={thumbnail1}
                alt="Image d'une spectacle"
              />
            </Link>
          </ul>
        </div>
      </>
    ) : (
      <>
        <div className={styles.homeContainer}>
          <ul className={styles.list}>
            <Link
              className={styles.article}
              href="/articles/libre/articleAnniversaire"
            >
              <div>
                <div className={styles.articleTitle}>
                  Où pouvez-vous avoir un anniversaire?
                </div>
                <div className={styles.articleText}>
                  CRAZY PUB EST UN ENDROIT PARFAIT POUR LES FÊTES
                  D'ANNIVERSAIRE. LES LA VUE EST SUPERBE ET LE MENU EST BON ET À
                  UN PRIX AVANTAGEUX...
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
  };

  return ComponentChange();
}
