import React from 'react'
import { useContext } from 'react';
import ContextLogin from './ContextLogin/ContextLogin';
import {motion} from 'framer-motion'
import './Login.css'
const LoginRegister = () => {

    const {idiom, color, handleAnimacion, ani} = useContext(ContextLogin);

    return (
        <motion.form animate={{x: ani.login}} transition={{type: "tween", duration: 1}} className='formularioLogin' style={{ 'color': `${color.colors}` }}>
            <h2 style={{ 'textAlign': 'center', 'marginBottom': '15px' }}>{idiom.title}</h2>
            <label for="usuario">{idiom.user} </label>
            <input className='inputs' id="usuario" name="usuario" type="text" />
            <label for="password">{idiom.password}</label>
            <input className='inputs' id="password" name="password" type="text" />
            <div className='footer'>
                <button className='loginbotton'>{idiom.send}</button>
                <a style={{ 'color': `${color.colors}`, 'textDecoration': 'underline', 'cursor': 'pointer' }} onClick={() => handleAnimacion(0)}>{idiom.register}</a>
            </div>

        </motion.form>
    )
}

export default LoginRegister