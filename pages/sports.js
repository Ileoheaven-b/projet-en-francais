import styles from "../styles/category.module.css";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/Cornisa.jpg";

export default function Sports() {
  return (
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
              Avez-vous déjà eu envie de pratiquer un sport, mais vous ne saviez
              pas où ?Cet article vous donnera un aperçu des options dont vous
              disposez localement ! Nos journalistes ont analysé toutes les
              options pour faire du sport à Botosani...
            </div>
            <Image
              className={styles.articleImage}
              src={thumbnail1}
              alt=""
            />
          </Link>
        </ul>
      </div>
    </>
  );
}
