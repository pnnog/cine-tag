import { Outlet } from "react-router-dom"

import { CardsContextProvider } from "@context/Cards"
import Footer from "@components/Footer"
import Header from "@components/Header"

const Base = () =>{
  return(
   <>
    <Header />
    <CardsContextProvider>
      <Outlet />
    </CardsContextProvider>
    <Footer />

   </>
  )
}

export default Base