import React, { useEffect, useState } from 'react';

export default function GenresPage() {

    const showGenresDetails = (id) => () => {
        window.location.href = `/genres/${id}`;
    }
    useEffect(() => {

        const fetchGenresDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/genres`);
                const data = await response.json();
                setGenres(data);
            } catch (error) {
                console.error('Error fetching genres details:', error);
            }
        };

        fetchGenresDetails();
    } );

    const [genres, setGenres] = useState(null);
    return(
        <div className='p-4'>
            <div>
                <h1 className='text-5xl font-bold text-center'>Genres list</h1>
                {
                    genres?.map(genre => (
                        <div onClick={showGenresDetails(genre.id)} className='cursor-pointer items-center bg-red-900 flex bg-slate-900 p-2 gap-2 my-2 rounded items-center' key={genre.id}>
                            <h2 className='text-xs font-bold'>{genre.id}</h2>
                            <h2>{genre.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}