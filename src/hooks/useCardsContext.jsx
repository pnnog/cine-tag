import { CardsContext } from "@context/Cards"
import { useContext } from "react"

const useCardsContext = () =>{
  const {cards, setCards}  = useContext(CardsContext)
  const favCards = cards.filter(card => card.fav === true)


  const newCards = (cards, id) => {
    return cards.map(card => {
      if(card.id === id){
        card.fav = !card.fav
      }
      return card
    })

    
  }

  const toggleFav = (id) => {
    setCards(newCards(cards, id))
  }

  const getMoviePlayer = (id) =>{
    const movie = cards.find(card => card.id == id)
    return movie    
  } 


  return{
    cards,
    favCards,
    toggleFav,
    getMoviePlayer
  }
}

export default useCardsContext