import React from 'react';

const Frase = ({frase}) => {
    return ( 
        <div className="card mt-1 mb-2">
            <div className="card-body">
                <h1 className="text-center"> <i className="fas fa-quote-right"></i> {frase.quote}</h1>
                <p className="text-right">{frase.author}</p>
            </div>
        </div>
     );
}
 
export default Frase;