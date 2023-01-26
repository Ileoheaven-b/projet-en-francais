import styles from "../styles/index.module.css";
import stylesMobile from "../styles/index.mobile.module.css";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/RobotImage2.png";
import thumbnail2 from "./imagesFrontPage/Luceafar.jpg";

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

            <Link className={styles.articleSide} href="/other">
              <div>
                <div className={styles.articleTitle}>Placeholder Title</div>
                <div className={styles.articleText}>
                  Lorem ipsum dolor parte mare de calamare din marea cea tare si
                  bate vantu trece frunza Lorem ipsum dolor parte mare de
                  calamare din marea cea tare si bate vantu trece frunzaLorem
                  ipsum dolor parte mare de calamare din marea cea tare si bate
                  vantu trece frunzaLorem ipsum dolor parte mare de calamare din
                  marea cea tare si bate vantu trece frunzaLorem ipsum dolor
                  parte mare de calamare din marea cea tare si bate vantu trece
                  frunzaLorem ipsum dolor parte mare de calamare din marea cea
                  tare si bate vantu trece frunzaLorem ipsum dolor parte mare de
                  calamare din marea cea tare si bate vantu trece frunza
                </div>
              </div>

              <hr className={styles.bar}></hr>
            </Link>

            <hr className={styles.verticalBar}></hr>

            <Link className={styles.articleCenter} href="/other">
              <div className={styles.articleTitle}>Placeholder Title</div>
              <div className={styles.articleText}>
                Lorem ipsum dolor parte mare de calamare din marea cea tare si
                bate vantu trece frunzaLorem ipsum dolor parte mare de calamare
                din marea cea tare si bate vantu trece frunzaLorem ipsum dolor
                parte mare de calamare din marea cea tare si bate vantu trece
                frunzaLorem ipsum dolor parte mare de calamare din marea cea
                tare si bate vantu trece frunzaLorem ipsum dolor parte mare de
                calamare din marea cea tare si bate vantu trece frunzaLorem
                ipsum dolor parte mare de calamare din marea cea tare si bate
                vantu trece frunza
              </div>
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
          </div>
        </div>
      </>
    );
  };
  return ComponentChange();
}
