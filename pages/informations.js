import styles from "../styles/informations.module.css";
import Link from "next/link";

export default function Informations() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.textBox}>
          <div className={styles.title}>Qui? Qu'est-ce que le? Pourquoi?</div>
          <div className={styles.text}>
            Lorem ipsum dolor parte mare de calamare din marea cea tare si bate
            vantu trece frunza Lorem ipsum dolor parte mare de calamare din
            marea cea tare si bate vantu trece frunzaLorem ipsum dolor parte
            mare de calamare din marea cea tare si bate vantu trece frunzaLorem
            ipsum dolor parte mare de calamare din marea cea tare si bate vantu
            trece frunzaLorem ipsum dolor parte mare de calamare din marea cea
            tare si bate vantu trece frunzaLorem ipsum dolor parte mare de
            calamare din marea cea tare si bate vantu trece frunzaLorem ipsum
            dolor parte mare de calamare din marea cea tare si bate vantu trece
            frunza
          </div>
        </div>

        <div className={styles.textBox}>
          <div className={styles.title}>Contact</div>
          <div className={styles.text}>
            Email de la classe: example.email.classe@gmail.com <br></br> Github
            des créateurs: <br></br>{" "}
            <a className={styles.link} href="https://github.com/distroierONE">
              Serban
            </a>{" "}
            <br></br>{" "}
            <a className={styles.link} href="https://github.com/Ileoheaven-b">
              Victor
            </a>{" "}
            <br></br>{" "}
            <a className={styles.link} href="https://github.com/Theosux">
              Teodor
            </a>{" "}
            <br></br>{" "}
            <a className={styles.link} href="https://github.com/GeneRIXGMI">
              Sebastian
            </a>{" "}
            <br></br>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
