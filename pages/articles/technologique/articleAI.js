import styles from "../../../styles/article.module.css";
import Link from "next/link";
import Image from "next/image";
import robotImage from "../../imagesFrontPage/RobotImage2.png";
import chatGPT1 from "../../imagesFrontPage/ChatGPT1.png";
import chatGPT2 from "../../imagesFrontPage/ChatGPT2.png";
import chatGPT3 from "../../imagesFrontPage/ChatGPT3.png";

export default function Article() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.textBox}>
          <div className={styles.title}>
            ChatGPT : Le partenaire d'étude intelligent
            <div className={styles.imageSmallText}>- Janvier, 2023</div>
          </div>

          <div className={styles.empty}></div>

          <Image
            className={styles.image}
            src={robotImage}
            alt=""
            layout="responsive"
          />
          <div className={styles.title}>
            ChatGPT, un outil Ai avancé qui pourrait aider les étudiants à se
            développer dans un large éventail d'aspects de leur éducation, tels
            que l'organisation des ressources et des informations, l'écriture,
            la communication et le développement linguistique.
          </div>

          <div className={styles.empty}></div>
          <div className={styles.twoElements}>
            <div className={styles.text}>
              Vous êtes probablement toujours à la recherche de stratégies pour
              améliorer vos résultats scolaires et votre apprentissage en tant
              qu'étudiant. L'utilisation des nombreuses ressources à votre
              disposition, telles que les outils Internet, les applications et
              les programmes, est une façon d'y parvenir. L'un de ces outils est
              le ChatGPT, un modèle linguistique d'IA de pointe qui est
              disponible pour vous aider à répondre à toutes vos questions et
              exigences.
              <div className={styles.empty}></div>
              Voyons d'abord comment fonctionne l'IA. L'objectif principal de
              ChatGPT est de produire un texte qui ressemble à la parole humaine
              à partir des entrées de l'utilisateur. Pour ce faire, il divise
              les entrées en unités plus petites, appelées "tokens", qui sont
              ensuite utilisées pour prédire le mot suivant dans une phrase. Le
              modèle peut comprendre les modèles et les connexions entre les
              mots et les phrases, car il a été entraîné sur un corpus de textes
              assez important.
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
            Examinons maintenant comment les étudiants peuvent en bénéficier. En
            vous donnant accès à des connaissances et à des outils, ChatGPT peut
            vous aider à devenir un meilleur étudiant. Il peut vous aider à
            étudier ou à faire vos devoirs car il est formé à un large éventail
            de sujets, de la physique aux mathématiques en passant par
            l'histoire et la littérature. ChatGPT peut vous donner des conseils
            et des techniques d'étude pour vous aider à vous préparer aux
            examens et aux tests.
            <div className={styles.empty}></div>
            ChatGPT peut également vous aider à devenir un meilleur étudiant en
            vous donnant des conseils sur la gestion du temps et l'organisation.
            ChatGPT peut vous fournir des outils et des applications pour vous
            aider à respecter vos devoirs et les dates d'échéance, ainsi que des
            conseils pour mieux gérer votre temps. Vous serez ainsi en mesure
            d'étudier de manière plus efficace et plus productive, ce qui
            pourrait vous aider à obtenir de meilleures notes et de meilleurs
            résultats.
          </div>

          <div className={styles.empty}></div>
          <div className={styles.twoElements}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={chatGPT3}
                alt="ChatGPT génère une histoire fantastique"
                layout="responsive"
              />
              <div className={styles.imageSmallText}>
                - ChatGPT génère une histoire fantastique
              </div>
            </div>
            <div className={styles.text}>
              Il vous permet d'affiner vos talents d'écrivain. En vous offrant
              des capacités d'édition et de correction, il peut vous aider à
              produire des essais, des documents de recherche et d'autres
              travaux d'écriture. Vous pouvez également obtenir des conseils
              d'écriture auprès de ChatGPT, notamment des suggestions pour
              améliorer la grammaire et la ponctuation.
              <div className={styles.empty}></div>
              En outre, ChatGPT peut vous aider à améliorer votre communication.
              Il peut vous offrir des ressources et des conseils pour rendre
              votre communication plus efficace et plus sûre, que ce soit pour
              une présentation, un entretien ou une simple discussion de tous
              les jours. Vous pouvez l'utiliser pour rédiger des e-mails, des
              scripts vocaux et même des scripts vidéo.
            </div>
          </div>

          <div className={styles.empty}></div>
          <div className={styles.twoElements}>
            <div className={styles.text}>
              L'apprentissage des langues est un aspect important pour lequel
              l'IA peut être utile. Elle peut vous proposer des exercices
              pratiques, des outils de traduction et des ressources pour vous
              aider à améliorer votre vocabulaire, votre grammaire et votre
              compréhension si vous apprenez une langue étrangère.
              <div className={styles.empty}></div>
              En vous fournissant des idées et des suggestions de contes, de
              musique, de dessins et même de concepts commerciaux, ChatGPT peut
              également vous aider dans votre processus de création. Vous pouvez
              l'utiliser pour créer des sites Web entiers, des vidéos et même
              des photos.
              <div className={styles.empty}></div>
              En résumé, ChatGPT est un outil puissant qui peut vous aider à
              vous développer en tant qu'étudiant de diverses manières. Il peut
              vous fournir des connaissances et des outils, vous aider à
              planifier, écrire, communiquer et même exercer votre créativité.
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={chatGPT2}
                alt="ChatGPT traduisant la même histoire en anglais"
                layout="responsive"
              />
              <div className={styles.imageSmallText}>
                - ChatGPT traduisant la même histoire en anglais
              </div>
            </div>
          </div>
          <div className={styles.empty}></div>
        </div>
      </div>
    </>
  );
}
