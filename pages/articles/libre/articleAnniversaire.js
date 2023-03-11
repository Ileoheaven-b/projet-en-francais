import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import image1 from "../../imagesFrontPage/Libre-5.png";
import image2 from "../../imagesFrontPage/Libre-2.png";
import image3 from "../../imagesFrontPage/Libre-6.png";
import image4 from "../../imagesFrontPage/Libre-7.png";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <div className={styles.title}>Les cafés dans Botosani</div>

            <div className={styles.empty}></div>

            <div className={styles.twoElements}>
              <div className={styles.text}>
                <div className={styles.text}>
                  <div className={styles.subTitle}>
                    <b>Crazy Pub</b>
                  </div>
                  Crazy Pub est un endroit parfait pour les anniversaires. La
                  vue est ravissante et la carte est bonne et å un prix avanta
                  eux.
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    src={image1}
                    alt="Crazy pub"
                  />
                </div>
                <div className={styles.empty}></div>
                <div className={styles.subTitle}>
                  <b>Grand Irish Club</b>
                </div>
                Le Grand Irish Pub est un bon choix pour s'amuser, faire la féte
                ou organiser des événements spécifiques. Un endroit parfait pour
                une soirée inoubliable dans le club avec une musique
                exceptionnelle et parfait pour les jeunes et surtout les
                étudiants.
              </div>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={image2}
                  alt="Grand Irish Club"
                />
              </div>
            </div>

            <div className={styles.empty}></div>

            <div className={styles.twoElementsSpecial}>
              <div>
                <div className={styles.text}>
                  <div className={styles.subTitle}>
                    <b>Facefood</b>
                  </div>
                  Le Grand Irish Pub est un bon choix pour s'amuser, faire la
                  féte ou organiser des événements spécifiques. Un endroit
                  parfait pour une soirée inoubliable dans le club avec une
                  musique exceptionnelle et parfait pour les jeunes et surtout
                  les étudiants.
                </div>
                <div className={styles.imageContainer}>
                  <Image className={styles.image} src={image3} alt="Facefood" />
                </div>
              </div>
              <div>
                <div className={styles.text}>
                  <div className={styles.subTitle}>
                    <b>Cherry</b>
                  </div>
                  Cherry by Casa Lux est un restaurant de qualité avec de trés
                  bons prix qui montrent la qualité de la nourriture ! Ils
                  viennent de rénover tout le restaurant et ils ont un DJ tous
                  les week-ends! Un endroit calme surtout sur la terrasse
                  supérieure, le menu est varié avec des plats variés du chinois
                  au roumain, comme une expérience musicale relaxante et une
                  atmosphére agréable.
                </div>
                <div className={styles.imageContainer}>
                  <Image className={styles.image} src={image4} alt="Facefood" />
                </div>
              </div>
            </div>

            <div className={styles.empty}></div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className={stylesMobile.homeContainer}>
          <div className={stylesMobile.textBox}>
            <div className={stylesMobile.title}>Les cafés dans Botosani</div>

            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.text}>
              <div className={stylesMobile.text}>
                <div className={stylesMobile.subTitle}>
                  <b>Crazy Pub</b>
                </div>
                Crazy Pub est un endroit parfait pour les anniversaires. La vue
                est ravissante et la carte est bonne et å un prix avanta eux.
              </div>
              <div className={stylesMobile.imageContainer}>
                <Image
                  className={stylesMobile.image}
                  src={image1}
                  alt="Crazy pub"
                />
              </div>
              <div className={stylesMobile.empty}></div>
              <div className={stylesMobile.subTitle}>
                <b>Grand Irish Club</b>
              </div>
              Le Grand Irish Pub est un bon choix pour s'amuser, faire la féte
              ou organiser des événements spécifiques. Un endroit parfait pour
              une soirée inoubliable dans le club avec une musique
              exceptionnelle et parfait pour les jeunes et surtout les
              étudiants.
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={image2}
                alt="Grand Irish Club"
              />
            </div>

            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.text}>
              <div className={stylesMobile.subTitle}>
                <b>Facefood</b>
              </div>
              Le Grand Irish Pub est un bon choix pour s'amuser, faire la féte
              ou organiser des événements spécifiques. Un endroit parfait pour
              une soirée inoubliable dans le club avec une musique
              exceptionnelle et parfait pour les jeunes et surtout les
              étudiants.
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={image3}
                alt="Facefood"
              />
            </div>

            <div className={stylesMobile.text}>
              <div className={stylesMobile.subTitle}>
                <b>Cherry</b>
              </div>
              Cherry by Casa Lux est un restaurant de qualité avec de trés bons
              prix qui montrent la qualité de la nourriture ! Ils viennent de
              rénover tout le restaurant et ils ont un DJ tous les week-ends! Un
              endroit calme surtout sur la terrasse supérieure, le menu est
              varié avec des plats variés du chinois au roumain, comme une
              expérience musicale relaxante et une atmosphére agréable.
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={image4}
                alt="Facefood"
              />
            </div>

            <div className={stylesMobile.empty}></div>
          </div>
        </div>
      </>
    );
  };

  return ComponentChange();
}
