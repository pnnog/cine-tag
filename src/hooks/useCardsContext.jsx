import { useContext } from "react"

import { CardsContext } from "@context/Cards"

const useCardsContext = () =>{
  const {cards, setCards}  = useContext(CardsContext)
  const favCards = cards.filter(card => card.fav === true)

  const toggleFav = (id) => {
    setCards(
      cards.map(card => {
        if(card.id === id){
          card.fav = !card.fav
        }
        return card
      })

    )
  }

  const getMoviePlayer = (id) =>{
    const movie = cards.find(card => card.id == id)
    return movie    
  } 


  return{
    cards,
    setCards,
    favCards,
    toggleFav,
    getMoviePlayer
  }
}

export default useCardsContext