import axios from "axios";
import React, { useEffect, useState } from "react";
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

  const handleGenreClick = async (genreId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=8bb7f4763d0c0ea36982da5add0ff854&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
    );
    setSelectedGenre(genreId);
    setMovies(res.data.results);
    console.log(res.data.results);
  };

  return (
    <div className="w-full py-4 without">
      <div className="w-full mx-auto h-20">
        <Carousel
          showThumbs={false}
          autoPlay={false}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          centerMode={true}
          showArrows={true}
        >
          {genres.map((genre) => (
            <div
              key={genre.id}
              onClick={() => handleGenreClick(genre.id)}
              style={{ cursor: "pointer" }}
              className="inline-block active:scale-90"
            >
              <h2 className="text-4xl text-[#3EEBE6] textShadows z-5 w-full md:pb-8 pb-12">
                {genre.name}
              </h2>
            </div>
          ))}
        </Carousel>
      </div>
      {selectedGenre && (
        <div className="flex flex-col justify-center h-auto w-full">
          <div className="grid grid-cols-1 w-full mx-auto place-content-center">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={3}
              infiniteLoop={true}
              showStatus={false}
            >
              {movies.map((movie) => (
                <Link
                  to={`/trailer/${movie.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="pb-4">
                    <h2
                      key={movie.id}
                      className="text-white text-3xl px-2 textShadows"
                    >
                      {movie.title}
                    </h2>
                    <div className="aspect-square w-full withoutgenre">
                      <img
                        src={`https://image.tmdb.org/t/p/original${
                          movie && movie.backdrop_path
                        }`}
                        alt={movie.name}
                        className="m-auto block w-full"
                      />
                    </div>
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
                    <div className="md:w-1/2 md:text-left text-justify text-md flex mb-1 md:text-lg font-semibold">
                      {movie ? movie.overview : ""}
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default Genres;
