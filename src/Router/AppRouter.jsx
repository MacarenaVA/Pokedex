import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import PokedexPage from "../pages/PokedexPage"
import DetailPage from "../pages/DetailPage"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </>
  )
}

export default AppRouter
