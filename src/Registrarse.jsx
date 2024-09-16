import React, { useState } from 'react';
import appLogo from './assets/greencross.png';
import "./index.css"

function Registrarse() {
    // State para manejar los campos de entrada
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [password, setPassword] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica para validar o enviar los datos
        console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Contraseña: ${password}`);
    };

    return (
        <>
            <img src={appLogo} alt="logo" height="120px" />
            <h5>Enviaremos un mensaje a tu celular para crear el usuario</h5>
            <br />
            <br />
            {/* Formulario */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='InicioLabel'>Nombre</label>
                    <br />
                    <input 
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder="Escribe tu nombre" 
                    />
                </div>
                <br />
                <div>
                    <label className='InicioLabel'>Apellido</label>
                    <br />
                    <input 
                        type="text" 
                        value={apellido} 
                        onChange={(e) => setApellido(e.target.value)} 
                        placeholder="Escribe tu apellido" 
                    />
                </div>
                <br />
                <div>
                    <label className='InicioLabel'>Contraseña</label>
                    <br />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Escribe tu contraseña" 
                    />
                </div>
                <br />
                <button type="submit" className='green-button'>Crear</button>
            </form>
        </>
    );
}

export default Registrarse;
