import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import robotImage from "../../imagesFrontPage/RobotImage3.png";
import image1 from "../../imagesFrontPage/ImagesAI1.png";
import image2 from "../../imagesFrontPage/ImagesAI2.png";
import image3 from "../../imagesFrontPage/ImagesAI3.png";
import image4 from "../../imagesFrontPage/ImagesAI4.png";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <div className={styles.title}>
              Explorer la créativité grâce à l'imagerie générée par l'IA : un
              regard sur la diffusion stable
            </div>

            <div className={styles.empty}></div>

            <Image
              className={styles.image}
              src={robotImage}
              alt=""
              layout="responsive"
            />
            <div className={styles.subTitle}>
              Les images générées par l'intelligence artificielle, en
              particulier à l'aide de la technique de diffusion stable, sont une
              nouvelle façon passionnante pour les étudiants de s'exprimer et
              d'explorer leur créativité.
            </div>

            <div className={styles.empty}></div>
            <div className={styles.twoElements}>
              <div className={styles.text}>
                Vous cherchez une nouvelle façon d'utiliser votre côté créatif?
                Eh bien, avez-vous entendu parler des images générées par l'IA ?
                C'est une façon assez cool de s'exprimer et cela devient de plus
                en plus populaire dans le monde de l'art numérique et du
                graphisme.
                <div className={styles.empty}></div>
                L'une des méthodes utilisées pour créer ces images est appelée
                diffusion stable ou "Generative Adversarial Networks" (GAN).
                C'est une façon élégante de dire qu'il utilise deux réseaux de
                neurones pour créer des images nouvelles et uniques. Le premier
                réseau, appelé générateur, crée les images, tandis que le second
                réseau, appelé discriminateur, les évalue et indique au
                générateur si elles semblent réalistes ou non.
              </div>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={image2}
                  alt="Image créée par l'intelligence artificielle"
                />
                <div className={styles.imageSmallText}>
                  - Image créée par l'intelligence artificielle
                </div>
              </div>
            </div>
            <div className={styles.empty}></div>

            <div className={styles.text}>
              Cette méthode est excellente car elle vous permet de contrôler les
              images créées, ce qui la rend parfaite pour différents types d'art
              tels que l'art numérique, la conception graphique et même la
              conception de jeux vidéo. De plus, la méthode de diffusion stable
              permet une interaction homme-ordinateur, ce qui signifie que vous
              pouvez diriger l'IA pour créer des images qui correspondent à
              votre style et à vos préférences personnelles.
              <div className={styles.empty}></div>
              Mais il ne s'agit pas seulement d'art et de design ! Les images
              générées par l'IA peuvent également être utilisées dans d'autres
              industries, telles que l'industrie automobile, où elles peuvent
              fournir des graphiques de voiture réalistes pour le marketing et
              la publicité. Et en architecture, les images générées par l'IA
              peuvent être utilisées pour créer des images précises de bâtiments
              et d'autres structures à des fins de planification et de
              conception.
            </div>

            <div className={styles.empty}></div>
            <div className={styles.twoElements}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={image4}
                  alt="Image créée par l'intelligence artificielle"
                />
                <div className={styles.imageSmallText}>
                  - Image créée par l'intelligence artificielle
                </div>
              </div>
              <div className={styles.text}>
                Les possibilités sont infinies avec les images générées par
                l'IA, et avec de plus en plus de ressources et de didacticiels
                disponibles, il est facile de commencer. Certains collèges et
                institutions offrent même des cours d'infographie et
                d'intelligence artificielle où vous pouvez en apprendre
                davantage sur ce domaine passionnant. Alors n'ayez pas peur
                d'explorer votre créativité avec des images générées par l'IA !
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
            <div className={stylesMobile.title}>
              Explorer la créativité grâce à l'imagerie générée par l'IA : un
              regard sur la diffusion stable
            </div>

            <div className={stylesMobile.empty}></div>

            <Image
              className={stylesMobile.image}
              src={robotImage}
              alt=""
              layout="responsive"
            />
            <div className={stylesMobile.subTitle}>
              Les images générées par l'intelligence artificielle, en
              particulier à l'aide de la technique de diffusion stable, sont une
              nouvelle façon passionnante pour les étudiants de s'exprimer et
              d'explorer leur créativité.
            </div>

            <div className={stylesMobile.empty}></div>
            <div className={stylesMobile.text}>
              Vous cherchez une nouvelle façon d'utiliser votre côté créatif? Eh
              bien, avez-vous entendu parler des images générées par l'IA ?
              C'est une façon assez cool de s'exprimer et cela devient de plus
              en plus populaire dans le monde de l'art numérique et du
              graphisme.
              <div className={stylesMobile.empty}></div>
              L'une des méthodes utilisées pour créer ces images est appelée
              diffusion stable ou "Generative Adversarial Networks" (GAN). C'est
              une façon élégante de dire qu'il utilise deux réseaux de neurones
              pour créer des images nouvelles et uniques. Le premier réseau,
              appelé générateur, crée les images, tandis que le second réseau,
              appelé discriminateur, les évalue et indique au générateur si
              elles semblent réalistes ou non.
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={image2}
                alt="Image créée par l'intelligence artificielle"
                layout="responsive"
              />
              <div className={stylesMobile.imageSmallText}>
                - Image créée par l'intelligence artificielle
              </div>
            </div>
            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.text}>
              Cette méthode est excellente car elle vous permet de contrôler les
              images créées, ce qui la rend parfaite pour différents types d'art
              tels que l'art numérique, la conception graphique et même la
              conception de jeux vidéo. De plus, la méthode de diffusion stable
              permet une interaction homme-ordinateur, ce qui signifie que vous
              pouvez diriger l'IA pour créer des images qui correspondent à
              votre style et à vos préférences personnelles.
              <div className={stylesMobile.empty}></div>
              Mais il ne s'agit pas seulement d'art et de design ! Les images
              générées par l'IA peuvent également être utilisées dans d'autres
              industries, telles que l'industrie automobile, où elles peuvent
              fournir des graphiques de voiture réalistes pour le marketing et
              la publicité. Et en architecture, les images générées par l'IA
              peuvent être utilisées pour créer des images précises de bâtiments
              et d'autres structures à des fins de planification et de
              conception.
            </div>

            <div className={stylesMobile.empty}></div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={image4}
                alt="Image créée par l'intelligence artificielle"
                layout="responsive"
              />
              <div className={stylesMobile.imageSmallText}>
                - Image créée par l'intelligence artificielle
              </div>
            </div>
            <div className={stylesMobile.text}>
              Les possibilités sont infinies avec les images générées par l'IA,
              et avec de plus en plus de ressources et de didacticiels
              disponibles, il est facile de commencer. Certains collèges et
              institutions offrent même des cours d'infographie et
              d'intelligence artificielle où vous pouvez en apprendre davantage
              sur ce domaine passionnant. Alors n'ayez pas peur d'explorer votre
              créativité avec des images générées par l'IA !
            </div>
          </div>

          <div className={stylesMobile.empty}></div>
        </div>
      </>
    );
  };

  return ComponentChange();
}
