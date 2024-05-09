import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SongCard({ song }) {
    const [deleteSong, setDeleteSong] = useState([]);

    const handleDelete = (id) => {
        fetch(`https://rjr-music.onrender.com/Songs${id}`, {
            method: "DELETE",
        }) 
        .then((response) => response.json())
        .then(() => {
            setDeleteSong(deleteSong.filter((song) => song.id !== id));
        })
        .catch(error => console.error('Error deleting song:', error));
    };

    return (
        <div>
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
                    <button type="button" onClick={() => handleDelete(song.id)} className="text-white bg-red-700 mt-2 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                    <Link to={`/EditSong/${song.id}`} type="button" className="text-white bg-gray-700 mt-2 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-blue-900">Edit</Link>
                    <a href={`https://www.youtube.com/watch?v=${song.Song}`} target='_blank' type="button" className="text-white bg-blue-700 mt-2 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-blue-900">Download</a>
                </div>
            </div>
        </div>
    );
}
