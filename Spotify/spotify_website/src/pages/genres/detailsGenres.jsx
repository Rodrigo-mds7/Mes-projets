import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Alb from "./album"

export default function DetailsGenres(){

    const { id } = useParams();
    const [genres, setGenres] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [message, setMessage] = useState("null");
    const [showAlbumsDetails, setShowAlbumsDetails] = useState(null);

    useEffect(() => {

        const fetchGenresDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/genres/${id}`);
                const data = await response.json();
                setGenres(data.genre);
                setAlbums(data.albums);
            } catch (error) {
                console.error('Error fetching artist details:', error);
            }
        };

        fetchGenresDetails();
        
    }, []);

    return(
        <div className='bg-slate-800  text-slate-100 h-screen'>
            <div className='flex items-center gap-12'>
                <div className='bg-black/10 w-full'>
                    <h1 className='text-5xl font-bold text-center'>Genres details</h1>
                    <div className='flex gap-2 my-2'>
                        <div className='p-8 gap-2'>
                            <h2 className='text-2xl uppercase font-bold mb-4 underline'>{genres?.id}. <span>{genres?.name}</span></h2>
                            {
                                albums?.map(album => (
                                    <Alb key={album} album={album} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}