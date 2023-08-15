import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "@pages/Home"
import Favoritos from "@pages/Favoritos"
import Player from "@pages/Player"
import NotFound from "@pages/NotFound"
import Base from "@pages/Base"

function AppRoutes() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element ={<Home/>}/>
            <Route path="favoritos" element ={<Favoritos/>}/>
            <Route path="player/:id" element={<Player />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes
