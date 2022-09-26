import { useRef } from "react";  
import styled from "styled-components";

const Modal = ({ setOpenModal, children }) => {

  const modalRef = useRef()

  const closeModalOutsideClik = (e) => {
    if (modalRef.current === e.target){
      setOpenModal(false)
    }
  }

  return (
    <ModalBackground ref={modalRef} onClick={closeModalOutsideClik}>
      <ModalContent>
        <CloseButton>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </CloseButton>
          {children}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </ModalContent>
    </ModalBackground>
  )
}

export { Modal }

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  width: 700px;
  height: 700px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  /* opacity: 100%; */
  display: flex;
  flex-direction: column;
  padding: 25px;
`

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
`
