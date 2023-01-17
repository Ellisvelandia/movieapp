import React from "react";
import uknown from "../assets/uknown.jpg";

const PopularList = ({ popularMovies }) => {
  return (
    <div className="my-4">
      <h1 className="text-[#3EEBE6] md:text-5xl text-3xl font-semibold my-4">
        The Popular Movies
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 place-content-center grid-cols-1 gap-4 mt-8">
        {popularMovies.map((popular) => {
          const {
            backdrop_path,
            original_title,
            id,
            overview,
            popularity,
            release_date,
          } = popular;
          return (
            <div
              key={id}
              className="text-white  shadow-md p-4 my-4 flex flex-col align-center hover:bg-[#133f3e]"
            >
              <h2 className="text-2xl text-center">{original_title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                alt={original_title}
                onError={(e) => {
                  e.target.src = uknown;
                }}
                width="384"
                height="512"
                className="w-[500px] h-60 rounded shadow my-4"
              />
              <blockquote>
                <p className="text-lg text-justify font-medium">“{overview}”</p>
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
