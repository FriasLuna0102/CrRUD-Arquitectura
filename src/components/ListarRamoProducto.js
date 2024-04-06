import React, {useEffect, useState} from 'react';

const ramoProductos = localStorage.getItem("ramoProducto");
function ListaRamoProducto() {

    const [ramoProductos, setRamoProductos] = useState([]);

    useEffect(() => {
        const ramoProducto = JSON.parse(localStorage.getItem('ramoProducto'));
        if (ramoProducto) {
            setRamoProductos(ramoProducto);
        }
    }, []);


    return (
        <div>
            <h3>Lista de Productos de Ramo</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Descripción</th>
                    <th>Cobertura</th>
                    <th>Porcentaje de Comisión</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {ramoProductos.map((ramoProducto, index) => (
                    <tr key={index}>
                        <td>{ramoProducto.tipo}</td>
                        <td>{ramoProducto.descripcion}</td>
                        <td>{ramoProducto.cobertura.descripcion}</td>
                        <td>{ramoProducto.porcentajeComision}</td>
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
            <a type="button" className="btn btn-warning" href="/formulario">Atras</a>
        </div>
    );


}

export default ListaRamoProducto;