const data = [
  { name: "Wind Farm Discovery", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
  { name: "Wind Farm Discovery", description: "Project to help find wind farms and calculate their power production", imageUrl: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_468_15820221946286117.png", tags: ["TypeScript", "graphQl"], frontendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Frontend", backendRepo: "https://github.com/ingridmca/WindFarmDiscovery-PortfolioProject-Backend" },
]

const Homepage = () => {
  
  return(
    <div style={{ 
      // backgroundColor: "blue", 
      display: "flex", 
      flexDirection: "row", 
      flexWrap: "wrap", 
      justifyContent: "center", 
      // borderRadius: 20,
      margin: "auto",
       }}>
      {data.map((item) => (
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          maxWidth: 300,
          margin: 20,
          borderStyle: "5px solid black",
          // backgroundColor: "red", 
          borderRadius: 20,
        }}>
          <div>
            <img style={{ height: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20 }} src={item.imageUrl} alt={item.name}/>
          </div>
          {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
          <div style={{ margin: 10 }}>
            <div>{item.name.toUpperCase()}</div>
            <p >{item.description}</p>
            <div >
              {item.tags.map(tag => (
                  <li>{tag}</li>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export { Homepage }