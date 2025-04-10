import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function DetailsArtists(){

    useEffect(() => {
        const fetchArtistDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/artists/${id}`);
                const data = await response.json();
                setArtist(data);
            } catch (error) {
                console.error('Error fetching artist details:', error);
            }
        };

        fetchArtistDetails();
    }, []);

    const { id } = useParams();
    const [artist, setArtist] = useState(null);
    return(
        <div className='bg-slate-800  text-slate-100 h-screen'>
            <div className='flex items-center gap-12'>
                <div className='bg-black/10 w-full'>
                    <h1 className='text-5xl font-bold text-center'>Artist details</h1>
                    <div className='flex gap-2 my-2'>
                        <div className='h-128 min-w-2/5 rounded-full'>
                            <img className='h-full w-full object-cover rounded' src={artist?.photo} alt={artist?.name} />
                        </div>
                        <div className='p-8 gap-2'>
                            <h2 className='text-2xl uppercase font-bold mb-4 underline'>{artist?.name} <span className='text-xs font-light text-slate-400'>({artist?.description})</span></h2>
                            <h3 className='text-xs font-bold italic'>{artist?.bio}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}