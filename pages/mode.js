import styles from "../styles/category.module.css";
import stylesMobile from "../styles/category.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/Clothes1.jpeg";
import { useMediaQuery } from "@react-hook/media-query";

export default function Mode() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
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
                alternative aux magasins de vêtements ordinaires, que tu aimes
                les vêtements vintage, tu te soucies de l'environnement ou que
                tu veux simplement économiser de l'argent...
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
    ) : (
      <>
        <div className={stylesMobile.homeContainer}>
          <ul className={stylesMobile.list}>
            <Link className={stylesMobile.article} href="/articles/mode/articleMode1">
              <div className={stylesMobile.articleTitle}>
                Mode. Pourquoi ne pas s'habiller avec style quand on en a
                l'occasion ?
              </div>
              <div className={stylesMobile.articleText}>
                Les boutiques d’occasion et les outlets sont une excellente
                alternative aux magasins de vêtements ordinaires, que tu aimes
                les vêtements vintage, tu te soucies de l'environnement ou que
                tu veux simplement économiser de l'argent...
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail1}
                alt="Image d'une IA"
              />
            </Link>
          </ul>
        </div>
      </>
    );
  };

  return ComponentChange();
}
