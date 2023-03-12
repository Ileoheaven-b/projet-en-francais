import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import image1 from "../../imagesFrontPage/Mode-1.png";
import image2 from "../../imagesFrontPage/Mode-2.png";
import image3 from "../../imagesFrontPage/Mode-3.png";
import image4 from "../../imagesFrontPage/Mode-4.png";
import image5 from "../../imagesFrontPage/Clothes1.jpeg";
import image6 from "../../imagesFrontPage/Mode-6.png";
import image7 from "../../imagesFrontPage/Mode-7.png";
import image8 from "../../imagesFrontPage/Mode-8.png";
import image9 from "../../imagesFrontPage/Mode-9.png";
import image10 from "../../imagesFrontPage/Mode-10.png";
import image11 from "../../imagesFrontPage/Mode-11.png";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <div className={styles.title}>
              Mode. Pourquoi ne pas s'habiller avec style quand on en a
              l'occasion ?
            </div>
            <div className={styles.empty}></div>
            <div className={styles.twoElements}>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image1} alt="Mode" />
              </div>
              <div className={styles.text}>
                <div className={styles.twoElements}>
                  <div className={styles.subTitle}>
                    Les boutiques d 'occasion et les outlets sont une excellente
                    alternative aux magasins de vétements ordinaires, que tu
                    aimes Ies vétements vintage, tu te soucies de I
                    'environnement ou que tu veux simplement économiser de I
                    'argent.
                  </div>
                  <div className={styles.subTitle}>
                    Mais puisque vous lisez cet article, je n'ai pas besoin de
                    vous convaincre que vous pouvez trouver des vétements stylés
                    et cool dans les friperies et que réutiliser des vétements
                    est une fagon de prendre soin de la planete. Alors, voici
                    mes boutiques d 'occasion préférées à Botosani oil je chasse
                    des objets rares et insolites.
                  </div>
                </div>
                <div className={styles.empty}></div>
              </div>
            </div>
            <div class={styles.subTitle}>
              <div className={styles.twoElements}>
                <div className={styles.imageContainer}>
                  <Image className={styles.image} src={image2} alt="Mode" />
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.title}>
                    <b>Tendances de Ia mode</b>
                  </div>
                  Situé pres de l'höpital de la ville au numero 2, Rue George
                  Enescu, Oshop Outlet est un autre excellent choix pour les
                  passionnés de mode. Si vous préférez ne pas porter de
                  vétements qui ont deja ete portés par dtautres personnes, mais
                  que vous voulez tout de méme des étements bon marché et à la
                  mode, Oshop Outlet est plus que parfait.
                </div>
                <div className={styles.imageContainer}>
                  <Image className={styles.image} src={image3} alt="Mode" />
                </div>
              </div>
            </div>
            <div className={styles.empty}></div>
            <div className={styles.twoElements}>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image4} alt="Mode" />
              </div>
              <div class={styles.subTitle}>
                <div className={styles.title}>
                  <b>Chic</b>
                </div>
                Des prix bas pour des vétements neufs, souvent de marques
                internationales et une large gamme de tenues et d' accessoires :
                que demander de plus ? Oshop Outlet est le meilleur, surtout si
                vous recherchez des marques que vous ne pourriez normalement pas
                vous permettre, ce qui rend le mode accessible à tous les
                passionnés de mode.
              </div>
            </div>
            <div className={styles.empty}></div>
            <div className={styles.twoElements}>
              <div className={styles.subTitle}>
                <div className={styles.title}>
                  <b>Oh là là</b>
                </div>
                Le magasin d'occasion de la route nationale 119, Botosani
                pourrait étre Itendroit idéal pour trouver des vétements
                abordables et élégants. Les vétements abordables sont leur
                principale caractéristique, mais ce que je pense étre Ia
                meilleure chose à propos de ce magasin de vétements, c'est la
                variété de vétements que quelqu'un peut trou
                <div className={styles.empty}></div>
              </div>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image11} alt="Mode" />
              </div>
            </div>
            <div className={styles.subTitle}>
              Les principaux problémes de I 'industrie de la mode sont son
              consumérisme et son manque de diversité. Alors que la mode
              universellement encouragée est principalement d'un type unique, il
              existe de nombreux autres styles des modes alternative, dont n
              certain nombre peuvent certainement étre trouvés dans notre Ville.
              Ce magasin peut fournir aux jeunes un sens de Ia créativité hors
              du commun avec Ies ressources nécessaires pour s'habiller comme
              ils se sentent comme cela les représente. De plus, ce magasin
              regorge de t- shirts amusants avec lesquels vous pourrez
              surprendre vos amis, surtout en été, mais pas seulement.
            </div>

            <div className={styles.empty}></div>

            <div className={styles.title}>
              <b>Avantaj</b>
            </div>

            <div className={styles.twoElementsSpecial}>
              <div className={styles.subTitle}>
                Mais la meilleure chose å propos d'Avantaj est sa vaste gamme de
                vétements : des allées pleines de tout et de tout ce dont vous
                pourriez avoir besoin ou envie ;
                <div className={styles.imageContainer}>
                  <Image className={styles.image} src={image5} alt="Mode" />
                </div>
              </div>
              <div className={styles.subTitle}>
                vous ne venez peut- étre que pour un chapeau ou un bracelet mais
                repartez avec trois nouvelles tenues prétes å étre portées !
                Dites-le å vos amis et partez en friperie un samedi lorsqu 'ils
                se réapprovisionnent, et soyez å I 'affüt des noms de marque,
                car il se peut qu 'il y en ait de cachés lå-dedans ! Localise
                pres de notre lycee se trouve Avantaj, un magasin dloccasion
                populaire parmi les adolescents intéressés par la mode, mais
                avec un petit budget. Son nom ne trompe pas : c'est sür qu'il
                est avantageux ! Des vétements géniaux et durables pour pas cher
                !
              </div>
            </div>

            <div className={styles.empty}></div>

            <div className={styles.title}>
              <b>Trucs et astuces</b>
            </div>

            <div className={styles.empty}></div>

            <div className={styles.twoElements}>
              <div className={styles.subTitle}>
                <b>
                  1. Ne mélangez pas les motifs, cela rendra votre tenue cheap.
                </b>
              </div>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image6} alt="Mode" />
              </div>
              <div className={styles.subTitle}>
                {" "}
                <b>au alors</b>
              </div>

              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image7} alt="Mode" />
              </div>
            </div>

            <div className={styles.empty}></div>

            <div className={styles.twoElements}>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image8} alt="Mode" />
              </div>
              <div className={styles.subTitle}>
                <b>
                  2. La couleur de Ia ceinture doit correspondre celle des
                  chaussures.
                </b>
              </div>
            </div>

            <div className={styles.empty}></div>

            <div className={styles.twoElements}>
              <div className={styles.subTitle}>
                <b>
                  3. Pour une tenue élégante, essayez de ne pas porter plus de
                  trois couleurs Ia fois.
                </b>
              </div>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image9} alt="Mode" />
              </div>
            </div>

            <div className={styles.empty}></div>
            
            <div className={styles.twoElements}>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image10} alt="Mode" />
              </div>
              <div className={styles.subTitle}>
                <b>
                  2. La couleur de Ia ceinture doit correspondre celle des
                  chaussures.
                </b>
              </div>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className={stylesMobile.homeContainer}>
          <div className={stylesMobile.textBox}>
            <Image
              className={stylesMobile.image}
              src={mainImage1}
              alt=""
              layout="responsive"
            />
          </div>
          <div className={stylesMobile.textBox}>
            <Image
              className={stylesMobile.image}
              src={mainImage2}
              alt=""
              layout="responsive"
            />
          </div>
          <div className={stylesMobile.textBox}>
            <Image
              className={stylesMobile.image}
              src={mainImage3}
              alt=""
              layout="responsive"
            />
          </div>
        </div>
      </>
    );
  };

  return ComponentChange();
}
