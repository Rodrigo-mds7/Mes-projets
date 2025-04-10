import { useState } from "react";

export default function Search() {
const [query, setQuery] = useState(""); 
const [results, setResults] = useState([]); 

const handleSearch = async (e) => {
e.preventDefault(); 
if (!query) return; 

try {
const response = await fetch(`http://localhost:8000/search?query=g&type=genre`);
const data = await response.json();
setResults(data.results || []); 
} catch (error) {
console.error("Erreur lors de la recherche :", error);
}
};

return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300">
{}
<form
onSubmit={handleSearch}
className="relative flex items-center border border-transparent rounded-lg bg-gray-800 p-4 hover:border-gray-500 focus-within:bg-gray-700 focus-within:border-gray-500 w-3/4 max-w-md"
>
<input
type="text"
value={query}
onChange={(e) => setQuery(e.target.value)} // Met à jour la requête
className="w-full bg-transparent text-gray-400 outline-none placeholder-gray-500"
placeholder="Rechercher albums, artistes ou genres..."
/>a
<kbd className="absolute right-2 bg-gray-600 text-gray-300 rounded px-1 text-xs shadow-md">/</kbd>
<button type="submit" className="absolute right-10 text-gray-400 hover:text-white">
<svg
className="w-5 h-5"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 56.966 56.966"
fill="currentColor"
>
<path d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" />
</svg>
</button>
</form>

{/* Résultats de recherche */}
<div className="mt-8 w-3/4 max-w-md">
{results.length > 0 ? (
<ul className="space-y-4">
{results.map((result, index) => (
<li key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
<p className="font-bold">{result.name}</p>
<p className="text-sm text-gray-400 capitalize">{result.type}</p>
</li>
))}
</ul>
) : (
query && <p className="text-center">Aucun résultat trouvé.</p>
)}
</div>
</div>
);
}
