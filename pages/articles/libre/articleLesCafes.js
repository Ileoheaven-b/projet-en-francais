import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import mainImage from "../../imagesFrontPage/Main_Image_-_Les_Cafes.png";
import image1 from "../../imagesFrontPage/Image_1_-_Les_Cafes.png";
import image2 from "../../imagesFrontPage/Image_2_-_Les_Cafes.png";
import image3 from "../../imagesFrontPage/Image_3_-_Les_Cafes.png";
import qr1 from "../../imagesFrontPage/QR_1_-_Les_Cafes.png";
import qr2 from "../../imagesFrontPage/QR_2_-_Les_Cafes.png";
import qr3 from "../../imagesFrontPage/QR_3_-Les_Cafes.png";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <div className={styles.title}>Les cafés dans Botosani</div>

            <div className={styles.empty}></div>

            <Image className={styles.image} src={mainImage} alt="" />
            <div className={styles.subTitle}>
              Les cafés oü les jeunes de Botosani choisissent de passer leur
              temps libre
            </div>

            <div className={styles.empty}></div>

            <div className={styles.text}>
              Les ados recherchent, surtout en saison froide. des cafés oü se
              sentir bien en se réchauffant autour d'un café ou d'un thé. Méme
              si Botosani n'est pas une si grande Ville, il existe de nombreux
              endroits oü les jeunes peuvent passer leur temps libre avec des
              amis ou en famille. Pour mieux vous orienter, nous avons préparé
              une liste des cafés les plus populaires de Botosani.
            </div>

            <div className={styles.empty}></div>

            <div className={styles.twoElements}>
              <div className={styles.text}>
                <div className={styles.subTitle}>
                  <b>1. Opera</b>
                </div>
                Cafe Opera, situé au 33. rue Octav Onicescu, est l'endroit idéal
                pour des réunions entre amis, car vous avez å la fois une
                atmosphere accueillante et un personnel amical, ainsi que de
                délicieuses collations et boissons. L'endroit est tres élégant,
                avec une terrasse spacieuse pour les journées chaudes et un
                espace intérieur avec de la bonne musique pour les journées
                d'hiver. Le café propose également des jeux que vous pouvez
                emprunter pour rendre vos réunions entre amis encore plus
                amusantes. Oe plus, le lieu organise souvent des événements
                thématiques tres mignons.
                <br></br> <br></br>
                Vous pouvez trouver plus d'informations sur leur site Web,
                auquel vous pouvez accéder en scannant le code OR suivant:
              </div>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={qr1} alt="Le café" />
                <div className={styles.imageSmallText}>- Le site Web</div>
              </div>
            </div>
            <div className={styles.empty}></div>

            <div className={styles.twoElements}>
              <div className={styles.text}>
                <div className={styles.subTitle}>
                  <b>2. Facefood</b>
                </div>
                Facefood. I'un des restaurants les plus populaires de la Ville,
                se classe deuxiéme dans la liste des cafés de Botosani. Connu
                pour son ambiance agréable et ses délicieuses collations et
                boissons, qui en font l'endroit idéal pour des rencontres entre
                amis, il est situé proximité du Collége National "A.T. Laurian",
                sur la rue Cuza Vodå 13. Comme dans le cas du café Opera, å
                l'intérieur vous pouvez trouver de nombreux jeux que vous pouvez
                emprunter, certains événements locaux sont également organisés
                ici.
              </div>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image1} alt="Café" />
              </div>
            </div>
            <div className={styles.twoElements}>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image2} alt="Facefood" />
                <div className={styles.imageSmallText}>- Facefood</div>
              </div>
              <div className={styles.text}>
                <div className={styles.twoElements}>
                  <div className={styles.text}>
                    Vous pouvez trouver plus d'informations sur leur page
                    Instagram, laquelle vous pouvez accéder en scannant le code
                    OR suivant:
                  </div>
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.image}
                      src={qr2}
                      alt="Instagram QR code"
                    />
                    <div className={styles.imageSmallText}>- Instagram</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.empty}></div>

            <div className={styles.twoElements}>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src={image3} alt="5 To Go" />
                <div className={stylesMobile.imageSmallText}>- 5 To Go</div>
              </div>
              <div className={styles.text}>
                <div className={styles.twoElements}>
                  <div className={styles.text}>
                    <div className={styles.subTitle}>
                      <b>3. 5 To Go</b>
                    </div>
                    Le dernier, mais pas le dernier, 5 to go est certainement
                    dans le top des préférences des adolescents de tout le pays,
                    étant tres chanceux que nous ayons aussi un de leurs
                    restaurants Botosani. Méme si respace n•est pas trop grand,
                    le restaurant est tres bien situé, en centre-ville, pour que
                    si vous étes de passage, vous puissiez déguster une boisson
                    chaude avec un ami.
                    <br></br> <br></br>
                    Vous pouvez trouver plus d'informations sur leur page
                    Instagram, Iaquelle vous pouvez accéder en scannant le code
                    OR suivant:
                  </div>
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.image}
                      src={qr2}
                      alt="Instagram QR code"
                    />
                    <div className={stylesMobile.imageSmallText}>
                      - Instagram
                    </div>
                  </div>
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

            <Image className={stylesMobile.image} src={mainImage} alt="" />
            <div className={stylesMobile.subTitle}>
              Les cafés oü les jeunes de Botosani choisissent de passer leur
              temps libre
            </div>

            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.text}>
              Les ados recherchent, surtout en saison froide. des cafés oü se
              sentir bien en se réchauffant autour d'un café ou d'un thé. Méme
              si Botosani n'est pas une si grande Ville, il existe de nombreux
              endroits oü les jeunes peuvent passer leur temps libre avec des
              amis ou en famille. Pour mieux vous orienter, nous avons préparé
              une liste des cafés les plus populaires de Botosani.
            </div>

            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.text}>
              <div className={stylesMobile.subTitle}>
                <b>1. Opera</b>
              </div>
              Cafe Opera, situé au 33. rue Octav Onicescu, est l'endroit idéal
              pour des réunions entre amis, car vous avez å la fois une
              atmosphere accueillante et un personnel amical, ainsi que de
              délicieuses collations et boissons. L'endroit est tres élégant,
              avec une terrasse spacieuse pour les journées chaudes et un espace
              intérieur avec de la bonne musique pour les journées d'hiver. Le
              café propose également des jeux que vous pouvez emprunter pour
              rendre vos réunions entre amis encore plus amusantes. Oe plus, le
              lieu organise souvent des événements thématiques tres mignons.
              <br></br> <br></br>
              Vous pouvez trouver plus d'informations sur leur site Web, auquel
              vous pouvez accéder en scannant le code OR suivant:
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image className={stylesMobile.image} src={qr1} alt="Le café" />
              <div className={stylesMobile.imageSmallText}>- Le site Web</div>
            </div>

            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.text}>
              <div className={stylesMobile.subTitle}>
                <b>2. Facefood</b>
              </div>
              Facefood. I'un des restaurants les plus populaires de la Ville, se
              classe deuxiéme dans la liste des cafés de Botosani. Connu pour
              son ambiance agréable et ses délicieuses collations et boissons,
              qui en font l'endroit idéal pour des rencontres entre amis, il est
              situé proximité du Collége National "A.T. Laurian", sur la rue
              Cuza Vodå 13. Comme dans le cas du café Opera, å l'intérieur vous
              pouvez trouver de nombreux jeux que vous pouvez emprunter,
              certains événements locaux sont également organisés ici.
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image className={stylesMobile.image} src={image1} alt="Café" />
            </div>

            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={image2}
                alt="Facefood"
              />
              <div className={stylesMobile.imageSmallText}>- Facefood</div>
            </div>
            <div className={stylesMobile.text}>
              Vous pouvez trouver plus d'informations sur leur page Instagram,
              laquelle vous pouvez accéder en scannant le code OR suivant:
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={qr2}
                alt="Instagram QR code"
              />
              <div className={stylesMobile.imageSmallText}>- Instagram</div>
            </div>

            <div className={stylesMobile.empty}></div>

            <div className={stylesMobile.text}>
              <div className={stylesMobile.subTitle}>
                <b>3. 5 To Go</b>
              </div>
              Le dernier, mais pas le dernier, 5 to go est certainement dans le
              top des préférences des adolescents de tout le pays, étant tres
              chanceux que nous ayons aussi un de leurs restaurants Botosani.
              Méme si respace n•est pas trop grand, le restaurant est tres bien
              situé, en centre-ville, pour que si vous étes de passage, vous
              puissiez déguster une boisson chaude avec un ami.
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={image3}
                alt="5 To Go"
              />
              <div className={stylesMobile.imageSmallText}>- 5 To Go</div>
            </div>
            <div className={stylesMobile.text}>
              Vous pouvez trouver plus d'informations sur leur page Instagram,
              Iaquelle vous pouvez accéder en scannant le code OR suivant:
            </div>
            <div className={stylesMobile.imageContainer}>
              <Image
                className={stylesMobile.image}
                src={qr2}
                alt="Instagram QR code"
              />
              <div className={stylesMobile.imageSmallText}>- Instagram</div>
            </div>
          </div>

          <div className={stylesMobile.empty}></div>
        </div>
      </>
    );
  };

  return ComponentChange();
}
