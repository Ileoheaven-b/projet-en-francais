import styles from "../styles/category.module.css";
import Link from "next/link";

export default function Sports() {
  return (
    <>
      <div className={styles.homeContainer}>
        <ul className={styles.list}>
          <Link className={styles.article} href="/other">
            <div className={styles.articleTitle}>Une sport article</div>
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

          <Link className={styles.article} href="/other">
            <div className={styles.articleTitle}>MESIIIIIIIIIII</div>
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

        </ul>
      </div>
    </>
  );
}
