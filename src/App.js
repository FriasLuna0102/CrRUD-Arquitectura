import logo from './logo.svg';
import './App.css';
import {jsx} from "react/jsx-runtime";
import {
    BrowserRouter as Router,
    Route,
    Link, Routes
} from "react-router-dom";

import Formulario from "./components/Formulario";
import NavLateral from "./components/NavLateral"
import React from "react";
import Cobertura from "./components/Cobertura";
import backgroundImage from "./img/Best-Website-New-Wallpaper.jpg";
import ListaCoberturas from "./components/listarCoberturas";
import ListaRamoProducto from "./components/ListarRamoProducto";

export default App


function App() {
    return (
        <Router>
            <div className="App">
                <body id="page-top" style={{backgroundImage: `url(${backgroundImage})`}}>

                <Routes>
                    <Route path="/cobertura" element={<Cobertura/>}/>
                    <Route path="/formulario" element={<Formulario/>}/>
                    <Route path="/verCoberturas" element={<ListaCoberturas/>}/>
                    <Route path="/verRamoProductors" element={<ListaRamoProducto/>}/>

                    <Route path={"/"} element={

                        <html>
                        <head>
                            <meta charSet="utf-8"/>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
                            <title>Blank Page - Brand</title>
                            <link rel="stylesheet"
                                  href="./BootStrap/bootstrap-5.3.2-examples/assets/dist/css/bootstrap.min.css"/>
                            <link rel="stylesheet"
                                  href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;display=swap"/>
                            <link rel="stylesheet"
                                  href="https://fonts.googleapis.com/css?family=Noto+Sans&amp;display=swap"/>

                        </head>

                        <NavLateral/>


                        <script src="/BootStrap/bootstrap-5.3.2-examples/assets/dist/js/bootstrap.bundle.min.js"></script>



                        </html>

                    }/>

                </Routes>
                </body>

            </div>
        </Router>

    );
}

function NavBar() {
    return (
        <nav>
            <Link to="/formulario">Gestionar Polizas</Link>
        </nav>
    );
}


function Formularioo() {
    return (
        <div>
            <form id={"formulario"}>
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname"/><br/><br/>
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/><br/><br/>
                <button onClick={enviarJson}>Enviar</button>
            </form>

        </div>
    );
}


function enviarJson() {



    let nombree = document.getElementById("fname").value;
    let apellido = document.getElementById("lname").value;

    console.log(nombree)
    console.log(apellido)
    const person = {name: nombree, apellido: apellido};


    fetch("http://localhost:8080/saludar", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)

    }).then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}




