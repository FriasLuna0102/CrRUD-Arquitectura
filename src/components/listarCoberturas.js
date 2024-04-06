import React, {useEffect, useState} from 'react';

const coberturas = localStorage.getItem("coberturas");
function ListaCoberturas() {

    const [coberturaSeleccionada, setCoberturaSeleccionada] = useState('');
    const [coberturas, setCoberturas] = useState([]);

    useEffect(() => {
        const cobertura = JSON.parse(localStorage.getItem('coberturas'));
        if (cobertura) {
            setCoberturas(cobertura); // Aquí cambiamos [cobertura] por cobertura
        }
    }, []);


    return (
        <div>
            <h3>Lista de Coberturas</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>Descripción</th>
                    <th>Riesgo</th>
                    <th>Porcentaje Cobertura</th>
                    <th>Monto Cobertura</th>
                    <th>Deducible</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {coberturas.map((cobertura, index) => (
                    <tr key={index}>
                        <td>{cobertura.descripcion}</td>
                        <td>{cobertura.riesgo}</td>
                        <td>{cobertura.porcentajeCobertura}</td>
                        <td>{cobertura.montoCobertura}</td>
                        <td>{cobertura.deducible}</td>
                        <td>
                            <button
                                className="btn btn-danger"
                                // onClick={() => handleEliminar(index)}
                            >
                                Eliminar
                            </button>
                            <button
                                className="btn btn-primary"
                                // onClick={() => handleModificar(index)}
                            >
                                Modificar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <a type="button" className="btn btn-warning" href="/cobertura">Atras</a>
        </div>
    );

}

export default ListaCoberturas;