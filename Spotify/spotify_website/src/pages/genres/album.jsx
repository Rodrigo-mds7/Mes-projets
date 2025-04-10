import {useState, useEffect} from 'react';

export default function Alb({album}){


    const [albumsDetails, setAlbumsDetails] = useState(null);

    
    function fetchAlbumsDetails(album) {
        const url = `http://localhost:8000/albums/${album}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAlbumsDetails(data);
            })

    }
    useEffect(() => {
        console.log("test")
        fetchAlbumsDetails(album)
    });
    

    return (
        <div className='cursor-pointer items-center bg-red-900 flex bg-slate-900 p-2 gap-2 my-2 rounded items-center' key={album}>
          <h2 className='text-xs font-bold'>{album}</h2>
          {albumsDetails && (
            <>
              <img src={albumsDetails.album.cover} alt={albumsDetails.album.name} className='w-10 h-10' />
              <h1>{albumsDetails.album.name}</h1>
            </>
          )}
        </div>
      );
}