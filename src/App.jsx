import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Songs from './Pages/Songs';
import AddSong from './Pages/AddSong';
import Playlist from './Pages/Playlist';
import Layout from './Layout';
import EditSong from './Pages/EditSong';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
      // Fetch data from db.json when the component mounts
      fetch('https://rjr-music.onrender.com/Songs') 
          .then(response => response.json())
          .then(data => setSongs(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);

  const [playlist, setPlaylist] = useState([]);

  function addToPlaylist(song){
      setPlaylist([...playlist, song]);
      console.log("added in parent")
      
  };
  console.log("playlistxxxx", playlist)

  function removeFromPlaylist(songId){
      setPlaylist(playlist.filter((song) => song.id !== songId));
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path ='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Songs' element={<Songs songs={songs} addToPlaylist={addToPlaylist} playlist={playlist} removeFromPlaylist={removeFromPlaylist} />}/>
            <Route path='/AddSong' element={<AddSong />}/>
            <Route path='/Playlist' element={<Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} />}/>
            <Route path='/EditSong/:id' element={<EditSong/>}/>
           
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}


export default App
