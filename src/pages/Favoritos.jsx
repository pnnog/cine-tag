import Cards from "@components/Cards"
import Heading from "@components/Heading"
import Section from "@components/Section"
import useCardsContext from "hooks/useCardsContext"

const Favoritos = () => {

  const {favCards} = useCardsContext()
  const thereAreFavorites = favCards.length>0
  return (
    <main>
      <Heading> Meus favoritos </Heading>
      {thereAreFavorites && <Cards cards={favCards} />}
      {!thereAreFavorites && <Section> <p> Você ainda não favoritou nenhum filme. :(</p></Section> }
    </main>
    

  )
}

export default Favoritos