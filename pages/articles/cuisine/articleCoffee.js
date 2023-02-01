import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import robotImage from "../../imagesFrontPage/RobotImage2.png";
import food1 from "../../imagesFrontPage/Bread_Color.jpg";
import food2 from "../../imagesFrontPage/Coffee2.jpg";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <div className={styles.title}>
              RETOUR À LA QUARANTAINE
              <div className={styles.imageSmallText}>- Janvier, 2023</div>
            </div>

            <div className={styles.empty}></div>

            <Image className={styles.image} src={food1} alt="" />
            <div className={styles.subTitle}>
              Pour "célébrer" le 3e anniversaire de la quarantaine,
              rappelons-nous quelques tendances virales de la cuisine de cette
              période.
            </div>

            <div className={styles.empty}></div>
            <div className={styles.twoElements}>
              <div className={styles.subTitle}>
                Café Dalgona <br></br>
                Au début du confinement, sur tiktok, le café dalgona est devenu
                une chose. de nombreux influenceurs l'ont essayé au fur et à
                mesure qu'il gagnait en popularité. C'est une recette simple de
                2 cuillères à soupe de café, de sucre et d'eau chaude fouettés
                dans un bol puis ajoutés sur le lait.
              </div>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={food2} alt="Le café" />
                <div className={stylesMobile.imageSmallText}>- Le café</div>
              </div>
            </div>
            <div className={styles.empty}></div>

            <div className={styles.text}>
              PAIN NUAGE<br></br> L'été était la saison du pain nuage. Comme son
              nom l'indique, ce plat est un pain facile à trois ingrédients qui
              sort du four sous la forme d'un nuage moelleux. Le pain a fait son
              apparition sur les réseaux sociaux au début du mois d'août, les
              gens partageant des vidéos d'eux-mêmes déchirant le pain en deux
              pour révéler une texture semblable à celle d'une barbe à papa. La
              plupart des utilisateurs ont ajouté du colorant alimentaire pour
              le rendre encore plus joli. Dans la semaine du 17 août, le plat
              avait inspiré plus de 2,2 milliards de vidéos TikTok et plus de 35
              000 publications Instagram taguées avec #cloudbread.
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
              RETOUR À LA QUARANTAINE
              <div className={stylesMobile.imageSmallText}>- Janvier, 2023</div>
            </div>

            <div className={stylesMobile.empty}></div>

            <Image className={stylesMobile.image} src={food1} alt="" />
            <div className={stylesMobile.subTitle}>
              Pour "célébrer" le 3e anniversaire de la quarantaine,
              rappelons-nous quelques tendances virales de la cuisine de cette
              période.
            </div>

            <div className={stylesMobile.empty}></div>
            <div className={stylesMobile.text}>
              Café Dalgona <br></br>
              Au début du confinement, sur tiktok, le café dalgona est devenu
              une chose. de nombreux influenceurs l'ont essayé au fur et à
              mesure qu'il gagnait en popularité. C'est une recette simple de 2
              cuillères à soupe de café, de sucre et d'eau chaude fouettés dans
              un bol puis ajoutés sur le lait.
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image className={stylesMobile.image} src={food2} alt="Le café" />
              <div className={stylesMobile.imageSmallText}>- Le café</div>
            </div>
            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.text}>
              PAIN NUAGE<br></br> L'été était la saison du pain nuage. Comme son
              nom l'indique, ce plat est un pain facile à trois ingrédients qui
              sort du four sous la forme d'un nuage moelleux. Le pain a fait son
              apparition sur les réseaux sociaux au début du mois d'août, les
              gens partageant des vidéos d'eux-mêmes déchirant le pain en deux
              pour révéler une texture semblable à celle d'une barbe à papa. La
              plupart des utilisateurs ont ajouté du colorant alimentaire pour
              le rendre encore plus joli. Dans la semaine du 17 août, le plat
              avait inspiré plus de 2,2 milliards de vidéos TikTok et plus de 35
              000 publications Instagram taguées avec #cloudbread.
            </div>

            <div className={stylesMobile.empty}></div>
          </div>
        </div>
      </>
    );
  };

  return ComponentChange();
}
