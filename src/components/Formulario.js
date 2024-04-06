import React, { useState, useEffect } from 'react';


function RamoProductoFormulario() {
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [porcentajeComision, setPorcentajeComision] = useState('');


    const [coberturaSeleccionada, setCoberturaSeleccionada] = useState('');
    const [coberturas, setCoberturas] = useState([]);

    useEffect(() => {
        const cobertura = JSON.parse(localStorage.getItem('coberturas'));
        if (cobertura) {
            setCoberturas(cobertura); // Aquí cambiamos [cobertura] por cobertura
        }
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tipo:', tipo);
        console.log('Descripción:', descripcion);
        console.log('Cobertura:', coberturaSeleccionada);
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
                    <select
                        className="form-select"
                        id="cobertura"
                        value={coberturaSeleccionada}
                        onChange={(e) => setCoberturaSeleccionada(e.target.value)}
                        required
                    >
                        <option value="">Seleccione una cobertura</option>
                        {coberturas.map((cobertura, index) => (
                            <option key={index} value={cobertura.descripcion}>
                                {cobertura.descripcion}
                            </option>
                        ))}
                    </select>
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
