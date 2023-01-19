import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiPlay } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=8bb7f4763d0c0ea36982da5add0ff854&language=en-US"
      );
      setGenres(res.data.genres);
    };
    getGenres();
  }, []);

  useEffect(() => {
    const getMoviesByGenre = async (genreId) => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=8bb7f4763d0c0ea36982da5add0ff854&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
      );
      setSelectedGenre(genreId);
      setMovies(res.data.results);
    };

    getMoviesByGenre(28);
  }, []);

  const handleGenreClick = async (genreId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=8bb7f4763d0c0ea36982da5add0ff854&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
    );
    setSelectedGenre(genreId);
    setMovies(res.data.results);
  };

  return (
    <div className="w-full py-4 without relative">
      <div className="w-full mx-auto h-20">
        <Carousel
          showThumbs={false}
          autoPlay={false}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          centerMode={true}
          showArrows={true}
          className="relative"
        >
          {genres.map((genre) => (
            <div
              key={genre.id}
              onClick={() => handleGenreClick(genre.id)}
              style={{ cursor: "pointer" }}
              className="inline-block active:scale-90"
            >
              <button className="btn text-3xl text-white hover:bg-[#0A0B12] textShadows z-5 w-full px-2 md:mb-8 mb-12 rounded shadowbox">
                {genre.name}
              </button>
            </div>
          ))}
        </Carousel>
      </div>
      {selectedGenre && (
        <div className="flex flex-col justify-center h-auto w-full">
          <div
            className="grid grid-cols-1 w-full mx-auto place-content-center relative"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={3}
              infiniteLoop={true}
              showStatus={false}
            >
              {movies.map((movie) => (
                <div key={movie.id}>
                  <div className="aspect-square w-full withoutgenre">
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        movie && movie.backdrop_path
                      }`}
                      alt={movie.name}
                      className="m-auto block w-full"
                    />
                  </div>
                  <div
                    className="absolute md:p-20 py-16 px-4 bottom-0 flex flex-col w-full posterImage"
                    key={movie.id}
                  >
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
                    <div className="md:w-1/2 md:text-left text-justify text-md flex mb-1 md:text-lg font-semibold ">
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
        </div>
      )}
    </div>
  );
};

export default Genres;
