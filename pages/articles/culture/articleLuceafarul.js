import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import mainImage from "../../imagesFrontPage/Luceafar.jpg";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <div className={styles.title}>
              HYPÉRION
              <div className={styles.imageSmallText}>- Janvier, 2023</div>
            </div>

            <div className={styles.empty}></div>
            <div className={styles.subTitle}>
              IMPRESSIONS SUR LE SPECTACLE "LUCEAFĂRUL" ET SUR LA MISE EN SCÈNE
              D'UN CLASSIQUE LITTÉRAIRE
            </div>

            <div className={styles.empty}></div>
            <div className={styles.twoElements}>
              <div className={styles.text}>
                Le 15 jambiere, lorsque je suis entré dans la salle de spectacle
                du théâtre pour voir l'adaptation scénique d'un poème bien
                connu, je ne m'attendais pas à repartir les larmes aux yeux.
                "Hypérion" ("Luceafărul" en roumain), réalisé par Ion Sapdaru,
                est bien sûr l'adaptation du célèbre poème du même nom de Mihai
                Eminescu. Avant de regarder la pièce de théâtre, on nous promet
                une histoire d'amour sans fin, mais la puissance avec laquelle
                elle est présentée n'hésite pas à étonner le public. La
                performance offerte par les acteurs, ainsi que le décor, on fait
                ressentir le spectacle à la fois comme un rêve chaotique et
                comme une invasion de la vie privée par les forces divines.
                <div className={styles.empty}></div>
                L'action, bien sûr, suit le fil narratif du poème, mais avec sa
                propre note de modernisation qui met en évidence le génie
                d'Eminescu et la validité universelle de l'histoire, quelle
                qu’en soit l'époque. Du point de vue visuel, les acteurs
                fusionnent avec le décor et les images projetées, emmenant le
                spectateur dans des lieux cosmiques et d'histoire à la fois. Les
                couleurs saturées et vives ajoutées à la note rêveuse, mises en
                relation avec la performance des acteurs et les numéros d'une
                chorégraphie expressive, créent tout un monde, la scène étant
                une fenêtre à part entière. Les costumes, à première vue
                ludiques, prolongent l'idée de rêve.
                <div className={styles.empty}></div>
                Ainsi, dans cet univers créé sur scène, se déroule-t-elle
                l'histoire d'amour, qui est le point principal du spectacle.
                Commencée dans la réalité, mise en parallèle dans la fantaisie
                et poursuivie dans la réalité, c'est une histoire d'amour qui
                brise les frontières des réalités. Considérant que le spectacle
                tente pourtant de résumer un amour pendant la pandémie, c’est à
                chacun de juger, mais du point de vue esthétique, il refuse de
                décevoir.
                <div className={styles.empty}></div>
                Considérant que le show tente pourtant de résumer un amour
                pendant la pandémie, il appartient à chacun de juger du
                bien-fondé de ce qui est présenté, mais du point de vue
                esthétique, il refuse de décevoir.
              </div>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={mainImage}
                  alt="L'affiche de la pièce"
                  layout="responsive"
                />
                <div className={styles.imageSmallText}>
                  - L'affiche de la pièce
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
            <div className={stylesMobile.title}>
              HYPÉRION
              <div className={stylesMobile.imageSmallText}>- Janvier, 2023</div>
            </div>

            <div className={stylesMobile.empty}></div>
            <div className={stylesMobile.subTitle}>
              IMPRESSIONS SUR LE SPECTACLE "LUCEAFĂRUL" ET SUR LA MISE EN SCÈNE
              D'UN CLASSIQUE LITTÉRAIRE
            </div>

            <div className={stylesMobile.empty}></div>
            <div className={stylesMobile.text}>
              Le 15 jambiere, lorsque je suis entré dans la salle de spectacle
              du théâtre pour voir l'adaptation scénique d'un poème bien connu,
              je ne m'attendais pas à repartir les larmes aux yeux. "Hypérion"
              ("Luceafărul" en roumain), réalisé par Ion Sapdaru, est bien sûr
              l'adaptation du célèbre poème du même nom de Mihai Eminescu. Avant
              de regarder la pièce de théâtre, on nous promet une histoire
              d'amour sans fin, mais la puissance avec laquelle elle est
              présentée n'hésite pas à étonner le public. La performance offerte
              par les acteurs, ainsi que le décor, on fait ressentir le
              spectacle à la fois comme un rêve chaotique et comme une invasion
              de la vie privée par les forces divines.
              <div className={stylesMobile.empty}></div>
              L'action, bien sûr, suit le fil narratif du poème, mais avec sa
              propre note de modernisation qui met en évidence le génie
              d'Eminescu et la validité universelle de l'histoire, quelle qu’en
              soit l'époque. Du point de vue visuel, les acteurs fusionnent avec
              le décor et les images projetées, emmenant le spectateur dans des
              lieux cosmiques et d'histoire à la fois. Les couleurs saturées et
              vives ajoutées à la note rêveuse, mises en relation avec la
              performance des acteurs et les numéros d'une chorégraphie
              expressive, créent tout un monde, la scène étant une fenêtre à
              part entière. Les costumes, à première vue ludiques, prolongent
              l'idée de rêve.
              <div className={stylesMobile.empty}></div>
              Ainsi, dans cet univers créé sur scène, se déroule-t-elle
              l'histoire d'amour, qui est le point principal du spectacle.
              Commencée dans la réalité, mise en parallèle dans la fantaisie et
              poursuivie dans la réalité, c'est une histoire d'amour qui brise
              les frontières des réalités. Considérant que le spectacle tente
              pourtant de résumer un amour pendant la pandémie, c’est à chacun
              de juger, mais du point de vue esthétique, il refuse de décevoir.
              <div className={stylesMobile.empty}></div>
              Considérant que le show tente pourtant de résumer un amour pendant
              la pandémie, il appartient à chacun de juger du bien-fondé de ce
              qui est présenté, mais du point de vue esthétique, il refuse de
              décevoir.
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={mainImage}
                alt="L'affiche de la pièce"
              />
              <div className={stylesMobile.imageSmallText}>
                - L'affiche de la pièce
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
