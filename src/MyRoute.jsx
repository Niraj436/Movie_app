import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Movielist from './Pages/Movielist'
import MovieDetails from './Pages/MovieDetails'


export const MyRoute = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/:type' element={<Movielist/>}/>
                <Route path='/movieDetails/:id' element = {<MovieDetails/>}/>

            </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}
