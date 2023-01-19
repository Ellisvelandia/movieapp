import React from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";
import uknown from "../assets/uknown.jpg";

const PopularList = ({ popularMovies }) => {
  return (
    <div className="my-4">
      <div className="grid md:grid-cols-2 place-content-center grid-cols-1 gap-4 mt-8">
        {popularMovies.map((popular) => {
          const {
            backdrop_path,
            original_title,
            overview,
            popularity,
            release_date,
          } = popular;
          return (
            <div
              className="text-white shadowbox p-4 my-4 flex flex-col justify-center align-center hover:bg-[#050714]"
              key={popular.id}
            >
              <h2 className="text-2xl textShadows text-center">
                {original_title}
              </h2>
              <img
                src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                alt={original_title}
                onError={(e) => {
                  e.target.src = uknown;
                }}
                height="512"
                className="aspect-video rounded shadow my-4"
                loading="lazy"
              />
              <div className="flex gap-4 my-1 justify-center">
                <Link to={`/trailer/${popular.id}`}>
                  <button
                    className="borderRaiusColor  md:text-lg text-base p-3 rounded-md flex hover:bg-[#0A0B12] active:scale-90"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Play
                    <FiPlay className="w-5 mt-1.5" />
                  </button>
                </Link>
                <Link to={`/movie/${popular.id}`}>
                  <button
                    className="borderRaiusColor md:text-lg text-base p-3 rounded-md inline-block hover:bg-[#0A0B12] active:scale-90"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Watch more
                  </button>
                </Link>
              </div>
              <blockquote>
                <p className="text-lg text-justify font-medium textShadows">
                  “{overview}”
                </p>
              </blockquote>
              <figcaption className="font-medium my-2">
                <div className="text-[#3EEBE6]">
                  <span>Popularity-</span>
                  {popularity}
                </div>
                <div className="text-slate-400 dark:text-slate-500">
                  <span>Release_date-</span>
                  {release_date}
                </div>
              </figcaption>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularList;
