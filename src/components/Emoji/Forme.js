import React, { useState, useReducer, useContext } from 'react'
import { TYPES } from './Actions/activateActions'
import ContextEmoji from './Context/ContextEmoji'
import './Forme.css'





const Forme = () => {

    const {activate, handleActivate, mensaje, setMensaje, messages} = useContext(ContextEmoji)
   
    const sendMesssage = (e) =>{
        e.preventDefault();
        console.log("sdfsfsfsf")
        messages.push(mensaje);
        setMensaje("");
    }

    return (
        <form className='emoji-form' onSubmit={sendMesssage}>
            <p className='icon' onClick={()=>{handleActivate(!activate)}}> {activate?"😀":"❌"} </p>
            <input type="text" name="message" value={mensaje} onChange={(e)=>{setMensaje(e.target.value)}} className='inputt' ></input>
        </form>
    )
}

export default Forme