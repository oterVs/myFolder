import React, {useContext} from 'react'
import ContextEmoji from './Context/ContextEmoji'
import './Texto.css'
const Texto = () => {
    const {messages} = useContext(ContextEmoji)
  return (
    <div className='texto-container'>
        {messages.map((el) => <p className='texto-item'>{el}</p>)}
    </div>
  )
}

export default Texto