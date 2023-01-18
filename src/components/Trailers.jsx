import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Trailers = () => {
  const [trailer, setTrailer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8bb7f4763d0c0ea36982da5add0ff854&language=en-US`
      );
      setTrailer(response.data.results[0]);
      console.log(response.data);
    }
    fetchData();
  }, [id]);

  return (
    <div className="text-6xl text-white shadowbox without w-full">
      {trailer && (
        <iframe
          title={`Trailer of ${trailer.name}`}
          src={`https://www.youtube.com/embed/${trailer.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width="100%"
          height="100%"
          className="aspect-video"
        />
      )}
    </div>
  );
};

export default Trailers;
