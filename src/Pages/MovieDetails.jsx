import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const MovieDetails = () => {
    let {id} = useParams()
    let [moviedata , setmoviedata] = useState([])

    const[watchlist, setwatchlist] = useState([])

    let navigate = useNavigate()
    

    useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=9a06b1798c599b880e7f9953de0d36c9`
        )
          .then((res) => res.json())
          .then((data) => setmoviedata(data));
          
      }, []);

     const addWatchList = (movie) =>{
        const newWatchList = [...watchlist, movie];
        setwatchlist(newWatchList)
     }
      


  return(
    <div>
    <div className="moviedata-container bg-gray-700 xl:flex md:px-28 md:py-10 md:flex-wrap">
        <div className=''>
            <img src={`https://image.tmdb.org/t/p/original/${moviedata.poster_path}`} alt="this is a image" className='h-96' />
        </div>
        <div className='pl-10 py-2 flex-1 flex flex-col text-white'>
            <div className='text-5xl text-white py-2'>
                {moviedata.original_title}
            </div>
            <div className='py-2'>
                <span className='text-xl'>Release date: </span>
                {moviedata.release_date}
            </div>
            <div className='py-2'>
                <span className='text-xl'>Rating: </span>
            <i className="fa-solid fa-star pr-2"></i>
                {moviedata.vote_average}
            </div>
            <div className='py-2'>
                <span className='text-xl'>Status: </span>
                {moviedata.status}
            </div>
            <div className='py-2'>
                <span className='text-xl'>Production Compinies: </span>
                {
                moviedata && moviedata.production_companies
                ?
                moviedata.production_companies.map(company=>company.name).join(",") : ""
                }
            </div>
            <div className='py-2'>
                <span className='text-xl'>Genre: </span>
                {
                moviedata && moviedata.genres 
                ?
                moviedata.genres.map(genre=>genre.name).join(', ') : ""
            }
            </div>
            <div className='description py-2'>
                <div className='text-3xl py-1 text-red-600'>Overview</div>
                {moviedata.overview}
            </div>
            <div className='py-6'>
                <button className='rounded-full bg-violet-800 py-2 px-5 hover:scale-105 hover:shadow-lg' ><i className="fa-solid fa-list"></i>  Add to watchlist</button>
                <Link to={moviedata.homepage} target='_blank'>
                <button className='rounded-full bg-red-800 py-2 px-8 mx-5 hover:scale-105 hover:shadow-lg'  >  <i className="fa-solid fa-house"></i> HomePage</button>              
                </Link>
           
            </div>
        </div>
    </div>

    </div>
  )
}

export default MovieDetails