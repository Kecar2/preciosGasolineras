import React from 'react';
import styles from "./Cards.module.scss";

const Card = ({ ListaEESSPrecio }) => {
    let display;
    console.log(ListaEESSPrecio);

    if (ListaEESSPrecio) {
        display = ListaEESSPrecio.map((x) => {
    
            let { id, Rótulo, Municipio, Dirección } = x;
            return (
                <div key={id} className="col-4 position-relative">
                    <div className={`${styles.content}`}>
                        <div className="content">
                            <div className="fs-4 fw-bold mb-4">{Municipio}</div>
                            <div className="">
                                <div className="fs-6">Dirección</div>
                                <div className="fs-5">{Dirección}</div>
                            </div>
                        </div>
                    </div>
                    <div className="badge bg-danger"></div>
                    <div className="badge bg-danger">{Rótulo}</div>
                </div>
            );
        });
    }
    else {
        display = "No Characters Found :/";
    }

    return <>{display}</>;
}
export default Card;