import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import mainImage1 from "../../imagesFrontPage/Mode1.png";
import mainImage2 from "../../imagesFrontPage/Mode2.png";
import mainImage3 from "../../imagesFrontPage/Mode3.png";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <Image
              className={styles.image}
              src={mainImage1}
              alt=""
              layout="responsive"
            />
          </div>
          <div className={styles.textBox}>
            <Image
              className={styles.image}
              src={mainImage2}
              alt=""
              layout="responsive"
            />
          </div>
          <div className={styles.textBox}>
            <Image
              className={styles.image}
              src={mainImage3}
              alt=""
              layout="responsive"
            />
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
