import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <Wrapper className={`${isModalOpen ? "show-modal-overlay" : ""}`}>
      <section className={`${isModalOpen ? "show-modal modal" : "modal"}`}>
        <div className="modal-content">
          <h5>Contenuto del modal</h5>
        </div>
        <button className="btn btn-delete btn-modal" onClick={closeModal}>
          <AiFillCloseCircle className="nav-icon" />
        </button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);

  .modal {
    position: relative;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -130%);
    height: 150px;
    width: 250px;
    background-color: white;
    border-radius: var(--radius);
    display: grid;
    place-items: center;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    .btn-modal {
      position: absolute;
      padding: 0.1rem;
      top: 1%;
      right: 1%;
    }
  }
`;

export default Modal;
