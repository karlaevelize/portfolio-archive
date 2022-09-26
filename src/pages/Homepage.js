import styled from "styled-components"
import { PortfolioCard } from "../components"
import { Navigation } from "../components"

const data = [
  { name: "Wind Farm Discovery", author: "Ingrid", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", author: "Ingrid", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", author: "Ingrid", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", author: "Ingrid", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", author: "Ingrid", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", author: "Ingrid", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", author: "Ingrid", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
]


const Homepage = () => {
  
  return(
    <Container>
      <Navigation/>
      {data.map((item) => <PortfolioCard key={item.id} item={item}/> )}
    </Container>
  )
}

export { Homepage }

const Container = styled.div`
  // background-color: blue; 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: center; 
  // border-radius: 20;
  margin: auto;
`
