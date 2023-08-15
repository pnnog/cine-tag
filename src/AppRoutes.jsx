import { BrowserRouter, Route, Routes } from "react-router-dom"

import { CardsContextProvider } from "@context/Cards"

import Home from "@pages/Home"
import Favoritos from "@pages/Favoritos"
import Header from "@components/Header"
import Banner from "@components/Banner"
import Footer from "@components/Footer"
import Player from "@pages/Player"

function AppRoutes() {

  return (
    <BrowserRouter>
      <Header />
      <Banner />

      <CardsContextProvider>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="favoritos" element ={<Favoritos/>}/>
          <Route  path="player/:id" element={<Player />}/>
        </Routes>
      </CardsContextProvider>

      <Footer />
    </BrowserRouter>
   
  )
}

export default AppRoutes
