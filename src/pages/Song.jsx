import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs.js";
import { artistArray } from "../assets/database/artists";

function Song() {
  const { id } = useParams();

  const { image, name, artist, duration } = songsArray.filter(
    (currentSongObj) => currentSongObj.id === Number(id)
  )[0];
  //console.log(songObj);

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img className="song__image" src={image} alt="Imagem da Música X" />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`}>
          <img
            className="song__artist-image"
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artistObj.name}`}
          />
        </Link>
        <Player duration={duration} />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
}

export default Song;
