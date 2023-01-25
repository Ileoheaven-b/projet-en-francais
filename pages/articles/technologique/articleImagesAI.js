import styles from "../../../styles/article.module.css";
import Link from "next/link";
import Image from "next/image";
import robotImage from "../../imagesFrontPage/RobotImage3.png";
import image1 from "../../imagesFrontPage/ImagesAI1.png";
import image2 from "../../imagesFrontPage/ImagesAI2.png";
import image3 from "../../imagesFrontPage/ImagesAI3.png";
import image4 from "../../imagesFrontPage/ImagesAI4.png";

export default function Article() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.textBox}>
          <div className={styles.title}>
            Explorer la créativité à travers des images générées par l'IA : Un
            regard sur la diffusion stable
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
            Les images générées par l'IA, notamment lorsqu'elles utilisent la
            méthode de diffusion stable, offrent aux élèves un nouveau moyen de
            s'exprimer et d'exercer leur créativité.
          </div>

          <div className={styles.empty}></div>
          <div className={styles.twoElements}>
            <div className={styles.text}>
              L'intelligence artificielle (IA), qui s'est imposée dans de
              nombreux secteurs technologiques, notamment les voitures à
              conduite autonome et la reconnaissance vocale, domine désormais
              les domaines de l'art numérique et du graphisme. Le développement
              de l'imagerie générée par l'IA a offert aux élèves une nouvelle
              voie pour exprimer leur créativité. L'utilisation de la diffusion
              stable fait partie des techniques les plus utilisées pour créer
              ces images.
              <div className={styles.empty}></div>
              La diffusion stable, parfois appelée "Generative Adversarial
              Networks" (GANs), est une méthode efficace qui permet de créer un
              large éventail d'images à l'aide de réseaux neuronaux, du plus
              réaliste au plus abstrait. La méthode est basée sur les GANs, une
              méthode de création de nouvelles images qui combine les efforts de
              deux réseaux neuronaux. Tandis que le second réseau, appelé
              discriminateur, évalue les images et indique au premier réseau si
              elles sont réalistes ou non, le premier réseau, appelé générateur,
              génère de nouvelles images.
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={image2}
                alt="Image créée par l'intelligence artificielle"
                layout="responsive"
              />
              <div className={styles.imageSmallText}>
                - Image créée par l'intelligence artificielle
              </div>
            </div>
          </div>
          <div className={styles.empty}></div>

          <div className={styles.text}>
            Parce qu'elle permet la personnalisation et le contrôle des images
            créées, cette technologie est unique. Elle est donc idéale pour les
            applications artistiques telles que l'art numérique, la conception
            graphique et même la conception de jeux vidéo, car elle permet aux
            utilisateurs de générer des styles et des effets distincts. En
            outre, la technique de diffusion stable permet une interaction
            homme-machine, ce qui permet aux utilisateurs de diriger l'IA dans
            la création d'images qui correspondent à leurs propres préférences
            esthétiques.
            <div className={styles.empty}></div>
            La possibilité d'une coopération homme-machine est l'un des aspects
            les plus intrigants des photos générées par l'IA. Avec Stable
            Diffusion, vous pouvez diriger l'IA dans la production d'images qui
            reflètent votre vision et votre style distinctifs en utilisant vos
            propres talents artistiques et votre imagination. Cela peut élargir
            le champ de l'art numérique et de la conception graphique, et être
            utilisé pour générer des graphiques distinctifs et attrayants pour
            diverses applications telles que la création de jeux vidéo,
            l'animation et la publicité.
          </div>

          <div className={styles.empty}></div>
          <div className={styles.twoElements}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={image4}
                alt="Image créée par l'intelligence artificielle"
                layout="responsive"
              />
              <div className={styles.imageSmallText}>
                - Image créée par l'intelligence artificielle
              </div>
            </div>
            <div className={styles.text}>
              Il est également crucial de se rappeler que les graphiques générés
              par l'IA ont de nombreuses utilisations potentielles autres que
              l'art et le design. Par exemple, ils peuvent être appliqués au
              secteur automobile pour fournir des graphiques réalistes de
              voitures pour le marketing et la publicité. Dans le domaine de
              l'architecture, les images générées par l'IA peuvent également
              être utilisées pour fournir des photographies précises de
              bâtiments et d'autres structures qui peuvent être utilisées pour
              la planification et la conception.
              <div className={styles.empty}></div>
              Grâce aux graphiques générés par l'IA, les étudiants disposent
              désormais d'un plus grand nombre d'options pour s'exprimer de
              manière créative et unique. Les possibilités sont illimitées car
              la technologie ne cesse de progresser et d'évoluer. Il existe
              plusieurs outils et didacticiels en ligne qui peuvent vous aider à
              démarrer si vous souhaitez en savoir plus sur ce sujet. En outre,
              de nombreux établissements d'enseignement supérieur et
              institutions proposent désormais des cours et des programmes
              d'infographie et d'intelligence artificielle, qui peuvent vous
              fournir les informations et les compétences dont vous avez besoin
              pour produire vos propres images générées par l'IA.
            </div>
          </div>

          <div className={styles.empty}></div>
        </div>
      </div>
    </>
  );
}
