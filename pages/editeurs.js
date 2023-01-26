import styles from "../styles/editeurs.module.css";
import Link from "next/link";

export default function Editeurs() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.textBox}>
          <div className={styles.title}>Les rédacteurs de ces articles</div>
          <div className={styles.text}>
            Lorem ipsum dolor parte mare de calamare din marea cea tare si bate
            vantu trece frunza Lorem ipsum dolor parte mare de calamare din
            marea cea tare si bate vantu trece frunzaLorem ipsum dolor parte
            mare de calamare din marea cea tare si bate vantu trece frunzaLorem
            ipsum dolor parte mare de calamare din marea cea tare si bate vantu
            trece frunza
          </div>
        </div>

        <div className={styles.gridBox}>
          <div className={styles.listBox}>
            <div className={styles.title}>Catégorie sport</div>
            <ul>
              <li className={styles.text}>Nume Prenume</li>
              <li className={styles.text}>Nume Prenume</li>
              <li className={styles.text}>Nume Prenume</li>
              <li className={styles.text}>Nume Prenume</li>
              <li className={styles.text}>Nume Prenume</li>
            </ul>
          </div>
          <div className={styles.listBox}>
            <div className={styles.title}>Catégorie technologique</div>
            <ul>
              <li className={styles.text}>Gireada Serban</li>
              <li className={styles.text}>Axinte Victor</li>
              <li className={styles.text}>Matenciuc Sebastian</li>
              <li className={styles.text}>Cotovanu Teodor</li>
            </ul>
          </div>
          <div className={styles.listBox}>
            <div className={styles.title}>Catégorie mode</div>
            <ul>
              <li className={styles.text}>Nume Prenume</li>
              <li className={styles.text}>Nume Prenume</li>
              <li className={styles.text}>Nume Prenume</li>
              <li className={styles.text}>Nume Prenume</li>
              <li className={styles.text}>Nume Prenume</li>
            </ul>
          </div>
          <div className={styles.listBox}>
            <div className={styles.title}>Catégorie cuisine</div>
            <ul>
              <li className={styles.text}>Ciobanasu Bogdan</li>
              <li className={styles.text}>Puscasu Eduard</li>
              <li className={styles.text}>Vatamanu Serban</li>
              <li className={styles.text}>Sovan Maria</li>
              <li className={styles.text}>Ionita Rahela</li>
            </ul>
          </div>
          <div className={styles.listBox}>
            <div className={styles.title}>Catégorie culture</div>
            <ul>
              <li className={styles.text}>Federovici Mari</li>
              <li className={styles.text}>Gavrilet Teodora</li>
              <li className={styles.text}>Oboroceanu Bianca</li>
              <li className={styles.text}>Sanautanu Ana</li>
              <li className={styles.text}>Negrii Mara</li>
              <li className={styles.text}>Cerep Sabina</li>
            </ul>
          </div>
          <div className={styles.listBox}>
            <div className={styles.title}>Catégorie temps libre</div>
            <ul>
              <li className={styles.text}>Dumitriu David</li>
              <li className={styles.text}>Popa Petru</li>
              <li className={styles.text}>Maghiar Lucian</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
