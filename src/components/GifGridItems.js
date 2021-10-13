import React, { Fragment } from 'react';


const GifGridItems = ({img}) => {

    const {title, url} = img;

    return (  
        <Fragment>
            <div className="card animate__animated animate__fadeIn">
                <img src={url} alt="img" />
                <p>{title}</p>
            </div>
        <br />
       </Fragment>
    );
}
 
export default GifGridItems;