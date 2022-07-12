import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
//import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
//import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
//import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {

  let [fetchedData, updateFetchedData] = useState([]);
  let { ListaEESSPrecio } = fetchedData;

  //console.log(troop);
  let api = "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/";

  useEffect(()=> {
    (async function (){
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log(data);
    })();
  },[api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu mb-3"> Precio <span className="text-primary"> Gasolineras </span></h1>

      <div className="container">
        <div className="row">
          <Filter />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card ListaEESSPrecio={ListaEESSPrecio}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
