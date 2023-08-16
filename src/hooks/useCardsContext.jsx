import { useContext } from "react"
import { CardsContext } from "@context/Cards"

const useCardsContext = () =>{
  const {favs, setFavs}  = useContext(CardsContext)

  const verifyIfIsFav = (card) =>{
    return favs.some((fav)=> fav.id === card.id)
  }

  const toggleFav = (newFavObj) => {

    const isFav = verifyIfIsFav(newFavObj)
    
    if(isFav){
     return setFavs(favs.filter((fav)=> fav.id !== newFavObj.id))
    }

    setFavs([...favs, newFavObj])
  }

  return{
    favs,
    toggleFav,
    verifyIfIsFav
  }
}

export default useCardsContext