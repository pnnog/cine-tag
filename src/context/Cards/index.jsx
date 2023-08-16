import { createContext, useState } from "react";

export const CardsContext = createContext()

export const CardsContextProvider = ({children}) =>{
  const [favs, setFavs] = useState([])

  return(
    <CardsContext.Provider value={{favs, setFavs}}>
      {children}
    </CardsContext.Provider>
  )
}



