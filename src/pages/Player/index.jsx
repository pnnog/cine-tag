import Heading from "@components/Heading"
import useCardsContext from "hooks/useCardsContext"
import {useParams } from "react-router-dom"
import Banner from "@components/Banner"
import Container from "@components/Container"
import NotFound from "@pages/NotFound"

const Player = () =>{
  const {id} = useParams()
  const {getMoviePlayer} = useCardsContext()

  const movie = getMoviePlayer(id)


  return movie?(
    <>
      <Banner />
      <Container>
        <Heading> {movie.title}</Heading>
        <div className="w-full h-[500px] bg-gray-500 flex items-center justify-center text-green-300">
          PLAYER
        </div>
      </Container>

    </>
 
  )
  : <NotFound />


  
}

export default Player