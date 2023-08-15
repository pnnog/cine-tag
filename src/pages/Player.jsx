import Heading from "@components/Heading"
import useCardsContext from "hooks/useCardsContext"
import {useParams } from "react-router-dom"

const Player = () =>{
  const {id} = useParams()
  const {getMoviePlayer} = useCardsContext()

  const movie = getMoviePlayer(id)

  return(
   <main className="container mx-auto p-6">
    <Heading> {movie.title}</Heading>
    <div className="w-full h-[500px] bg-gray-500 flex items-center justify-center text-green-300">
      PLAYER
    </div>
   </main>
  )
}

export default Player