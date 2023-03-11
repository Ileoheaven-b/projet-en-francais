import styles from "../styles/category.module.css";
import stylesMobile from "../styles/category.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/Pasta2.jpg";
import thumbnail2 from "./imagesFrontPage/Bread_Color.jpg";
import thumbnail3 from "./imagesFrontPage/Cupcake2.png";
import { useMediaQuery } from "@react-hook/media-query";

export default function Cuisine() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <ul className={styles.list}>
            <Link
              className={styles.article}
              href="/articles/cuisine/articleFeta"
            >
              <div className={styles.articleTitle}>
                On mange vite et pas cher
              </div>
              <div className={styles.articleText}>
                Vous n'en avez pas marre des fast food malsains ? Découvrez une
                recette saine de poitrine de poulet grillée.
              </div>
              <Image
                className={styles.articleImage}
                src={thumbnail1}
                alt="Image d'une IA"
                layout="responsive"
              />
            </Link>

            <Link
              className={styles.article}
              href="/articles/cuisine/articleCoffee"
            >
              <div className={styles.articleTitle}>Retour à la quarantaine</div>
              <div className={styles.articleText}>
                Pour "célébrer" le 3e anniversaire de la quarantaine,
                rappelons-nous quelques tendances virales de la cuisine de cette
                période...
              </div>
              <Image
                className={styles.articleImage}
                src={thumbnail2}
                alt="I"
                layout="responsive"
              />
            </Link>

            <Link
              className={styles.article}
              href="/articles/cuisine/articleCupcake"
            >
              <div className={styles.articleTitle}>
                Quelque chose de doux pour finir
              </div>
              <div className={styles.articleText}>
                Si vous avez envie de quelque chose de sucré, facile à préparer
                et bon marché, c'est la recette parfaite...
              </div>
              <Image
                className={styles.articleImage}
                src={thumbnail3}
                alt="I"
                layout="responsive"
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
                src={thumbnail1}
                alt="Image d'une IA"
                layout="responsive"
              />
            </Link>

            <Link
              className={stylesMobile.article}
              href="/articles/cuisine/articleCoffee"
            >
              <div className={stylesMobile.articleTitle}>Retour à la quarantaine</div>
              <div className={stylesMobile.articleText}>
                Pour "célébrer" le 3e anniversaire de la quarantaine,
                rappelons-nous quelques tendances virales de la cuisine de cette
                période...
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail2}
                alt="I"
                layout="responsive"
              />
            </Link>

            <Link
              className={stylesMobile.article}
              href="/articles/cuisine/articleCupcake"
            >
              <div className={stylesMobile.articleTitle}>
                Quelque chose de doux pour finir
              </div>
              <div className={stylesMobile.articleText}>
                Si vous avez envie de quelque chose de sucré, facile à préparer
                et bon marché, c'est la recette parfaite...
              </div>
              <Image
                className={stylesMobile.articleImage}
                src={thumbnail3}
                alt="I"
                layout="responsive"
              />
            </Link>
          </ul>
        </div>
      </>
    );
  };

  return ComponentChange();
}
