import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import muffins from "../../imagesFrontPage/Cupcake2.png";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <div className={styles.title}>
              Quelque chose de doux pour finir
              <div className={styles.imageSmallText}>- Janvier, 2023</div>
            </div>

            <div className={styles.empty}></div>

            <Image className={styles.image} src={muffins} alt="" />
            <div className={stylesMobile.subTitle}>
              Si vous avez envie de quelque chose de sucré, facile à préparer et
              bon marché, c'est la recette parfaite.
            </div>

            <div className={styles.empty}></div>
            <div className={styles.text}>
              Ingrédients:<br></br>
              -240 g de farine <br></br>
              -150 g de chocolat<br></br>
              -150 g de sucre<br></br>
              -100 g de beurre<br></br>
              -80 ml de lait<br></br>
              -2 gros oeufs<br></br>
              -une cuillère à café et demie de levure chimique<br></br>
              -une essence de vanille<br></br>
              -un peu de sel<br></br>
            </div>
            <div className={styles.empty}></div>

            <div className={styles.text}>
              Instructions<br></br> Homogénéiser le sucre avec le beurre.
              Ajouter les oeufs petit à petit. Puis essence de vanille et sel,
              ensuite le lait. Enfin mettre la farine mélangée à la levure
              chimique. Peut être ajouté, éventuellement, des flocons de
              chocolat ou des fruits/des noix. On les fait cuire environ 20
              minutes à 175°. Bon appétit!
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
              Quelque chose de doux pour finir
              <div className={stylesMobile.imageSmallText}>- Janvier, 2023</div>
            </div>

            <div className={stylesMobile.empty}></div>

            <Image className={stylesMobile.image} src={muffins} alt="" />
            <div className={stylesMobile.subTitle}>
              Si vous avez envie de quelque chose de sucré, facile à préparer et
              bon marché, c'est la recette parfaite.
            </div>

            <div className={stylesMobile.empty}></div>
            <div className={stylesMobile.subTitle}>
              Ingrédients:<br></br>
              -240 g de farine <br></br>
              -150 g de chocolat<br></br>
              -150 g de sucre<br></br>
              -100 g de beurre<br></br>
              -80 ml de lait<br></br>
              -2 gros oeufs<br></br>
              -une cuillère à café et demie de levure chimique<br></br>
              -une essence de vanille<br></br>
              -un peu de sel<br></br>
            </div>
            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.text}>
              Instructions<br></br> Homogénéiser le sucre avec le beurre.
              Ajouter les oeufs petit à petit. Puis essence de vanille et sel,
              ensuite le lait. Enfin mettre la farine mélangée à la levure
              chimique. Peut être ajouté, éventuellement, des flocons de
              chocolat ou des fruits/des noix. On les fait cuire environ 20
              minutes à 175°. Bon appétit!
            </div>

            <div className={stylesMobile.empty}></div>
          </div>
        </div>
      </>
    );
  };

  return ComponentChange();
}
