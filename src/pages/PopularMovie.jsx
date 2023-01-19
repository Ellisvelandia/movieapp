import axios from "axios";
import React, { useEffect, useState } from "react";
import PopularList from "../components/PopularList";

const PopularMovie = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=8bb7f4763d0c0ea36982da5add0ff854&language=en-US"
      );
      setPopularMovies(res.data.results);
    };
    getPopular();
  }, []);

  return <PopularList popularMovies={popularMovies} key={popularMovies.id}/>;
};

export default PopularMovie;
