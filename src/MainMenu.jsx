import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import appLogo from './assets/greencross.png'
import './index.css'

import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainMenu() {
    let navigate = useNavigate(); // Move useNavigate inside the component



    return (
        <>
            <img src={appLogo} alt="logo" height="120px" />
            <h1>Tu Bienestar</h1>
            <h3>Tu Salud Primero</h3>
            <button className='green-button' onClick={() => { navigate('/InicioSesion')}}>Iniciar sesión</button>
            <br />
            <br />
            <br />
            <button className='green-button' onClick={ () => { navigate('/Registrarse')}}>Registrarse</button>
        </>
    )
}

export default MainMenu;
