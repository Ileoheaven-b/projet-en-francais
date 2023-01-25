import React, { useState } from "react";
import styles from "../../styles/modal.module.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <>
      <button onClick={toggleModal} className={styles.btn_modal}>
        Abonnez-vous
      </button>

      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modal_content}>
            <div className={styles.title_modal}>Libre de s'abonner</div>
            <select className={styles.choice_modal}>
              <option value="gratis">Gratis</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
            <div className={styles.input_holder_modal}>
              <input
                className={styles.input_modal}
                placeholder="exemple@gmail.com"
                type="email"
                id="email"
                pattern=".+@globex\.com"
                required
              />{" "}
              <button className={styles.send_modal} onClick={toggleModal}>
                Je m'abonne
              </button>
            </div>
            <button className={styles.close_modal} onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
