import styled from "styled-components"
import { Link } from "react-router-dom"

const Navigation = () => {

  return (
    <Container>
      <Link to="/">
        <Title>PORTFOLIO ARCHIVE <spam style={{ color: "red", fontSize: 10 }}>Codaisseur</spam></Title>
      </Link>
      <Link to="/add-project">
        <Title>Add Project +</Title>
      </Link>
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
