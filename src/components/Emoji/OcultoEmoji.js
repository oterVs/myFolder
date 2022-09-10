import React, {useReducer, useContext} from 'react'
import db from './db.js'
import './OcultoEmoji.css'
import {motion} from 'framer-motion'
import ContextEmoji from './Context/ContextEmoji.js'


const OcultoEmoji = () => {

  const {activate, handleActivate, mensaje, setMensaje} = useContext(ContextEmoji);

  return (
    <motion.div animate={{y : activate? 450:0}} transition={{type: "tween", duration: 1}} className='container-Ocultoemoji'>
        {db.map((item)=> <div className='individualIcon' onClick={() => setMensaje(mensaje.concat(item.icon))}><p>{item.icon}</p></div>)}
    </motion.div>
  )
}

export default OcultoEmoji