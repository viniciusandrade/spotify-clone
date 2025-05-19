import React from "react";
import SongItem from "./SongItem";

function SongList({ songsArray }) {
  const items = 5;
  return (
    <>
      <div className="song-list">
        {songsArray
          .filter((currentValue, index) => index < items)
          .map((currSongObj, index) => (
            <SongItem {...currSongObj} key={`song-${index}`} index={index} />
          ))}
        <p className="song-list__see-more">Ver mais</p>
      </div>
    </>
  );
}

export default SongList;
