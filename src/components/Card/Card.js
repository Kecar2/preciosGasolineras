import React from 'react';
import styles from "./Cards.module.scss";

const Card = ({ ListaEESSPrecio }) => {
    let display;
    console.log(ListaEESSPrecio);

    if (ListaEESSPrecio) {
        display = ListaEESSPrecio.map((x) => {
            let PrecioGasolina95E5 = x["Precio Gasolina 95 E5"];

            let { id, Rótulo, Municipio, Dirección, Horario } = x;
            return (
                <div key={id} className="col-4 mb-4 position-relative">
                    <div className={styles.card}>
                        <img className={`${styles.img} img-fluid`} src="gas.png" alt="icono de gasolinera" />
                        <div className={`${styles.content}`}>
                            <div className="fs-6 fw-bold mb-4">{Horario}</div>
                            <div className="">
                                <div className="fs-6">{Rótulo}</div>
                                <div className="fs-9">{Dirección}</div>
                                {(() => {
                                    if (PrecioGasolina95E5 >= "2,000") {
                                        return (
                                            <div className="fw-bold fs-6">Gasolina95:<span className="badge bg-danger">{PrecioGasolina95E5}$</span></div>
                                        )
                                    }
                                    else if (PrecioGasolina95E5 < "2") {
                                        return (
                                            <div className="fw-bold fs-6">Gasolina95:<span className="badge bg-success">{PrecioGasolina95E5}$</span></div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className="fw-bold fs-6">Gasolina95:<span className="badge bg-secondary">{PrecioGasolina95E5}$</span></div>
                                        )
                                    }
                                })()}

                            </div>
                        </div>
                    </div>
                    <div className={`${styles.badge} position-absolute badge bg-success text-white`}>{Municipio}</div>
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