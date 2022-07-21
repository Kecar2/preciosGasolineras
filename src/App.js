import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
//import ReactPaginate from "react-paginate";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
//import Pagination from "./components/Navbar/Pagination";
import Filter from "./components/Filter/Filter";
//import Navbar from "./components/Navbar/Navbar";
import GifLoader from 'react-gif-loader';
import './App.css';

function App() {

  let [search, setSearch] = useState("Abengibre");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  let [fetchedData, updateFetchedData] = useState([]);
  let { ListaEESSPrecio } = fetchedData;

  useEffect(() => {
    fetch(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/?municipio=${search}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          updateFetchedData(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loader"><GifLoader
      loading={true}
      imageSrc="https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif"
    /></div>;
  } else {
    return (
      <div className="App">
        <h1 className="text-center ubuntu mb-3"> Precios <span className="text-primary"> Gasolineras </span></h1>

        <Search setSearch={setSearch} data={ListaEESSPrecio}/>

        <div className="container">
          <div className="row">
            <Filter />

            <div className="col-lg-8 col-12">
              <div className="row">
                <Card ListaEESSPrecio={ListaEESSPrecio} />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
