import styled from "styled-components"

const Navigation = () => {

  return (
    <Container>
      <Title>Portfolio Archive 📚</Title>
    </Container>
  )
}

export { Navigation }

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* background-color: blue;  */
  height: 60px;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-left: 15px;
  /* color: palevioletred; */
  /* font-weight: lighter; */
  font-family: 'Special Elite', cursive;
`
