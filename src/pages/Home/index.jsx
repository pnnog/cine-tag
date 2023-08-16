import Cards from "@components/Cards"
import Heading from "@components/Heading"
import Banner from '@components/Banner'
import Container from '@components/Container'
import { useEffect, useState } from 'react'

const Home = () =>{
   
  const [cards, setCards] = useState([])

  useEffect(()=>{
    const getData = async () =>{
      const response = await fetch('https://my-json-server.typicode.com/pnnog/cine-tag-api/cards')
      const json = await response.json()
      setCards(json)
    }

    getData()
  },[])


  return(
    <>
      <Banner />
      <Container>
        <Heading> Um lugar para guardar seus vídeos e filmes! </Heading>
        <Cards cards={cards} />
      </Container>
    </>
  )

}


export default Home