import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Register from "./pages/Register"
import Artists from "./pages/artists/page"
import DetailsArtists from "./pages/artists/detailsArtists"
import Albums from "./pages/albums/page"
import DetailsAlbums from "./pages/albums/detailsAlbums"
import Genres from "./pages/genres/page"
import DetailsGenres from "./pages/genres/detailsGenres"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Profil from "./pages/Profil"
import './App.css'
import Search from "./pages/Search"

function App() {

return (
<>
{/* <Header /> */}
<Routes>

<Route path="/" element={<Home />} />
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/profil" element={<Profil />} />
<Route path="/search" element={<Search />} />

<Route path="/artists" element={<Artists />} />
<Route path="/artists/:id" >
<Route index element={<DetailsArtists />} />
<Route path=":id" element={<DetailsArtists />} />
</Route>
<Route path="/albums" element={<Albums />} />
<Route path="/albums/:id" >
<Route index element={<DetailsAlbums />} />
<Route path=":id" element={<DetailsAlbums />} />
</Route>
<Route path="/genres" element={<Genres />} />
<Route path="/genres/:id" >
<Route index element={<DetailsGenres />} />
<Route path=":id" element={<DetailsGenres />} />
</Route>

</Routes>
</>
)
}

export default App

