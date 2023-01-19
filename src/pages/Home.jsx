import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FiPlay } from "react-icons/fi";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=8bb7f4763d0c0ea36982da5add0ff854&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div
      className="w-full mx-auto"
      style={{ textDecoration: "none", color: "white" }}
    >
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        className="w-full"
      >
        {movies.map((movie) => (
          <div key={movie.id}>
            <div className="aspect-square w-full without">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
                alt={movie.name}
                className="m-auto block w-full"
                loading="lazy"
              />
            </div>
            <div className="absolute md:p-20 py-16 px-4 bottom-0 flex flex-col w-full posterImage">
              <div className="font-black md:text-6xl text-md mt-2 md:text-left text-center">
                {movie ? movie.original_title : ""}
              </div>
              <div className="md:text-3xl mb-4 md:text-left text-center text-md">
                {movie ? movie.release_date : ""}
                <span>
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="md:w-1/2 md:text-left text-justify text-md flex mb-1 md:text-lg font-semibold">
                {movie ? movie.overview : ""}
              </div>
              <div className="flex gap-4 mt-2">
                <Link to={`/trailer/${movie.id}`}>
                  <button
                    className="borderRaiusColor  md:text-lg text-base p-3 rounded-md flex hover:bg-[#0A0B12] active:scale-90"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Play
                    <FiPlay className="w-5 mt-1.5" />
                  </button>
                </Link>
                <Link to={`/movie/${movie.id}`}>
                  <button
                    className="borderRaiusColor md:text-lg text-base p-3 rounded-md inline-block hover:bg-[#0A0B12] active:scale-90"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Watch more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
