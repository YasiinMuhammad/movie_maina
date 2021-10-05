import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../request";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

//{movie?.overview} the ? helps state that if the movie is undifinded dont freak out but handle nicely.
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [buttonText, setButtonText] = useState("Play");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(1, n - 1) + "..." : str;
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setButtonText("Play");
      setTrailerUrl("");
    } else {
      setButtonText("Close");
      movieTrailer(movie?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button
              onClick={() => handleClick(movie)}
              className="banner_button"
            >
              {buttonText}
            </button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        <div className="banner_fade_bottom" />
      </header>
      <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
    </>
  );
};

export default Banner;
