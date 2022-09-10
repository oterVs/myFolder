import React, { useState, useContext } from 'react'
import Forme from './Forme'
import Texto from './Texto'
import './Emoji.css'
import OcultoEmoji from './OcultoEmoji'
import  ContextEmoji, { EmojiProvider } from './Context/ContextEmoji'


const Emoji = () => {
  
  return (
    <div className='emoji-container'>
      <EmojiProvider>
        <Texto></Texto>
        <OcultoEmoji></OcultoEmoji>
        <Forme></Forme>
      </EmojiProvider>
    </div>
  )
}

export default Emoji