import Banner from "@components/Banner"
import Cards from "@components/Cards"
import Container from "@components/Container"
import Heading from "@components/Heading"
import useCardsContext from "hooks/useCardsContext"

const Favoritos = () => {

  const {favCards} = useCardsContext()
  const thereAreFavorites = favCards.length>0
  return (
    <>
      <Banner />
      <Container>
        <Heading> Meus favoritos </Heading>
        {thereAreFavorites && <Cards cards={favCards} />}
        {!thereAreFavorites &&  <p> Você ainda não favoritou nenhum filme. :(</p>}
      </Container>

    </>
    

  )
}

export default Favoritos