import React, { useState, useEffect } from 'react';
import axios from 'axios'

// importar componentes
import Header from './components/Header'
import Frase from './components/Frase'
import Footer from './components/Footer'

function App() {

  // state para mostrar frase cuando se da click al boton
  const [mostrar, setMostrar] = useState(false)

  // state para guardar la frase que viene de la API
  const [frase, setFrase] = useState({})

  // funcion para consultar la API
  const consultarAPI = async () => {
    const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    const resultado = await axios.get(url)
    setFrase(resultado.data[0])
  }

  // Traer una frase cuando inicia la APP
  useEffect(() => {
    consultarAPI()
    setMostrar(true)
  }, [])

  // funcion para traser otra frase de breaking bad
  const handleClick = () => {
    consultarAPI()
  }

  return (
    <div className="container">
        <Header />
        <div className="row">
          <div className="col-sm-6 mx-auto p-1 mt-1 mb-1">

              {mostrar ? <Frase frase={frase} /> : null}

              <button
                type="button"
                className="btn btn-lg btn-block btn-Green"
                onClick={handleClick}
              ><i className="fas fa-search"></i> Nueva Frase</button>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
