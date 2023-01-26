import styles from "../styles/index.module.css";
import stylesMobile from "../styles/index.mobile.module.css";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/RobotImage2.png";
import thumbnail2 from "./imagesFrontPage/Luceafar.jpg";
import thumbnail3 from "./imagesFrontPage/Irish.png";
import thumbnail4 from "./imagesFrontPage/Pasta2.jpg";

export default function Home() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.home}>
            <Link
              className={styles.articleSide}
              href="/articles/culture/articleLuceafarul"
            >
              <div>
                <div className={styles.articleTitle}>HYPÉRION</div>
                <div className={styles.articleText}>
                  IMPRESSIONS SUR LE SPECTACLE "LUCEAFĂRUL" ET SUR LA MISE EN
                  SCÈNE D'UN CLASSIQUE LITTÉRAIRE
                </div>
                <Image
                  className={styles.articleImage}
                  src={thumbnail2}
                  alt="Image d'une spectacle"
                  layout="responsive"
                />
              </div>

              <hr className={styles.bar}></hr>
            </Link>

            <hr className={styles.verticalBar}></hr>

            <Link
              className={styles.articleCenter}
              href="/articles/technologique/articleAI"
            >
              <div className={styles.articleTitle}>
                ChatGPT : Le partenaire d'étude intelligent
              </div>
              <div className={styles.articleText}>
                ChatGPT, un outil Ai avancé qui pourrait aider les étudiants à
                se développer dans un large éventail d'aspects de leur
                éducation, tels que l'organisation des ressources et des
                informations, l'écriture, la communication et le développement
                linguistique...
              </div>
              <Image
                className={styles.articleImage}
                src={thumbnail1}
                alt="Image d'une IA"
                layout="responsive"
              />
            </Link>

            <Link
              className={styles.articleSide}
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
                <Image
                  className={styles.articleImage}
                  src={thumbnail3}
                  alt="Image de la "
                  layout="responsive"
                />
              </div>

              <hr className={styles.bar}></hr>
            </Link>

            <hr className={styles.verticalBar}></hr>

            <Link
              className={styles.articleCenter}
              href="/articles/cuisine/articleFeta"
            >
              <div className={styles.articleTitle}>
                ON MANGE VITE ET PAS CHER!
              </div>
              <div className={styles.articleText}>
                Vous n'en avez pas marre des fast food malsains ? Découvrez une
                recette saine de poitrine de poulet grillée.
              </div>
              <Image
                className={styles.articleImage}
                src={thumbnail4}
                alt="Image de la feta"
                layout="responsive"
              />
            </Link>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className={stylesMobile.homeContainer}>
          <div className={stylesMobile.home}>
            <Link
              className={stylesMobile.articleCenter}
              href="/articles/technologique/articleAI"
            >
              <div className={stylesMobile.articleTitle}>
                ChatGPT : Le partenaire d'étude intelligent
              </div>
              <div className={stylesMobile.articleText}>
                ChatGPT, un outil Ai avancé qui pourrait aider les étudiants à
                se développer dans un large éventail d'aspects de leur
                éducation, tels que l'organisation des ressources et des
                informations, l'écriture, la communication et le développement
                linguistique...
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail1}
                alt="Image d'une IA"
                layout="responsive"
              />
            </Link>

            <Link
              className={stylesMobile.articleCenter}
              href="/articles/culture/articleLuceafarul"
            >
              <div className={stylesMobile.articleTitle}>HYPÉRION</div>
              <div className={stylesMobile.articleText}>
                IMPRESSIONS SUR LE SPECTACLE "LUCEAFĂRUL" ET SUR LA MISE EN
                SCÈNE D'UN CLASSIQUE LITTÉRAIRE
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail2}
                alt="Image d'une spectacle"
                layout="responsive"
              />
            </Link>

            <Link
              className={stylesMobile.articleCenter}
              href="/articles/libre/articleAnniversaire"
            >
              <div className={stylesMobile.articleTitle}>
                Où pouvez-vous avoir un anniversaire?
              </div>
              <div className={stylesMobile.articleText}>
                CRAZY PUB EST UN ENDROIT PARFAIT POUR LES FÊTES D'ANNIVERSAIRE.
                LES LA VUE EST SUPERBE ET LE MENU EST BON ET À UN PRIX
                AVANTAGEUX...
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail3}
                alt="Image d'une spectacle"
                layout="responsive"
              />
            </Link>

            <Link
              className={stylesMobile.articleCenter}
              href="/articles/cuisine/articleFeta"
            >
              <div className={stylesMobile.articleTitle}>
                ON MANGE VITE ET PAS CHER!
              </div>
              <div className={stylesMobile.articleText}>
                Vous n'en avez pas marre des fast food malsains ? Découvrez une
                recette saine de poitrine de poulet grillée.
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail4}
                alt="Image de la feta"
                layout="responsive"
              />
            </Link>
          </div>
        </div>
      </>
    );
  };
  return ComponentChange();
}
