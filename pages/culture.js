import styles from "../styles/category.module.css";
import stylesMobile from "../styles/category.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/Luceafar.jpg";
import { useMediaQuery } from "@react-hook/media-query";

export default function Culture() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <ul className={styles.list}>
            <Link
              className={styles.articleHorizontal}
              href="/articles/culture/articleLuceafarul"
            >
              <div>
                <div className={styles.articleTitle}>HYPÉRION</div>
                <div className={styles.articleText}>
                  Impressions sur le spectacle "LUCEAFĂRUL" et sur la mise en
                  scène d'un classique littéraire
                  <div className={styles.empty}></div>
                  Quand je suis entré dans la salle de théâtre Vasilache le 15
                  janvier pour voir l'adaptation scénique d'un poème bien connu,
                  je ne m'attendais pas à repartir les larmes aux yeux.
                  "Luceafărul", réalisé par Ion Sapdaru, est bien sûr
                  l'adaptation du célèbre poème de Mihai Eminescu du même nom.
                  Avant de regarder l'émission, on nous promet une histoire
                  d'amour sans fin, mais la puissance avec laquelle elle est
                  présentée n'hésite pas à étonner le public. La performance
                  offerte par les acteurs, ainsi que le décor, on fait ressentir
                  le spectacle à la fois comme un rêve chaotique et comme une
                  invasion de la vie privée par les forces divines...
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
              href="/articles/culture/articleLuceafarul"
            >
              <div>
                <div className={stylesMobile.articleTitle}>HYPÉRION</div>
                <div className={stylesMobile.articleText}>
                  Impressions sur le spectacle "LUCEAFĂRUL" et sur la mise en
                  scène d'un classique littéraire
                  <br></br>
                  <br></br>
                  Quand je suis entré dans la salle de théâtre Vasilache le 15
                  janvier pour voir l'adaptation scénique d'un poème bien connu,
                  je ne m'attendais pas à repartir les larmes aux yeux.
                  "Luceafărul", réalisé par Ion Sapdaru, est bien sûr
                  l'adaptation du célèbre poème de Mihai Eminescu du même nom.
                  Avant de regarder l'émission, on nous promet une histoire
                  d'amour sans fin, mais la puissance avec laquelle elle est
                  présentée n'hésite pas à étonner le public. La performance
                  offerte par les acteurs, ainsi que le décor, on fait ressentir
                  le spectacle à la fois comme un rêve chaotique et comme une
                  invasion de la vie privée par les forces divines...
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
