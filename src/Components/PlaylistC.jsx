import React from 'react';

function PlaylistC({ playlist, removeFromPlaylist }) {
  console.log("richard print", playlist)
  return (
    <div>
      <ul>
        {playlist && playlist.map((song) => (
          <li key={song.id}>
            <div>
              <h3>{song.Title}</h3>
              {/* Display song information */}
              {/* <button
                type="button"
                onClick={() => removeFromPlaylist(song.id)}
              >
                Remove from Playlist
              </button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistC;
