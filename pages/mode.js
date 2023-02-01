import styles from "../styles/category.module.css";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/Clothes1.jpeg";

export default function Mode() {
  return (
    <>
      <div className={styles.homeContainer}>
        <ul className={styles.list}>
          <Link className={styles.article} href="/articles/mode/articleMode1">
            <div className={styles.articleTitle}>
              Mode. Pourquoi ne pas s'habiller avec style quand on en a
              l'occasion ?
            </div>
            <div className={styles.articleText}>
              Les boutiques d’occasion et les outlets sont une excellente
              alternative aux magasins de vêtements ordinaires, que tu aimes les
              vêtements vintage, tu te soucies de l'environnement ou que tu veux
              simplement économiser de l'argent...
            </div>
            <Image
              className={styles.articleImage}
              src={thumbnail1}
              alt="Image d'une IA"
            />
          </Link>
        </ul>
      </div>
    </>
  );
}
