import {useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import Heading from "@components/Heading"
import Banner from "@components/Banner"
import Container from "@components/Container"
import NotFound from "@pages/NotFound"

const Player = () =>{
  
  const {id} = useParams()
  const [movie, setMovie] = useState({})

  useEffect( () => {

    const getVideo = async () =>{
      const response = await fetch(`https://my-json-server.typicode.com/pnnog/cine-tag-api/cards?id=${id}`)
      const [json] = await response.json()
      setMovie(json)
    }

    getVideo()
  },[])


  if(!!movie)
    return(
        <>
          <Banner />
          <Container>
            <Heading> {movie.title}</Heading>
            <div className="w-7/12 h-[200px] md:h-[400px] lg:h-[500px] mx-auto">
            <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube-nocookie.com/embed/${movie.video}`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </Container>
        </>
    
  )

  return <NotFound />
}

export default Player