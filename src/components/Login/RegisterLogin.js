import React from 'react'
import { useContext, useState } from 'react';
import ContextLogin from './ContextLogin/ContextLogin';
import { motion } from 'framer-motion'
import './Login.css'
const RegisterLogin = () => {

    const [registro, SetRegistro] = useState({"usuario":"","password":"","passwordr":""});

    const handleRegistro = (value) => {
        SetRegistro({... registro, [value.target.name]: value.target.value})
    }

    const sendForm = (e) => {
        e.preventDefault()
        alert(registro.usuario)
    }

    const { idiom, color, handleAnimacion, ani } = useContext(ContextLogin);

    return (
        <motion.form animate={{ x: ani.register }} transition={{ type: "tween", duration: 1 }} className='formularioLogin' style={{ 'color': `${color.colors}` }}>
            <h2 style={{ 'textAlign': 'center', 'marginBottom': '15px' }}>{idiom.title}</h2>
            <label for="usuario">{idiom.user} </label>
            <input className='inputs' id="usuario" name="usuario" type="text" value={registro.usuario} onChange={(e) => handleRegistro(e)} />
            <label for="password">{idiom.password}</label>
            <input className='inputs' id="password" name="password" type="text" value={registro.password} onChange={(e) => handleRegistro(e)}/>
            <label for="password">{idiom.passwordr}</label>
            <input className='inputs' id="password" name="passwordr" type="text" value={registro.passwordr} onChange={(e) => handleRegistro(e)}/>
            <div className='footer'>
                <button className='loginbotton' onClick={sendForm}>{idiom.send}</button>
                <a  style={{ 'color': `${color.colors}`,'textDecoration': 'underline', 'cursor': 'pointer'  }} onClick={() => handleAnimacion(1)}>{idiom.back}</a>
            </div>

        </motion.form>
    )
}

export default RegisterLogin