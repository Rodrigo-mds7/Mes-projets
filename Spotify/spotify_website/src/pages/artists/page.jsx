import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function ArtistsPage() {

    const showArtistDetails = (id) => () => {
        window.location.href = `/artists/${id}`;
    }
    useEffect(() => {

        const fetchArtistDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/artists`);
                const data = await response.json();
                setArtist(data);
            } catch (error) {
                console.error('Error fetching artist details:', error);
            }
        };

        fetchArtistDetails();
    }, []);

    const [artist, setArtist] = useState(null);
    return(
        <div className='p-4'>
            <div>
                <h1 className='text-5xl font-bold text-center'>Artists list</h1>
                {
                    artist?.map(artist => (
                        <div onClick={showArtistDetails(artist.id)} className='cursor-pointer items-center bg-red-900 flex bg-slate-900 p-2 gap-2 my-2 rounded items-center' key={artist.id}>
                            <div className='h-8 w-8 rounded-full'>
                                <img className='h-full w-full object-cover rounded' src={artist.photo} alt={artist.name} />
                            </div>
                            <h2 className='text-xs font-bold'>{artist.id}</h2>
                            <h2>{artist.name} <span className='text-xs font-light text-slate-400'>({artist.description})</span></h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}