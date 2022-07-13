import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
//import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
//import Pagination from "./components/Navbar/Pagination";
import Filter from "./components/Filter/Filter";
//import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {


  const handlePageClick = (data) => {

    console.log(data.selected);
  }

  let [currentPage, setCurrentPage] = useState(0);
  let postPerPage = 10;

  let [fetchedData, updateFetchedData] = useState([]);
  let { ListaEESSPrecio } = fetchedData;


  let api = `https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  

  return (
    <div className="App">
      <h1 className="text-center ubuntu mb-3"> Precios <span className="text-primary"> Gasolineras </span></h1>

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
      <ReactPaginate
        previousLabel={'atras'}
        nextLabel={'siguiente'}
        breakLabel={'...'}
        pageCount={25}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
      
    </div>
  );
}

export default App;
