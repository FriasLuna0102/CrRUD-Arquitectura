import React, { useState } from 'react';
// import { listCoberturas } from './Cobertura'; // Importa listCoberturas utilizando llaves {}
//
 console.log("La lista de coberturas", window.listCoberturas);

function RamoProductoFormulario() {
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [cobertura, setCobertura] = useState('');
    const [porcentajeComision, setPorcentajeComision] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envío del formulario
        console.log('Tipo:', tipo);
        console.log('Descripción:', descripcion);
        console.log('Cobertura:', cobertura);
        console.log('Porcentaje de Comisión:', porcentajeComision);

        const ramoProducto = {
            tipo: 'Propiedad',
            descripcion: 'qq',
            cobertura: {
                descripcion: 'Primera Cobertura',
                riesgo: 'riesgo',
                porcentajeCobertura: 0.5,
                montoCobertura: 1000,
                deducible: 200
            },
            porcentajeComision: '22'
        };


        fetch("http://localhost:8080/crearRamoProducto", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ramoProducto)
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    };



    return (
        <div className="container">
            <h2>Formulario de Ramo Producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="tipo" className="form-label">Tipo:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tipo"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción:</label>
                    <textarea
                        className="form-control"
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="cobertura" className="form-label">Cobertura:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cobertura"
                        value={cobertura}
                        onChange={(e) => setCobertura(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="porcentajeComision" className="form-label">Porcentaje de Comisión:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="porcentajeComision"
                        value={porcentajeComision}
                        onChange={(e) => setPorcentajeComision(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default RamoProductoFormulario;
