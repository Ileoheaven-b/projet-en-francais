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
            <h2>Libre de s'abonner</h2>
            <input placeholder="exemple@gmail.com" />{" "}
            <button onClick={toggleModal}>Je m'abonne</button>
            <button className={styles.close_modal} onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
