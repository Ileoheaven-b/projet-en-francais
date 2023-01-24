import styles from "../styles/index.module.css";
import Link from "next/link";
import Image from "next/image";
import intelligence from "./imagesFrontPage/ArtificialIntelligence.png";
import placeholderImage from "./imagesFrontPage/PlaceholderImage.jpg";

export default function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.home}>
          <Link className={styles.article} href="/other">
            <div className={styles.articleTitle}>Placeholder Title</div>
            <div className={styles.articleText}>
              Lorem ipsum dolor parte mare de calamare din marea cea tare si
              bate vantu trece frunza Lorem ipsum dolor parte mare de calamare
              din marea cea tare si bate vantu trece frunzaLorem ipsum dolor
              parte mare de calamare din marea cea tare si bate vantu trece
              frunzaLorem ipsum dolor parte mare de calamare din marea cea tare
              si bate vantu trece frunzaLorem ipsum dolor parte mare de calamare
              din marea cea tare si bate vantu trece frunzaLorem ipsum dolor
              parte mare de calamare din marea cea tare si bate vantu trece
              frunzaLorem ipsum dolor parte mare de calamare din marea cea tare
              si bate vantu trece frunza
            </div>
          </Link>

          <Link className={styles.article} href="/articles/technologique/articleAI">
            <div className={styles.articleTitle}>
              ChatGPT : Le partenaire d'étude intelligent
            </div>
            <div className={styles.articleText}>
              ChatGPT, un outil Ai avancé qui pourrait aider les étudiants à se
              développer dans un large éventail d'aspects de leur éducation,
              tels que l'organisation des ressources et des informations,
              l'écriture, la communication et le développement linguistique...
            </div>
            <Image
              className={styles.articleImage}
              src={intelligence}
              alt="Image d'une IA"
              layout="responsive"
            />
          </Link>

          <Link className={styles.article} href="/other">
            <div className={styles.articleTitle}>Placeholder Title</div>
            <div className={styles.articleText}>
              Lorem ipsum dolor parte mare de calamare din marea cea tare si
              bate vantu trece frunzaLorem ipsum dolor parte mare de calamare
              din marea cea tare si bate vantu trece frunzaLorem ipsum dolor
              parte mare de calamare din marea cea tare si bate vantu trece
              frunzaLorem ipsum dolor parte mare de calamare din marea cea tare
              si bate vantu trece frunzaLorem ipsum dolor parte mare de calamare
              din marea cea tare si bate vantu trece frunzaLorem ipsum dolor
              parte mare de calamare din marea cea tare si bate vantu trece
              frunza
            </div>
          </Link>

          <Link className={styles.article} href="/other">
            <div className={styles.articleTitle}>Placeholder Title</div>
            <div className={styles.articleText}>
              Lorem ipsum dolor parte mare de calamare din marea cea tare si
              bate vantu trece frunzaLorem ipsum dolor parte mare de calamare
              din marea cea tare si bate vantu trece frunzaLorem ipsum dolor
              parte mare de calamare din marea cea tare si bate vantu trece
              frunzaLorem ipsum dolor parte mare de calamare din marea cea tare
              si bate vantu trece frunzaLorem ipsum dolor parte mare de calamare
              din marea cea tare si bate vantu trece frunzaLorem ipsum dolor
              parte mare de calamare din marea cea tare si bate vantu trece
              frunza
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
