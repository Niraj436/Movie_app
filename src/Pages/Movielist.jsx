import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../card/Card'

const Movielist = () => {
    const [moviedata , setmoviedata] = useState([])
    let {type} = useParams()

    const getData = () =>{
        fetch(
            `https://api.themoviedb.org/3/movie/${type}?api_key=9a06b1798c599b880e7f9953de0d36c9`
          )
            .then((res) => res.json())
            .then((data) => setmoviedata(data.results));
    }

    useEffect(()=>{
        getData()
    }, [])
    useEffect(()=>{
        getData()
    }, [type])

  return (
    <div>
    <div className="text-white text-4xl mx-36 my-10 font-bold">{type.toLocaleUpperCase()}</div>
      <div className="popular grid grid-cols-6 justify-center media-query ">
      {
        moviedata.map(movie=>(
          <Card movie={movie} key={movie.id}></Card>
        ))
      }
      </div>

    </div>
  )
}

export default Movielist