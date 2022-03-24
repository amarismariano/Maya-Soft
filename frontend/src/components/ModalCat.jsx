import React from "react";
import { Modal, Image } from "react-bootstrap";
import useCats from "../hooks/useCats";

const ModalCat = () => {
  const { modal, handleModalClick } = useCats();

  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Modal.Body>zzz</Modal.Body>
    </Modal>
  );
};

export default ModalCat;
