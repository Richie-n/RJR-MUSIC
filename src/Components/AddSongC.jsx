import React, { useState } from 'react';

function AddSongC() {
  const [formData, setFormData] = useState({
    Title: "",
    Artist: "",
    Genre: "",
    Song: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("https://rjr-music.onrender.com/Songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      setFormData({
        Title: "",
        Artist: "",
        Genre: "",
        song: ""
      });

      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    });
  };

  return (
    <div className="upload_segment flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="upload_form max-w-md">
        <h1 className="text-white text-3xl font-bold mb-5">Upload a Song</h1>
        <div className="mb-5">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-white dark:text-white">Title</label>
          <input type="text" name='Title' id="title" value={formData.Title} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
        </div>
        <div className="mb-5">
          <label htmlFor="artist" className="block mb-2 text-sm font-medium text-white dark:text-white">Artist</label>
          <input type="text" name='Artist' id="artist" value={formData.Artist} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
        </div>
        <div className="mb-5">
          <label htmlFor="genre" className="block mb-2 text-sm font-medium text-white dark:text-white">Genre</label>
          <input type="text" name='Genre' id="genre" value={formData.Genre} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
        </div>
        <div className="mb-5">
          <label htmlFor="song" className="block mb-2 text-sm font-medium text-white dark:text-white">Song</label>
          <input type="text" name='Song' id="song" value={formData.Song} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload song</button>
      </form>
    </div>
  );
}

export default AddSongC;
