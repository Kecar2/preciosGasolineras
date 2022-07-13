import React from 'react'

const Pagination = ({ setPageNumber }) => {
    let siguiente = () => {
        setPageNumber((x) => x + 1);
    };

    let volver = () => {
        setPageNumber((x) => x - 1);
    };
    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
            <button onClick={volver} className="btn btn-primary">
                Volver
            </button>
            <button onClick={siguiente} className="btn btn-primary">
                Siguiente
            </button>
        </div>
    )
}

export default Pagination;