import React, { useState } from "react";
import { ModalProps } from "./type";

import "./styles.css";

export const Dashboard = () => {
  const [show, setShow] = useState(false);

  function showModal() {
    setShow(true);
  }

  function hideModal() {
    setShow(false);
  }

  return (
    <main>
      <Modal show={show} handleClose={hideModal}>
        <h3>Opa meu bom, aparentemente o Modal ta funcionando</h3>
      </Modal>
      <button type='button' onClick={showModal}>
        Open
      </button>
    </main>
  );
};

const Modal: React.FC<ModalProps> = ({ show, children, handleClose }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};
