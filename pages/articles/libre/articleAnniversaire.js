import styles from "../../../styles/article.module.css";
import stylesMobile from "../../../styles/article.mobile.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import mainImage from "../../imagesFrontPage/TempsLibreMain.png";

export default function Article() {
  const ComponentChange = () => {
    const matches = useMediaQuery("only screen and (min-width: 1025px)");
    return matches ? (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <Image
              className={styles.image}
              src={mainImage}
              alt=""
              layout="responsive"
            />
          </div>
        </div>
      </>
    ) : (
      <>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <Image
              className={styles.image}
              src={mainImage}
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
