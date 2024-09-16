import React, { useState } from 'react';
import appLogo from './assets/greencross.png'; // Asegúrate de que la ruta al logo es correcta
import './index.css'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function InicioSesion() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (value) => {
        setPhone(value);
    };

    const handlePhone = (event) => {
        event.preventDefault();
        alert('Numero de telefono ingresado: ${Phone}');
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Usuario: ${usuario}, Contraseña: ${password}`);
        // Aquí podrías añadir la lógica para verificar las credenciales
    };

    return (
        <div className="login-container" >
            <img src={appLogo} alt="Logo" className="login-logo" height="120px" />
            <h1>Tu Bienestar</h1>
            <h3>Tu Salud Primero</h3>
            <form onSubmit={handleSubmit} className="login-form">
                <br/>
                <label htmlFor="phone" className='InicioLabel'>Usuario</label>
                <br/>
                <PhoneInput  className='InicioLabel'
                    country={'ar'}
                    value={phone}
                    onChange={handlePhoneChange}
                    preferredCountries={['ar', 'us','mx']}
                    placeholder='Ingrese su numero de telefono'
                    inputStyle={{width: "200px", height: "23px", padding:"2px"}}
                    enableSearch={true} // Habilita busquede de paises por su nombre
                    autoFormat={false}
                />
                <br/>
                <label htmlFor="password" className='InicioLabel'>Contraseña</label>
                <br/>
                <input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                    autoComplete="current-password"
                />
                <br/>
                <br/>
                <button type="submit" className="green-button">Acceder</button>
            </form>
            <a href="#" >¿Olvidaste tu contraseña?</a>
        </div>
    );
}

export default InicioSesion;
