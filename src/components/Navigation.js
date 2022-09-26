import styled from "styled-components"

const Navigation = () => {

  return (
    <Container>
      <Title>PORTFOLIO ARCHIVE <spam style={{ color: "red", fontSize: 10 }}>Codaisseur</spam></Title>
      <Title>Add Project +</Title>
    </Container>
  )
}

export { Navigation }

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white; 
  height: 60px;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #DCDCDC;
  overflow: hidden;
`

const Title = styled.div`
  font-size: 15px;
  margin: 0px 15px;
  font-weight: 600;
  /* font-family: 'Special Elite', cursive; */
`
