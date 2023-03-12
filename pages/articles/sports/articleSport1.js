import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import gymImage from "../../imagesFrontPage/Gym.jpg";
import cornisaImage from "../../imagesFrontPage/Cornisa.jpg";
import cssBT from "../../imagesFrontPage/cssBT.png";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <div className={styles.title}>
              Athlètes locaux. Où commencer ma carrière ?
            </div>
            <div className={styles.empty}></div>
            <div className={styles.empty}></div>
            <div className={styles.twoElements}>
              <div className={styles.subTitle}>
                Avez-vous déjà eu envie de pratiquer un sport, mais vous ne
                saviez pas où ?Cet article vous donnera un aperçu des options
                dont vous disposez localement ! Nos journalistes ont analysé
                toutes les options pour faire du sport à Botosani: <br></br>
                La première catégorie dont nous parlerons est celle des
                amateurs. Par exemple, en tant qu'amateur, vous pouvez
                entretenir votre silhouette en vous rendant dans une salle de
                sport:<div className={styles.empty}></div>- Anvi gym
                <br></br>- Gold gym<br></br> - Sun gym
                <div className={styles.empty}></div>
                Aussi, si vous aimez les sports d'équipe et que vous souhaitez
                vous amuser tout en faisant de l'exercice, nous vous
                recommandons :
              </div>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={gymImage}
                  alt=""
                  layout="responsive"
                />
                <div className={styles.imageSmallText}>
                  - Nouvelle page de chat
                </div>
              </div>
            </div>
            <div className={styles.empty}></div>
            <div className={styles.subTitle}>
              -Football : Vous pouvez louer un terrain de foot avec vos amis :
              au lycée Gheorghe Asachi, à l'école 6 et à Cornisa où vous pouvez
              jouer dehors ou dans un ballon où vous avez de la chaleur à un
              prix raisonnable.<br></br>
              -Basketball : Pendant l'été, vous pouvez vous amuser avec des amis
              à la salle polyvalente et dans le parc Mihai Eminecu.<br></br>
              -Tennis de table : Vous pouvez pratiquer dans la salle polyvalente
              <br></br>
              -Court de tennis (terre battue) : La Cornisa<br></br>
              -Patinage/Curling : À la Corniche
              <div className={styles.empty}></div>
            </div>

            <div className={styles.twoElements}>
              <div className={styles.subTitle}>
                La deuxième catégorie est dédiée à ceux qui veulent performer.
                Nous vous recommandons : Au Sports Club, vous pouvez pratiquer
                au niveau de la performance : Muay Thai, Badminton, Tennis,
                Athlétisme, Boxe, Haltérophilie, Aviron, Echecs, Volleyball,
                Taekwondo. Au Club Sportif Scolaire, vous pouvez pratiquer au
                niveau de la performance : Volley-ball, Baseball, Karaté,
                Basket-ball et football.
              </div>

              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={cssBT}
                  alt=""
                  layout="responsive"
                />
                <div className={styles.imageSmallText}>-</div>
              </div>
            </div>
          </div>

          <div className={styles.empty}></div>
        </div>
      </>
    ) : (
      <>
        <div className={stylesMobile.homeContainer}>
          <div className={stylesMobile.textBox}>
            <div className={stylesMobile.title}>
              ChatGPT : Le partenaire d'étude intelligent
            </div>

            <div className={stylesMobile.empty}></div>

            <Image
              className={stylesMobile.image}
              src={robotImage}
              alt=""
              layout="responsive"
            />
            <div className={stylesMobile.subTitle}>
              ChatGPT, un outil Ai avancé qui pourrait aider les étudiants à se
              développer dans un large éventail d'aspects de leur éducation,
              tels que l'organisation des ressources et des informations,
              l'écriture, la communication et le développement linguistique.
            </div>

            <div className={stylesMobile.empty}></div>
            <div className={stylesMobile.text}>
              Vous êtes probablement toujours à la recherche de stratégies pour
              améliorer vos résultats scolaires et votre apprentissage en tant
              qu'étudiant. L'utilisation des nombreuses ressources à votre
              disposition, telles que les outils Internet, les applications et
              les programmes, est une façon d'y parvenir. L'un de ces outils est
              le ChatGPT, un modèle linguistique d'IA de pointe qui est
              disponible pour vous aider à répondre à toutes vos questions et
              exigences.
              <div className={stylesMobile.empty}></div>
              Voyons d'abord comment fonctionne l'IA. L'objectif principal de
              ChatGPT est de produire un texte qui ressemble à la parole humaine
              à partir des entrées de l'utilisateur. Pour ce faire, il divise
              les entrées en unités plus petites, appelées "tokens", qui sont
              ensuite utilisées pour prédire le mot suivant dans une phrase. Le
              modèle peut comprendre les modèles et les connexions entre les
              mots et les phrases, car il a été entraîné sur un corpus de textes
              assez important.
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
              Examinons maintenant comment les étudiants peuvent en bénéficier.
              En vous donnant accès à des connaissances et à des outils, ChatGPT
              peut vous aider à devenir un meilleur étudiant. Il peut vous aider
              à étudier ou à faire vos devoirs car il est formé à un large
              éventail de sujets, de la physique aux mathématiques en passant
              par l'histoire et la littérature. ChatGPT peut vous donner des
              conseils et des techniques d'étude pour vous aider à vous préparer
              aux examens et aux tests.
              <div className={stylesMobile.empty}></div>
              ChatGPT peut également vous aider à devenir un meilleur étudiant
              en vous donnant des conseils sur la gestion du temps et
              l'organisation. ChatGPT peut vous fournir des outils et des
              applications pour vous aider à respecter vos devoirs et les dates
              d'échéance, ainsi que des conseils pour mieux gérer votre temps.
              Vous serez ainsi en mesure d'étudier de manière plus efficace et
              plus productive, ce qui pourrait vous aider à obtenir de
              meilleures notes et de meilleurs résultats.
            </div>

            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={chatGPT3}
                alt="ChatGPT génère une histoire fantastique"
                layout="responsive"
              />
              <div className={stylesMobile.imageSmallText}>
                - ChatGPT génère une histoire fantastique
              </div>
            </div>
            <div className={stylesMobile.text}>
              Il vous permet d'affiner vos talents d'écrivain. En vous offrant
              des capacités d'édition et de correction, il peut vous aider à
              produire des essais, des documents de recherche et d'autres
              travaux d'écriture. Vous pouvez également obtenir des conseils
              d'écriture auprès de ChatGPT, notamment des suggestions pour
              améliorer la grammaire et la ponctuation.
              <div className={stylesMobile.empty}></div>
              En outre, ChatGPT peut vous aider à améliorer votre communication.
              Il peut vous offrir des ressources et des conseils pour rendre
              votre communication plus efficace et plus sûre, que ce soit pour
              une présentation, un entretien ou une simple discussion de tous
              les jours. Vous pouvez l'utiliser pour rédiger des e-mails, des
              scripts vocaux et même des scripts vidéo.
            </div>

            <div className={stylesMobile.empty}></div>
            <div className={stylesMobile.text}>
              L'apprentissage des langues est un aspect important pour lequel
              l'IA peut être utile. Elle peut vous proposer des exercices
              pratiques, des outils de traduction et des ressources pour vous
              aider à améliorer votre vocabulaire, votre grammaire et votre
              compréhension si vous apprenez une langue étrangère.
              <div className={stylesMobile.empty}></div>
              En vous fournissant des idées et des suggestions de contes, de
              musique, de dessins et même de concepts commerciaux, ChatGPT peut
              également vous aider dans votre processus de création. Vous pouvez
              l'utiliser pour créer des sites Web entiers, des vidéos et même
              des photos.
              <div className={stylesMobile.empty}></div>
              En résumé, ChatGPT est un outil puissant qui peut vous aider à
              vous développer en tant qu'étudiant de diverses manières. Il peut
              vous fournir des connaissances et des outils, vous aider à
              planifier, écrire, communiquer et même exercer votre créativité.
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={chatGPT2}
                alt="ChatGPT traduisant la même histoire en anglais"
                layout="responsive"
              />
              <div className={stylesMobile.imageSmallText}>
                - ChatGPT traduisant la même histoire en anglais
              </div>
            </div>
            <div className={stylesMobile.empty}></div>
          </div>
        </div>
      </>
    );
  };

  return ComponentChange();
}
