import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import './style.css';

export const modalStyle = {
  backgroundColor: "var(--primary-bg)",
}

export const RegisterNow = styled.div`
  display: flex;
  justify-content: flex-end;
  top: calc(100vh - 90px);
  z-index: 10;
`;

const RegisterModal = ({show, closeModal, openModal}) => {

    return (
      <>
        <RegisterNow className="position-sticky contain">
          <Button 
            className="btn btn-gradient secondary-text" 
            onClick={openModal}
          >
            Register now
          </Button>
        </RegisterNow>
        <Modal 
          show={show} 
          onHide={closeModal} 
          contentClassName="test" 
          dialogClassName="modalDialog"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton className="header-modal">
            <Modal.Title className="title-modal">Register</Modal.Title>
          </Modal.Header>
          <Modal.Body className="body-modal" >
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              > 
                <Form.Group className="mb-3">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control type="text" rows={3} />
                </Form.Group>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" rows={3} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Company *</Form.Label>
                <Form.Control type="text" rows={3} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Job Title *</Form.Label>
                <Form.Control type="text" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button className="btn btn-outline-secondary btn-submit" onClick={closeModal}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default RegisterModal;