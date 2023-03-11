import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import robotImage from "../../imagesFrontPage/RobotImage2.png";
import chatGPT1 from "../../imagesFrontPage/ChatGPT1.png";
import chatGPT2 from "../../imagesFrontPage/ChatGPT2.png";
import chatGPT3 from "../../imagesFrontPage/RobotImage.png";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <div className={styles.title}>
              ChatGPT, votre propre compagnon d'étude
            </div>

            <div className={styles.empty}></div>

            <Image
              className={styles.image}
              src={robotImage}
              alt=""
            />
            <div className={styles.subTitle}>
              Êtes-vous toujours à la recherche de nouvelles façons d'apprendre
              et d'améliorer vos notes ? ChatGPT est votre nouveau partenaire
              d'étude.
            </div>

            <div className={styles.empty}></div>
            <div className={styles.twoElements}>
              <div className={styles.text}>
                Les outils d'IA modernes comme ChatGPT peuvent vous aider dans
                toutes les parties de votre éducation, de la collecte de
                ressources et d'informations à l'amélioration de vos compétences
                en écriture, en expression orale et même linguistique.
                <div className={styles.empty}></div>
                Mais comment fonctionne ChatGPT et qu'est-ce que l'IA exactement
                ? ChatGPT, pour le dire simplement, prend votre entrée et la
                convertit en texte qui imite la parole humaine. Cela se fait en
                divisant l'entrée en parties plus petites appelées "jetons", qui
                sont utilisées pour prédire le mot suivant dans une phrase. Sa
                capacité à reconnaître les modèles et les connexions entre les
                mots et les phrases est le résultat de sa formation approfondie
                sur le texte.
              </div>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={chatGPT1}
                  alt="Nouvelle page de chat"
                  layout="responsive"
                />
                <div className={styles.imageSmallText}>
                  - Nouvelle page de chat
                </div>
              </div>
            </div>
            <div className={styles.empty}></div>

            <div className={styles.text}>
              Parlons maintenant des avantages que ChatGPT peut vous offrir en
              tant qu'étudiant. ChatGPT peut faire de vous un apprenant plus
              compétent en vous donnant accès à une mine d'informations et de
              ressources. Que vous ayez des difficultés avec un sujet
              spécifique, que vous ayez besoin d'aide pour étudier pour un
              examen ou que vous souhaitiez simplement gagner en efficacité,
              ChatGPT peut vous aider. aux examens et aux tests.
              <div className={styles.empty}></div>
              Vous pouvez améliorer vos compétences rédactionnelles en utilisant
              les services d'édition et de relecture de ChatGPT, ainsi que ses
              suggestions de grammaire et de ponctuation. De plus, ChatGPT peut
              vous fournir des exercices pratiques, des outils de traduction et
              des ressources pour vous aider à développer votre vocabulaire,
              votre grammaire et votre compréhension si vous apprenez une langue
              étrangère.
            </div>

            <div className={styles.empty}></div>
            <div className={styles.twoElements}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={chatGPT3}
                  alt="Une image d'un robot"
                  layout="responsive"
                />
                <div className={styles.imageSmallText}>
                  - Une image d'un robot
                </div>
              </div>
              <div className={styles.text}>
                Cependant, ChatGPT n'est pas limité aux universitaires. Il peut
                également aider vos efforts créatifs en fournissant des concepts
                et des idées pour des chansons, des romans, des illustrations et
                même des plans d'affaires. Des sites Web complets, des films et
                même des images peuvent être produits avec ! En conclusion,
                ChatGPT est un outil flexible et efficace qui peut vous aider à
                améliorer vos performances académiques de plusieurs manières.
                Vous pouvez en tirer des connaissances et des outils et les
                utiliser pour planifier, écrire, communiquer et même faire
                preuve de créativité.
                <div className={styles.empty}></div>
                En outre, ChatGPT peut vous aider à améliorer votre
                communication. Il peut vous offrir des ressources et des
                conseils pour rendre votre communication plus efficace et plus
                sûre, que ce soit pour une présentation, un entretien ou une
                simple discussion de tous les jours. Vous pouvez l'utiliser pour
                rédiger des e-mails, des scripts vocaux et même des scripts
                vidéo.
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
              ChatGPT, votre propre compagnon d'étude
            </div>

            <div className={stylesMobile.empty}></div>

            <Image
              className={stylesMobile.image}
              src={robotImage}
              alt=""
              layout="responsive"
            />
            <div className={stylesMobile.subTitle}>
              Êtes-vous toujours à la recherche de nouvelles façons d'apprendre
              et d'améliorer vos notes ? ChatGPT est votre nouveau partenaire
              d'étude.
            </div>

            <div className={stylesMobile.empty}></div>
            <div className={stylesMobile.text}>
              Les outils d'IA modernes comme ChatGPT peuvent vous aider dans
              toutes les parties de votre éducation, de la collecte de
              ressources et d'informations à l'amélioration de vos compétences
              en écriture, en expression orale et même linguistique.
              <div className={styles.empty}></div>
              Mais comment fonctionne ChatGPT et qu'est-ce que l'IA exactement ?
              ChatGPT, pour le dire simplement, prend votre entrée et la
              convertit en texte qui imite la parole humaine. Cela se fait en
              divisant l'entrée en parties plus petites appelées "jetons", qui
              sont utilisées pour prédire le mot suivant dans une phrase. Sa
              capacité à reconnaître les modèles et les connexions entre les
              mots et les phrases est le résultat de sa formation approfondie
              sur le texte.
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={chatGPT1}
                alt="Nouvelle page de chat"
                layout="responsive"
              />
              <div className={stylesMobile.imageSmallText}>
                - Nouvelle page de chat
              </div>
            </div>
            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.text}>
              Parlons maintenant des avantages que ChatGPT peut vous offrir en
              tant qu'étudiant. ChatGPT peut faire de vous un apprenant plus
              compétent en vous donnant accès à une mine d'informations et de
              ressources. Que vous ayez des difficultés avec un sujet
              spécifique, que vous ayez besoin d'aide pour étudier pour un
              examen ou que vous souhaitiez simplement gagner en efficacité,
              ChatGPT peut vous aider. aux examens et aux tests.
              <div className={styles.empty}></div>
              Vous pouvez améliorer vos compétences rédactionnelles en utilisant
              les services d'édition et de relecture de ChatGPT, ainsi que ses
              suggestions de grammaire et de ponctuation. De plus, ChatGPT peut
              vous fournir des exercices pratiques, des outils de traduction et
              des ressources pour vous aider à développer votre vocabulaire,
              votre grammaire et votre compréhension si vous apprenez une langue
              étrangère.
            </div>

            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={chatGPT3}
                alt="Une image d'un robot"
                layout="responsive"
              />
              <div className={stylesMobile.imageSmallText}>
                - Une image d'un robot
              </div>
            </div>
            <div className={stylesMobile.text}>
              Cependant, ChatGPT n'est pas limité aux universitaires. Il peut
              également aider vos efforts créatifs en fournissant des concepts
              et des idées pour des chansons, des romans, des illustrations et
              même des plans d'affaires. Des sites Web complets, des films et
              même des images peuvent être produits avec ! En conclusion,
              ChatGPT est un outil flexible et efficace qui peut vous aider à
              améliorer vos performances académiques de plusieurs manières. Vous
              pouvez en tirer des connaissances et des outils et les utiliser
              pour planifier, écrire, communiquer et même faire preuve de
              créativité.
              <div className={styles.empty}></div>
              En outre, ChatGPT peut vous aider à améliorer votre communication.
              Il peut vous offrir des ressources et des conseils pour rendre
              votre communication plus efficace et plus sûre, que ce soit pour
              une présentation, un entretien ou une simple discussion de tous
              les jours. Vous pouvez l'utiliser pour rédiger des e-mails, des
              scripts vocaux et même des scripts vidéo.
            </div>

            <div className={stylesMobile.empty}></div>
          </div>
        </div>
      </>
    );
  };

  return ComponentChange();
}
