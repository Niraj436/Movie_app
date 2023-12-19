import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({movie}) => {
  return (
  
        
          <div className="max-w-sm bg-black border border-gray-800 shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700 w-56 hover:scale-110">
            <Link to="#">
              <img
                className="rounded-t-lg"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
              />
            </Link>
            <div className="p-5">
              <p className="mb-3 font-normal text-white dark:text-white-400">
                <i className="fa-solid fa-star pr-2"></i> {movie.vote_average}
              </p>
              <Link
                to={`/movieDetails/${movie.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                More Details
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
      
  )
}

export default Card