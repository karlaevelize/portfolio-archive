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
        <div style={{ margin: 15, }}>
          <Title>{name.toUpperCase()}</Title>
          <Author>
            <p>Created by <spam>{author}</spam></p>
          </Author>
          <Description>{description}</Description>
          {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}> */}
            <TagsContainer>
              {tags.map(tag => (
                  <Tag style={{ backgroundColor: tag.color }}>{tag.name}</Tag>
              ))}
            </TagsContainer>
          {/* </div> */}
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

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 78%;
`

const Tag = styled.div`
  /* border: 1px solid #DCDCDC; */
  padding: 4px 14px;
  font-size: 12px;
  border-radius: 30px;
  margin: 5px 2px;
  color: black;
`

const Title = styled.div`
  margin: 10;
  color: #4682B4;
  font-weight: 500;
`

const Description = styled.div`
  color: #49494E;
  margin: 5px 0px;
  font-weight: 300;
`

const Author = styled.div`
  font-size: 12px;
  font-weight: 150;
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
