import Banner from "@components/Banner"
import Cards from "@components/Cards"
import Container from "@components/Container"
import Heading from "@components/Heading"
import useCardsContext from "hooks/useCardsContext"

const Favoritos = () => {

  const {favs} = useCardsContext()

  const alreadyExists = favs.length>0
  return (
    <>
      <Banner />
      <Container>
        <Heading> Meus favoritos </Heading>
        {alreadyExists && <Cards cards={favs} />}
        {!alreadyExists &&  <p className="text-white text-xl"> Você ainda não favoritou nenhum filme. :(</p>}
      </Container>

    </>
    

  )
}

export default Favoritos