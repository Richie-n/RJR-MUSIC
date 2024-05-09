import React from 'react'
import SearchBar from '../Components/SearchBar'
import PlaylistC from '../Components/PlaylistC'
import SongCard from '../Components/SongCard'

export default function Songs({ addToPlaylist, playlist, removeFromPlaylist, songs }) {
  return (
    
      <div>
            <SearchBar addToPlaylist={addToPlaylist} playlist={playlist} />
            <PlaylistC playlist={playlist} removeFromPlaylist={removeFromPlaylist} />
            <h1 className="text-white text-3xl font-bold mb-5 text-center">Uploaded Songs</h1>
            {/* Render SongCard components for each song */}
            <div className="grid grid-cols-3 gap-4"> {/* Adjust the number of columns and gap as needed */}
                {songs && songs.map(song => (
                    <SongCard key={song.id} song={song} />
                ))}
            </div>
        </div>
    
  )
}
