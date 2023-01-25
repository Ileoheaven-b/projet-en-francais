import styles from "../styles/abonment.module.css";
import Link from "next/link";
import Modal from "../components/modal/modal";

export default function Abonment() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.casete}>
          <div className={styles.textBox}>
            <div className={styles.title}>Gratuit</div>
            <div className={styles.textInfo}>
              <div>-bulletin d'information</div>
              <div>-articles bonus</div>
              <div>-les avantages sont gratuits</div>
            </div>
            <div className={styles.price}>
              <div className={styles.priceTag}>0.0EUR</div>
              <div className={styles.month}>/mois</div>
            </div>
            <hr className={styles.bar}></hr>
            <div className={styles.advertise}>
              GRATUIT! Abonnez-vous maintenant
            </div>
            <div className={styles.pay}>
              Nous acceptons paypal et carte de crédit.
            </div>
          </div>
          <div className={styles.textBox}>
            <div className={styles.title}>Standard</div>
            <div className={styles.textInfo}>
              <div>-les avantages du gratuit</div>
              <div>-plus d'articles bonus</div>
              <div>-the site now has an English translate setting</div>
            </div>
            <div className={styles.price}>
              <div className={styles.priceTag}>1.0EUR</div>
              <div className={styles.month}>/mois</div>
            </div>
            <hr className={styles.bar}></hr>
            <div className={styles.advertise}>
              BON MARCHÉ! Achetez maintenant!
            </div>
            <div className={styles.pay}>
              Nous acceptons paypal et carte de crédit.
            </div>
          </div>
          <div className={styles.textBox}>
            <div className={styles.title}>Premium</div>
            <div className={styles.textInfo}>
              <div>-les avantages du gratuit</div>
              <div>-les avantages du standard</div>
              <div>-journal à la maison</div>
            </div>
            <div className={styles.price}>
              <div className={styles.priceTag}>3.5EUR</div>
              <div className={styles.month}>/mois</div>
            </div>
            <hr className={styles.bar}></hr>
            <div className={styles.advertise}>
              BON MARCHÉ! Achetez maintenant!
            </div>
            <div className={styles.pay}>
              Nous acceptons paypal et carte de crédit.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
