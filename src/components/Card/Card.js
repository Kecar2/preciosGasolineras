import React from 'react';
import styles from "./Cards.module.scss";

const Card = ({ ListaEESSPrecio }) => {
    let display;
    console.log(ListaEESSPrecio);

    if (ListaEESSPrecio) {
        display = ListaEESSPrecio.map((x) => {

            let CodigoPostal = x["C.P."];

            let PrecioGasoleoA = x["Precio Gasoleo A"];
            let PrecioGasoleoB = x["Precio Gasoleo B"];
            let PrecioGasoleoPremium = x["Precio Gasoleo Premium"];

            let PrecioGasolina95E5Premium = x["Precio Gasolina 95 E5 Premium"];
            let PrecioGasolina95E10 = x["Precio Gasolina 95 E10"];
            let PrecioGasolina95E5 = x["Precio Gasolina 95 E5"];
            let PrecioGasolina98E5 = x["Precio Gasolina 98 E5"];
            let PrecioGasolina98E10 = x["Precio Gasolina 98 E10"];


            let { id, Rótulo, Municipio, Dirección, Horario } = x;
            return (
                <div key={id} className="col-6 mb-4 position-relative">
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
                                            <div className="fw-bold fs-6">Gasolina95:<span className="badge bg-danger">{PrecioGasolina95E5}</span></div>
                                        )
                                    }
                                    else if (PrecioGasolina95E5 < "2") {
                                        return (
                                            <div className="fw-bold fs-6">Precio Gasolina 95 E5:<span className="badge bg-success">{PrecioGasolina95E5}</span></div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className="fw-bold fs-6">Precio Gasolina 95 E5:<span className="badge bg-secondary">Sin dato</span></div>
                                        )
                                    }
                                })()}

                                {(() => {
                                    if (PrecioGasolina98E5 >= "2,000") {
                                        return (
                                            <div className="fw-bold fs-6">Precio Gasolina 98 E5:<span className="badge bg-danger">{PrecioGasolina98E5}</span></div>
                                        )
                                    }
                                    else if (PrecioGasolina98E5 < "2") {
                                        return (
                                            <div className="fw-bold fs-6">Precio Gasolina 98 E5:<span className="badge bg-success">{PrecioGasolina98E5}</span></div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className="fw-bold fs-6">Precio Gasolina 98 E5:<span className="badge bg-secondary">Sin dato</span></div>
                                        )
                                    }
                                })()}

                                {(() => {
                                    if (PrecioGasoleoA >= "2,000") {
                                        return (
                                            <div className="fw-bold fs-6">Precio Gasoleo A:<span className="badge bg-danger">{PrecioGasoleoA}</span></div>
                                        )
                                    }
                                    else if (PrecioGasoleoA < "2") {
                                        return (
                                            <div className="fw-bold fs-6">Precio Gasoleo A:<span className="badge bg-success">{PrecioGasoleoA}</span></div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className="fw-bold fs-6">Precio Gasoleo A:<span className="badge bg-secondary">Sin dato</span></div>
                                        )
                                    }
                                })()}

                                {(() => {
                                    if (PrecioGasoleoPremium >= "2,000") {
                                        return (
                                            <div className="fw-bold fs-6">Precio Gasoleo Premium:<span className="badge bg-danger">{PrecioGasoleoPremium}</span></div>
                                        )
                                    }
                                    else if (PrecioGasoleoPremium < "2") {
                                        return (
                                            <div className="fw-bold fs-6">Precio Gasoleo Premium:<span className="badge bg-success">{PrecioGasoleoPremium}</span></div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className="fw-bold fs-6">Precio Gasoleo Premium:<span className="badge bg-secondary">Sin dato</span></div>
                                        )
                                    }
                                })()}

                            </div>
                        </div>
                    </div>
                    <div className={`${styles.badge} position-absolute badge bg-success text-white`}>{Municipio}</div>

                    <div className={`${styles.cp} position-absolute badge text-white`}>{CodigoPostal}</div>
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