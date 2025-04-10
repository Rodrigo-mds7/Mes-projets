import React, { useEffect, useState } from 'react';

export default function AlbumsPage() {
    

    const showAlbumsDetails = (id) => () => {
        window.location.href = `/albums/${id}`;
    }
    useEffect(() => {

        const fetchAlbumsDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/albums`);
                const data = await response.json();
                console.log(data)
                setAlbums(data);
            } catch (error) {
                console.error('Error fetching albums details:', error);
            }
        };

        fetchAlbumsDetails();
    }, []);

    const [albums, setAlbums] = useState(null);





    return(
        <div className='p-4'>
            <div>
                <h1 className='text-5xl font-bold text-center'>Albums list</h1>
                {
                    albums?.map(albums => (
                        <div onClick={showAlbumsDetails(albums.id)} className='cursor-pointer items-center bg-red-900 flex bg-slate-900 p-2 gap-2 my-2 rounded items-center' key={albums.id}>
                            <div className='h-8 w-8 rounded-full'>
                                <img className='min-w-8 h-full w-full object-cover rounded' src={albums.cover} alt={albums.name} />
                            </div>
                            <h2 className='text-xs font-bold'>{albums.id}</h2>
                            <h2>{albums.name} <span className='text-xs font-light text-slate-400'>({albums.description})</span></h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}