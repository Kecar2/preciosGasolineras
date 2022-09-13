import React from 'react';
import Provincia from './Category/Provincia';
import Gasolina from './Category/Gasolina';

const Filters = () => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filtros</div>
      <div style={{ cursor: "pointer" }} className="text-center text-primary text-decoration-underline mb-4">
        Limpiar Filtros
      </div>
      <div className="accordion" id="accordionExample">
        <Provincia />
        <Gasolina />
      </div>
    </div>
  )
}

export default Filters;