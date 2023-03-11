import styles from "../styles/category.module.css";
import stylesMobile from "../styles/category.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/Irish.png";
import thumbnail2 from "./imagesFrontPage/Main_Image_-_Les_Cafes.png";
import { useMediaQuery } from "@react-hook/media-query";

export default function Libre() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <ul className={styles.list}>
            <Link
              className={styles.article}
              href="/articles/libre/articleLesCafes"
            >
              <div>
                <div className={styles.articleTitle}>
                  Les cafes dans Botosani
                </div>
                <div className={styles.articleText}>
                  Les cafés oü les jeunes de Botosani choisissent de passer leur
                  temps libre...
                </div>
              </div>

              <Image
                className={styles.articleImage}
                src={thumbnail2}
                alt="Image d'une restaurant"
              />
            </Link>

            <Link
              className={styles.articleHorizontal}
              href="/articles/libre/articleAnniversaire"
            >
              <div>
                <div className={styles.articleTitle}>
                  Où pouvez-vous avoir un anniversaire?
                </div>
                <div className={styles.articleText}>
                  Crazy pub est un endroit parfait pour les fêtes
                  d'anniversaire. Les la vue est superbe et le menu est bon et à
                  un prix avantageux...
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
        <div className={stylesMobile.homeContainer}>
          <ul className={stylesMobile.list}>
            <Link
              className={stylesMobile.article}
              href="/articles/libre/articleLesCafes"
            >
              <div>
                <div className={stylesMobile.articleTitle}>
                  Les cafes dans Botosani
                </div>
                <div className={stylesMobile.articleText}>
                  Les cafés oü les jeunes de Botosani choisissent de passer leur
                  temps libre...
                </div>
              </div>

              <Image
                className={stylesMobile.articleImage}
                src={thumbnail2}
                alt="Image d'une restaurant"
              />
            </Link>

            <Link
              className={stylesMobile.article}
              href="/articles/libre/articleAnniversaire"
            >
              <div>
                <div className={stylesMobile.articleTitle}>
                  Où pouvez-vous avoir un anniversaire?
                </div>
                <div className={stylesMobile.articleText}>
                  Crazy pub est un endroit parfait pour les fêtes
                  d'anniversaire. Les la vue est superbe et le menu est bon et à
                  un prix avantageux...
                </div>
              </div>

              <Image
                className={stylesMobile.articleImage}
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
