import styles from "../styles/category.module.css";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "./imagesFrontPage/Pasta2.jpg";
import thumbnail2 from "./imagesFrontPage/Coffee2.jpg";
import thumbnail3 from "./imagesFrontPage/Cupcake2.png";

export default function Cuisine() {
  return (
    <>
      <div className={styles.homeContainer}>
        <ul className={styles.list}>
          <Link className={styles.article} href="/articles/cuisine/articleFeta">
            <div className={styles.articleTitle}>
              ON MANGE VITE ET PAS CHER!
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
            <div className={styles.articleTitle}>RETOUR À LA QUARANTAINE</div>
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
              Si vous avez envie de quelque chose de sucré, facile à préparer et
              bon marché, c'est la recette parfaite...
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
  );
}
