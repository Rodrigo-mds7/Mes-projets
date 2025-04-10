import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function detailsAlbums(){

    const { id } = useParams();
    const [albums, setAlbums] = useState(null);
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        const fetchAlbumsDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/albums/${id}`);
                const data = await response.json();
                setAlbums(data.album)
                setTracks(data.tracks)
                console.log(data.album)
                console.log(data.tracks)
            } catch (error) {
                console.error('Error fetching albums details:', error);
            }
        };

        fetchAlbumsDetails();
    }, []);


    return(
        <div className=''>
            <div className='flex items-center gap-12'>
                <div className='bg-black/10 w-full'>
                    <h1 className='text-5xl font-bold text-center'>Albums details</h1>
                    <div className='flex gap-2 my-2'>
                        <div className='h-128 min-w-2/5 rounded-full'>

                            <img className='h-full w-full object-cover rounded' src={albums?.cover} alt={albums?.name} />
                        </div>
                        <div className='p-8 gap-2'>
                            <h2 className='text-2xl uppercase font-bold mb-4'>{albums?.name} <span className='text-xs font-light text-slate-400'>({albums?.description})</span></h2>
                            <h3 className='text-xs font-bold italic'>{albums?.bio}</h3>
                        </div>
                    </div>
                    <div >
                        {
                            tracks?.map(track => (
                                <div className='bg-red-900 flex bg-slate-900 p-2 gap-2 my-2 rounded items-center' key={track.id}>
                                    <h2 className='text-xs font-bold'>{track.id}</h2>
                                    <h2>{track.name} <span className='text-xs font-light text-slate-400'>({track.description})</span></h2>
                                    <figure>
                                        <figcaption>Listen to the T-Rex:</figcaption>
                                        <audio controls src={track.mp3}></audio>
                                    </figure>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}