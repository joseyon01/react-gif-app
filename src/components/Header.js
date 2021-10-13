import React, { Fragment } from 'react';


const Header = () => {
    return ( 
        <Fragment >
            <nav className="navbar navbar-light bg-light mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">
                    Gif App
                    </a>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default Header;