import { useEffect, useState } from "react";

export default function Home(){

const [artist, setArtist] = useState([]);
const [album, setAlbum] = useState([]);
const [genre, setGenre] = useState([]);

useEffect(() => {
async function getData() {
const url = "http://localhost:8000/artists";
try {
const response = await fetch(url);
if (!response.ok) {
throw new Error(`Response status: ${response.status}`);
}
const json = await response.json();
console.log(json);
setArtist(json);
} catch (error) {
console.error(error.message);
}
}
getData();
}
, []);
useEffect(() => {
async function getData() {
const url = "http://localhost:8000/albums";
try {
const response = await fetch(url);
if (!response.ok) {
throw new Error(`Response status: ${response.status}`);
}
const json = await response.json();
console.log(json);
setAlbum(json);
} catch (error) {
console.error(error.message);
}
}
getData();
}
, []);
useEffect(() => {
async function getData() {
const url = "http://localhost:8000/genres";
try {
const response = await fetch(url);
if (!response.ok) {
throw new Error(`Response status: ${response.status}`);
}
const json = await response.json();
console.log(json);
setGenre(json);
} catch (error) {
console.error(error.message);
}
}
getData();
}
, []);
useEffect(() => {
async function getData() {
const url = "http://localhost:8000/search";
try {
const response = await fetch(url);
if (!response.ok) {
throw new Error(`Response status: ${response.status}`);
}
const json = await response.json();
console.log(json);
} catch (error) {
console.error(error.message);
}
}
getData();
}
, []);
return(
<main className="text-white min-h-screen bg-slate-800 ">
<header className="bg-slate-700 p-4">
<h1 className="flex text-2xl font-bold justify-center">Spotify</h1>
<nav>
<ul className="flex space-x-4 mt-2 gap-6 justify-center">
<li><a href="Home.jsx" className="hover:text-gray-400 text-lg">Accueil <i className="fa-duotone fa-solid fa-house"></i></a></li>
<li><a href="/albums" className="hover:text-gray-400 text-lg">Albums <i className="fa-duotone fa-solid fa-compact-disc"></i></a></li>
<li><a href="/genres" className="hover:text-gray-400 text-lg">Genres</a></li>
<li><a href="/artistes" className="hover:text-gray-400 text-lg">Les artistes</a></li>
<li><a href="/recherche" className="hover:text-gray-400 text-lg"><i className="fa-duotone fa-solid fa-magnifying-glass text-lg"></i></a></li>
<li><a href="/profil" className="hover:text-gray-400 text-lg"><i className="fa-duotone fa-solid fa-user"></i></a></li>
</ul>
</nav>
</header>
<h1 className="text-3xl font-bold mt-6">Accueil</h1>
<h2 className="mt-6 text-2xl flex justify-center">Artistes du moment:</h2>
<div className="flex flex-wrap gap-4 justify-center">
{

artist.slice(0,10)?.map(artist => (
<div onClick={() => { window.location.href='artists'}} className='flex p-2 flex-col items-center text-center flex bg-black rounded' key={artist.id}>
<img src={artist.photo} alt={artist.name} className="w-24 h-24 rounded-full" />
<h2>{artist.name}</h2>
</div>
)) 
}
</div>
<h2 className="mt-6 text-2xl flex justify-center">Albums du moment:</h2>
<div className="flex flex-wrap gap-4 justify-center">
{

album.slice(0,10)?.map(album => (
<div onClick={() => { window.location.href='albums'}} className='flex p-2 flex-col items-center text-center flex bg-black rounded' key={album.id}>
<img src={album.cover} alt={album.name} className="w-24 h-24 rounded-full" />
<h2>Nom: {album.name}<br />
Classement de popularité: {album.popularity}ème</h2>
</div>
))
}</div>
<h2 className="mt-6 text-2xl flex justify-center">Genres:</h2>
<div onClick={() => { window.location.href='genres'}} className="flex flex-wrap gap-4 justify-center">
{

genre.slice(0,10)?.map(genre => (
<div className='flex p-2 flex-col items-center text-center flex bg-black rounded' key={genre.id}>
<h2>{genre.name}</h2>
</div>
))
}</div>
</main>
)
{}
}
