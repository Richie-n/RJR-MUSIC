import React from 'react';

function Playlist({ playlist, removeFromPlaylist }) {
  console.log("richard print", playlist)
  return (
    <div>
      <h1 className="text-white text-3xl font-bold mb-5 text-center">Playlist</h1>

      <div className='grid grid-cols-3 gap-4'>
        
          {playlist && playlist.map((song) => (
              <div >
                
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
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
                  <button type="button" onClick={() => removeFromPlaylist(song.id)}className="text-white bg-red-700 mt-2 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-blue-900">Remove from Playlist</button>
                  <a href={`https://www.youtube.com/watch?v=${song.Song}`} target='_blank' type="button" className="text-white bg-blue-700 mt-2 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-900">Download</a>
                </div>
              </div>

              </div>
          ))}
        
      </div>
    </div>
  );
}

export default Playlist;
