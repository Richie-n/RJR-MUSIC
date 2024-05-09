import React, { useState, useEffect } from 'react';

function SearchBar({ addToPlaylist, playlist }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [songs, setSongs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://rjr-music.onrender.com/Songs')
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    filterResults(event.target.value);
  };

  const filterResults = (query) => {
    const filteredResults = songs.filter((song) =>
      song.Title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleAddToPlaylist = (song) => {
    addToPlaylist(song);
    console.log('added to playlist',song)
    
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
      <div className="relative mt-6">
        <h1 className="text-white text-3xl font-bold mb-5 text-center">Find a Song</h1>
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="What do you want to listen to ?"
          value={searchTerm}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
      <ul className="mt-6">
        {searchResults.map((song) => (
          <li key={song.id} className="text-white">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className='flex justify-center text-center'>
                <iframe height="315" className='w-[24vw]'
                src={`https://www.youtube.com/embed/${song.Song}?autoplay=1`}
                >
                </iframe>
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{song.Title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`Artist: ${song.Artist}`}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`Genre: ${song.Genre}`}</p>
                <button type="button" onClick={() => handleAddToPlaylist(song)} className="text-white bg-gray-700 mt-2 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Add to Playlist</button>
                <a href={`https://www.youtube.com/watch?v=${song.Song}`} target='_blank' type="button" className="text-white bg-blue-700 mt-2 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-900">Download</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SearchBar;
