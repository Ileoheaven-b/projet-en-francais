import styles from "../styles/category.module.css";
import stylesMobile from "../styles/category.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/Cornisa.jpg";
import { useMediaQuery } from "@react-hook/media-query";

export default function Sports() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <ul className={styles.list}>
            <Link
              className={styles.article}
              href="/articles/sports/articleSport1"
            >
              <div className={styles.articleTitle}>
                Athlètes locaux. Où commencer ma carrière ?
              </div>
              <div className={styles.articleText}>
                Avez-vous déjà eu envie de pratiquer un sport, mais vous ne
                saviez pas où ?Cet article vous donnera un aperçu des options
                dont vous disposez localement ! Nos journalistes ont analysé
                toutes les options pour faire du sport à Botosani...
              </div>
              <Image className={styles.articleImage} src={thumbnail1} alt="" />
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
              href="/articles/sports/articleSport1"
            >
              <div className={stylesMobile.articleTitle}>
                Athlètes locaux. Où commencer ma carrière ?
              </div>
              <div className={stylesMobile.articleText}>
                Avez-vous déjà eu envie de pratiquer un sport, mais vous ne
                saviez pas où ?Cet article vous donnera un aperçu des options
                dont vous disposez localement ! Nos journalistes ont analysé
                toutes les options pour faire du sport à Botosani...
              </div>
              <Image className={stylesMobile.articleImage} src={thumbnail1} alt="" />
            </Link>
          </ul>
        </div>
      </>
    );
  };

  return ComponentChange();
}
