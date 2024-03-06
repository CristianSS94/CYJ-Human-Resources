import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const DeleteEmployee = ({
  setShowDelete,
  showDelete,
  setDeleteId,
  deleteId,
  setRender,
}) => {
  const handleConfirmation = () => {
    if (deleteId) {
      axios
        .delete(`http://localhost:8080/rh-app/empleados/${deleteId}`)
        .then((res) => {
          setDeleteId();
          setRender(true);
          setShowDelete(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Modal show={showDelete} onHide={() => setShowDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Employee elimination</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete all information about this employee?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDelete(false)}>
            No, back
          </Button>
          <Button variant="primary" onClick={handleConfirmation}>
            Yes, delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
