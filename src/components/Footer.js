import React from 'react'

import logo from '../logo100x100.png'

const Footer = () => {

    // año actual para pie de pagina
    const aYear = new Date().getFullYear()
    
    return ( 
        <footer className="row">
            <div className="col-sm-6 mx-auto p-3 mt-1 mb-1">
                <h3 className="text-center">
                    <center><img src={logo} alt="smartCoding" className="img.fluid" /></center>
                    smartCoding &copy; {aYear}
                </h3>
            </div>
        </footer>
     );
}
 
export default Footer;