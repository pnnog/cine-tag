import cardsData from '@json/cards.json'

import { createContext, useState } from "react";

export const CardsContext = createContext()

export const CardsContextProvider = ({children}) =>{
  const [cards, setCards] = useState(cardsData)

  return(
    <CardsContext.Provider value={{cards, setCards}}>
      {children}
    </CardsContext.Provider>
  )
}



