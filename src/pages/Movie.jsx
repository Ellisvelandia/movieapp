import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { RiHomeGearFill } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="w-full relative flex flex-col align-center p-2">
      <div className="w-full relative">
        <img
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
          className="w-full md:aspect-square shadowbox rounded without"
          loading="lazy"
        />
        <div className="md:ml-2 absolute bottom-0 left-0 z-2 flex md:w-60 h-60 w-40 ">
          <img
            src={`https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.poster_path : ""
            }`}
            className="w-80 rounded-xl shadowbox"
            loading="lazy"
          />
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center lg:-mt-4">
        <div className="text-white flex flex-wrap mt-8 justify-center textShadows">
          <div className="textShadows mt-8">
            <div className="font-semibold md:text-5xl text-3xl">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="text-md">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="flex m-2 justify-center items-center text-lg">
              <AiOutlineStar className="w-6 h-6" />
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <span className="ml-8 flex text-lg">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="font-semibold text-lg">
              Duration:{" "}
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="text-lg">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className="md:m-4 m-2 w-full flex md:flex-row flex-wrap justify-center">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <div key={genre.id} className="md:my-0 my-3">
                      <span
                        className="px-4 py-2 rounded-3xl mr-4 my-1 borderRaiusColor"
                        id={genre.id}
                      >
                        {genre.name}
                      </span>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center w-full mt-2 gap-4 flex-wrap">
          {currentMovieDetail && currentMovieDetail.homepage && (
            <a
              href={currentMovieDetail.homepage}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="flex justify-center hover:bg-[rgb(209,29,29)] active:scale-90 items-center p-4 rounded-2xl cursor-pointer w-36 textShadows text-white bg-[rgb(255,0,0)]">
                  Homepage <RiHomeGearFill style={{ width: "20px" }} />
                </span>
              </p>
            </a>
          )}
          {currentMovieDetail && currentMovieDetail.imdb_id && (
            <a
              href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="bg-[#0BCCF1] hover:bg-[#74e4fa] active:scale-90 shadowbox flex justify-center items-center p-4 rounded-2xl cursor-pointer w-36 font-bold text-white textShadows">
                  IMDb <BiCameraMovie style={{ width: "20px" }} />
                </span>
              </p>
            </a>
          )}
        </div>
      </div>

      <div className="relative w-full flex flex-wrap justify-center items-center gap-8 textShadows">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <div key={company.id}>
              {company.logo_path && (
                <span
                  className="flex flex-col align-center justify-center pb-4"
                  key={company.id}
                >
                  <img
                    className="w-48 h-auto m-8 items-center "
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                    loading="lazy"
                  />
                  <span className="text-white font-semibold text-xl text-center">
                    {company.name}
                  </span>
                </span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Movie;
