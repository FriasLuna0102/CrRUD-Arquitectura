import React, { useState } from 'react';
import backgroundImage from './../img/Best-Website-New-Wallpaper.jpg';
// Exporta la lista de coberturas como una constante nombrada
import { useNavigate } from 'react-router-dom';
export default function CoberturaFormulario() {
    const history = useNavigate();

    const [descripcion, setDescripcion] = useState('');
    const [riesgo, setRiesgo] = useState('');
    const [porcentajeCobertura, setPorcentajeCobertura] = useState('');
    const [montoCobertura, setMontoCobertura] = useState('');
    const [deducible, setDeducible] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario, como enviar los datos a un servidor o realizar alguna acción con ellos
        console.log('Descripción:', descripcion);
        console.log('Riesgo:', riesgo);
        console.log('Porcentaje de Cobertura:', porcentajeCobertura);
        console.log('Monto de Cobertura:', montoCobertura);
        console.log('Deducible:', deducible);
        history('/verCoberturas');

        // Primero, obtenemos el array de coberturas existente del almacenamiento local
        let coberturas = JSON.parse(localStorage.getItem('coberturas'));

        // Si no hay un array de coberturas existente, inicializamos uno vacío
        if (!coberturas) {
            coberturas = [];
        }

        const cobertura = {
            descripcion:descripcion,
            riesgo: riesgo,
            porcentajeCobertura: porcentajeCobertura,
            montoCobertura:montoCobertura,
            deducible:deducible
        };

        // Agregamos el nuevo objeto de cobertura al array
        coberturas.push(cobertura);

        // Guardamos el array actualizado en el almacenamiento local
        localStorage.setItem('coberturas', JSON.stringify(coberturas));

        fetch("http://localhost:8080/crearCobertura", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cobertura)
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
            <h2>Formulario de Cobertura</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="riesgo" className="form-label">Riesgo:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="riesgo"
                        value={riesgo}
                        onChange={(e) => setRiesgo(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="porcentajeCobertura" className="form-label">Porcentaje de Cobertura:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="porcentajeCobertura"
                        value={porcentajeCobertura}
                        onChange={(e) => setPorcentajeCobertura(e.target.value)}
                        step="0.01"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="montoCobertura" className="form-label">Monto de Cobertura:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="montoCobertura"
                        value={montoCobertura}
                        onChange={(e) => setMontoCobertura(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="deducible" className="form-label">Deducible:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="deducible"
                        value={deducible}
                        onChange={(e) => setDeducible(e.target.value)}
                        step="0.01"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <p></p>
            <a type="button" className="btn btn-success" id="cober" href="/verCoberturas">Ver Coberturas</a>
            <p></p>
            <div>
                <a type="button" className="btn btn-warning" href="/">Atras</a>
            </div>
        </div>
    );
}

