import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Card from "../card/Card";

const Home = () => {
  const [Now_playing, setNow_playing] = useState([]);
  const [Popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9a06b1798c599b880e7f9953de0d36c9"
    )
      .then((res) => res.json())
      .then((data) => setNow_playing(data.results));
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9a06b1798c599b880e7f9953de0d36c9"
    )
      .then((res) => res.json())
      .then((data) => setPopular(data.results));
  }, []);
  return (
    <div className="home-container">
      {/*srt now playing */}
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={3}
        showStatus={false}
        showThumbs={false}
      >
        {Now_playing.map((movie) => (
          <Link to={`/movieDetails/${movie.id}`}>
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                className="image_carousel"
              />

              <div className="flex flex-col justify-start">
                <div className="text-5xl font-black absolute bottom-52 pl-10  text-red-800">
                  {movie.original_title}
                </div>
                <div className="pt-4 text-lg font-semibold absolute bottom-40 pl-10 text-white">
                  {movie.release_date}{" "}
                  <span className="pl-10">
                    <i className="fa-solid fa-star"></i> {movie.vote_average}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      {/* now playing end */}

      {/* popular srt */}

      <div className="text-white text-4xl mx-36 my-10 font-bold">Popular</div>
      <div className="popular grid grid-cols-6 justify-center media-query ">
      {
        Popular.map(movie=>(
          <Card movie={movie} key={movie.id}></Card>
        ))
      }
      </div>
      {/* popular end*/}
    </div>
  );
};

export default Home;
