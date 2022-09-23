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
    <div className="m-auto flex flex-row flex-wrap justify-around">
      {data.map((item) => (
        <div className="max-w-md m-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src={item.imageUrl} alt={item.name}/>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:underline">{item.name}</div>
              {/* <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black">Finding customers for your new business</a> */}
              <p className="mt-2 text-slate-500">{item.description}</p>
              <div className="flex flex-row flex-end">
                {item.tags.map(tag => (
                    <li className="bg-yellow-400 list-none rounded-xl">{tag}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export { Homepage }