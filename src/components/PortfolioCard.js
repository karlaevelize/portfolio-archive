import styled from "styled-components";
import { useState } from "react";
import { Modal } from "./Modal";

const PortfolioCard = ({ item }) => {

  const [ modalOpen, setModalOpen ] = useState(false);

  const { name, author, imageUrl, description, tags } = item

  return (
    <>
      <Container>
        <div>
          <img style={{ height: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20 }} src={imageUrl} alt={name}/>
        </div>
        <div style={{ margin: 10 }}>
          <Title>{name.toUpperCase()}</Title>
          <Description>{description}</Description>
          <div>
            Created by {author}
          </div>
          <div >
            {tags.map(tag => (
                <li>{tag}</li>
            ))}
          </div>
          <div style={{ textAlign: "right" }}>
            <Button onClick={() => setModalOpen(true)}>
              More info
            </Button>
          </div>
        </div>
      </Container>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen}> 
          <ModalContainer>
            Coming soon...
          </ModalContainer>
        </Modal>
      )}
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
  border: 1px solid #DCDCDC;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px; */
`

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  margin: 10;
  color: #4682B4;
  font-weight: 500;
`

const Description = styled.div`
  color: #49494E;
`

const Button = styled.button`
  /* border: 1px solid #DCDCDC; */
  padding: 5px;
  border-radius: 50%;
  font-size: 11px;
  /* background-color: #4682B4; */

  &:hover {
    color: #4682B4
  }
`
