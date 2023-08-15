import useCardsContext from 'hooks/useCardsContext'

import Cards from "@components/Cards"
import Heading from "@components/Heading"

const Home = () =>{

  const {cards} = useCardsContext()
  
  return(
    <main>
      <Heading> Um lugar para guardar seus vídeos e filmes! </Heading>
      <Cards cards={cards} />
    </main>
  )

}


export default Home