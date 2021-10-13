import React, { Fragment, useEffect, useState } from 'react';
import GifGridItems from './GifGridItems';


const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect( ()=> {   

        setTimeout(()=>{
            setLoading(false);
            getGifs(category);
        }, 3000)
        
    }, [category]);

    const getGifs = async (category) =>{
        
        let busqueda = encodeURI(category);  //escapa los espacios en blanco

        let url =  `https://api.giphy.com/v1/gifs/search?q=${busqueda}&limit=10&api_key=m9I9wxY2Om54adZhgNgtEGX2qYqBciFl`; 
        
        const response = await fetch(url);
        
        const {data} = await response.json();   

        const result = data.map( (iter) => {
            return {
                id: iter.id,
                title: iter.title,
                url: iter.images?.downsized_medium.url

                //Asigno cada valor a una variable y la devuelvo
            }
        })

       setImages(result)
    }

    return ( 
        <Fragment>
            <h3>{category}</h3>

            {loading && <p>Cargando...!!!</p>}

             <div className="card-grid">                       
                    {images.map(img => (
                        
                        <GifGridItems 
                            key={img.id}
                            img= {img}
                        />
                    ))}
                
            </div>
        </Fragment>
     );
}
 
export default GifGrid;

