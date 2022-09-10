
import { createContext,  useState } from 'react'
import React from 'react'

const ContextEmoji = createContext();

const EmojiProvider = ({children})=> {
    const [activate, setActivate] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [messages, setMessages] = useState([]);

    const handleActivate = (activa) =>{
      console.log(activa)
      setActivate(activa)
    }

    const data = {activate, handleActivate, mensaje, setMensaje, messages, setMessages}

    return(
     <ContextEmoji.Provider value={data}>{children}</ContextEmoji.Provider> 
    )
}
export {EmojiProvider}
export default ContextEmoji