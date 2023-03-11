import styles from "../styles/index.module.css";
import stylesMobile from "../styles/index.mobile.module.css";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/RobotImage2.png";
import thumbnail2 from "./imagesFrontPage/Luceafar.jpg";
import thumbnail3 from "./imagesFrontPage/Main_Image_-_Les_Cafes.png";
import thumbnail4 from "./imagesFrontPage/Cornisa.jpg";
import thumbnail5 from "./imagesFrontPage/Pasta2.jpg";
import thumbnail6 from "./imagesFrontPage/Clothes1.jpeg";

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
                  Impressions sur le spectacle "LUCEAFĂRUL" et sur la mise en
                  scène d'un classique littéraire
                </div>
                <Image
                  className={styles.articleImage}
                  src={thumbnail2}
                  alt="Image d'une spectacle"
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
                ChatGPT, votre propre compagnon d'étude
              </div>
              <div className={styles.articleText}>
                Êtes-vous toujours à la recherche de nouvelles façons
                d'apprendre et d'améliorer vos notes ? ChatGPT est votre nouveau
                partenaire d'étude.
              </div>
              <Image
                className={styles.articleImage}
                src={thumbnail1}
                alt="Image d'une IA"
              />
            </Link>

            <hr className={styles.verticalBar}></hr>

            <Link
              className={styles.articleSide}
              href="/articles/cuisine/articleFeta"
            >
              <div>
                <div className={styles.articleTitle}>
                  On mange vite et pas cher
                </div>
                <div className={styles.articleText}>
                  Vous n'en avez pas marre des fast food malsains ? Découvrez
                  une recette saine de poitrine de poulet grillée.
                </div>
                <Image
                  className={styles.articleImage}
                  src={thumbnail5}
                  alt="Image de feta"
                />
              </div>

              <hr className={styles.bar}></hr>
            </Link>

            <Link
              className={styles.articleSide}
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
                <Image
                  className={styles.articleImage}
                  src={thumbnail3}
                  alt="Image d'une restaurant"
                />
              </div>

              <hr className={styles.bar}></hr>
            </Link>

            <hr className={styles.verticalBar}></hr>

            <Link
              className={styles.articleCenter}
              href="/articles/mode/articleMode1"
            >
              <div className={styles.articleTitle}>
                Mode. Pourquoi ne pas s'habiller avec style quand on en a
                l'occasion ?
              </div>
              <div className={styles.articleText}>
                Les boutiques d’occasion et les outlets sont une excellente
                alternative aux magasins de vêtements ordinaires, que tu aimes
                les vêtements vintage, tu te soucies de l'environnement ou que
                tu veux simplement économiser de l'argent...
              </div>
              <Image className={styles.articleImage} src={thumbnail6} alt="" />
            </Link>

            <hr className={styles.verticalBar}></hr>

            <Link
              className={styles.articleSide}
              href="/articles/sports/articleSport1"
            >
              <div>
                <div className={styles.articleTitle}>
                  Athlètes locaux. Où commencer ma carrière?
                </div>
                <div className={styles.articleText}>
                  Avez-vous déjà eu envie de pratiquer un sport, mais vous ne
                  saviez pas où ?Cet article vous donnera un aperçu des options
                  dont vous disposez localement ! Nos journalistes ont analysé
                  toutes les options pour faire du sport à Botosani...
                </div>
                <Image
                  className={styles.articleImage}
                  src={thumbnail4}
                  alt="Cornisa"
                />
              </div>

              <hr className={styles.bar}></hr>
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
                ChatGPT, votre propre compagnon d'étude
              </div>
              <div className={stylesMobile.articleText}>
                Êtes-vous toujours à la recherche de nouvelles façons
                d'apprendre et d'améliorer vos notes ? ChatGPT est votre nouveau
                partenaire d'étude.
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail1}
                alt="Image d'une IA"
              />
            </Link>

            <Link
              className={stylesMobile.articleCenter}
              href="/articles/culture/articleLuceafarul"
            >
              <div className={stylesMobile.articleTitle}>HYPÉRION</div>
              <div className={stylesMobile.articleText}>
                Impressions sur le spectacle "LUCEAFĂRUL" et sur la mise en
                scène d'un classique littéraire
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail2}
                alt="Image d'une spectacle"
              />
            </Link>

            <Link
              className={stylesMobile.articleCenter}
              href="/articles/mode/articleMode1"
            >
              <div className={stylesMobile.articleTitle}>
                Mode. Pourquoi ne pas s'habiller avec style quand on en a
                l'occasion?
              </div>
              <div className={stylesMobile.articleText}>
                Les boutiques d’occasion et les outlets sont une excellente
                alternative aux magasins de vêtements ordinaires, que tu aimes
                les vêtements vintage, tu te soucies de l'environnement ou que
                tu veux simplement économiser de l'argent...
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail6}
                alt="Image d'une spectacle"
              />
            </Link>

            <Link
              className={stylesMobile.articleCenter}
              href="/articles/libre/articleLesCafes"
            >
              <div className={stylesMobile.articleTitle}>
                Les cafes dans Botosani
              </div>
              <div className={stylesMobile.articleText}>
                Les cafés oü les jeunes de Botosani choisissent de passer leur
                temps libre...
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail3}
                alt="Image d'une spectacle"
              />
            </Link>

            <Link
              className={stylesMobile.articleCenter}
              href="/articles/cuisine/articleFeta"
            >
              <div className={stylesMobile.articleTitle}>
                On mange vite et pas cher
              </div>
              <div className={stylesMobile.articleText}>
                Vous n'en avez pas marre des fast food malsains ? Découvrez une
                recette saine de poitrine de poulet grillée.
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail5}
                alt="Image de la feta"
              />
            </Link>

            <Link
              className={stylesMobile.articleCenter}
              href="/articles/sports/articleSport1"
            >
              <div className={stylesMobile.articleTitle}>
                Athlètes locaux. Où commencer ma carrière?
              </div>
              <div className={stylesMobile.articleText}>
                Avez-vous déjà eu envie de pratiquer un sport, mais vous ne
                saviez pas où ?Cet article vous donnera un aperçu des options
                dont vous disposez localement ! Nos journalistes ont analysé
                toutes les options pour faire du sport à Botosani...
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail4}
                alt="Cornisa"
              />
            </Link>
          </div>
        </div>
      </>
    );
  };
  return ComponentChange();
}
