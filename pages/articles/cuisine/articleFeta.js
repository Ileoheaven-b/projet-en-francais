import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import food1 from "../../imagesFrontPage/Pasta2.jpg";
import food2 from "../../imagesFrontPage/Grasutu.png";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <div className={styles.title}>
              ON MANGE VITE ET PAS CHER!
              <div className={styles.imageSmallText}>- Janvier, 2023</div>
            </div>

            <div className={styles.empty}></div>

            <Image
              className={styles.image}
              src={food1}
              alt=""
              layout="responsive"
            />
            <div className={styles.subTitle}>
              Vous n'en avez pas marre des fast food malsains ? Découvrez une
              recette saine de poitrine de poulet grillée.
            </div>

            <div className={styles.empty}></div>
            <div className={styles.twoElements}>
              <div className={styles.text}>
                Ingrédients <br></br>
                ~500 g de tomates cerises<br></br>
                250 g (1 morceau) de fromage feta grec<br></br>
                300g de pâtes<br></br>
                10 grandes feuilles de basilic frais, hachées + quelques autres
                pour la garniture<br></br>3 cuillères à soupe d'huile d'olive
                <br></br>2 cuillères à café d'origan<br></br>6 grosses gousses
                d'ail<br></br>
                poivre moulu<br></br>
                <div className={styles.empty}></div>
                Instructions: <br></br> Ajouter les tomates cerises et les
                gousses d'ail entières nettoyées dans une casserole en
                céramique. Déposer le bloc de feta dessus, au milieu du plateau.
                Assaisonner d'huile d'olive, d'origan et de poivre. Mettre au
                four pendant 25-30 minutes à 200°C, jusqu'à ce que les tomates
                soient tendres et mûres. Pendant ce temps, faire bouillir les
                pâtes selon les instructions sur le paquet.
              </div>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={food2}
                  alt="La Grasutu"
                  layout="responsive"
                />
                <div className={styles.imageSmallText}>- La Grasutu</div>
              </div>
            </div>
            <div className={styles.empty}></div>

            <div className={styles.text}>
              Quand c'est prêt, sortez le moule du four. Si vous n'aimez pas
              l'ail entier, vous pouvez l'écraser à la fourchette. Je le préfère
              entier, alors je l'ai laissé comme ça. Écraser la feta cuite au
              four avec une fourchette.Égouttez les pâtes et ajoutez-les sur la
              plaque. Ajouter quelques feuilles de basilic fraîchement coupées.
              Bien mélanger. Servir!
            </div>

            <div className={styles.empty}></div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className={stylesMobile.homeContainer}>
          <div className={stylesMobile.textBox}>
            <div className={stylesMobile.title}>
              ON MANGE VITE ET PAS CHER!
              <div className={stylesMobile.imageSmallText}>- Janvier, 2023</div>
            </div>

            <div className={stylesMobile.empty}></div>

            <Image
              className={stylesMobile.image}
              src={food1}
              alt=""
            />
            <div className={stylesMobile.subTitle}>
              Vous n'en avez pas marre des fast food malsains ? Découvrez une
              recette saine de poitrine de poulet grillée.
            </div>

            <div className={stylesMobile.empty}></div>
            <div className={stylesMobile.text}>
              Ingrédients <br></br>
              ~500 g de tomates cerises<br></br>
              250 g (1 morceau) de fromage feta grec<br></br>
              300g de pâtes<br></br>
              10 grandes feuilles de basilic frais, hachées + quelques autres
              pour la garniture<br></br>3 cuillères à soupe d'huile d'olive
              <br></br>2 cuillères à café d'origan<br></br>6 grosses gousses
              d'ail<br></br>
              poivre moulu<br></br>
              <div className={stylesMobile.empty}></div>
              Instructions: <br></br> Ajouter les tomates cerises et les gousses
              d'ail entières nettoyées dans une casserole en céramique. Déposer
              le bloc de feta dessus, au milieu du plateau. Assaisonner d'huile
              d'olive, d'origan et de poivre. Mettre au four pendant 25-30
              minutes à 200°C, jusqu'à ce que les tomates soient tendres et
              mûres. Pendant ce temps, faire bouillir les pâtes selon les
              instructions sur le paquet.
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={food2}
                alt="La Grasutu"
                layout="responsive"
              />
              <div className={stylesMobile.imageSmallText}>- La Grasutu</div>
            </div>
            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.text}>
              Quand c'est prêt, sortez le moule du four. Si vous n'aimez pas
              l'ail entier, vous pouvez l'écraser à la fourchette. Je le préfère
              entier, alors je l'ai laissé comme ça. Écraser la feta cuite au
              four avec une fourchette.Égouttez les pâtes et ajoutez-les sur la
              plaque. Ajouter quelques feuilles de basilic fraîchement coupées.
              Bien mélanger. Servir!
            </div>

            <div className={stylesMobile.empty}></div>
          </div>
        </div>
      </>
    );
  };

  return ComponentChange();
}
