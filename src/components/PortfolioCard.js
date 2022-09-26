import styled from "styled-components";
import { useState } from "react";
import { Modal } from "./Modal";

const PortfolioCard = ({ item }) => {

  const [ modalOpen, setModalOpen ] = useState(false);

  const { name, imageUrl, description, tags } = item

  return (
    <>
      <Container>
        <div>
          <img style={{ height: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20 }} src={imageUrl} alt={name}/>
        </div>
        <div style={{ margin: 10 }}>
          <Title>{name.toUpperCase()}</Title>
          <Description>{description}</Description>
          <div >
            {tags.map(tag => (
                <li>{tag}</li>
            ))}
          </div>
          <button
            className="openModalBtn"
            onClick={() => setModalOpen(true)}
          >
          Open
          </button>
        </div>
      </Container>
      {modalOpen && <Modal setOpenModal={setModalOpen}> 
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
      </Modal>}
    </>
  )
}

export { PortfolioCard }

const Container = styled.div`
  display: flex; 
  flex-direction: column;
  max-width: 300px;
  margin: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px;
`

const Title = styled.div`
  margin: 10;
  color: #4682B4;
  font-weight: 500;
`

const Description = styled.div`
  color: #49494E;
`
