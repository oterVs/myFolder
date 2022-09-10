import React, { useState, useRef } from 'react'
import './Onelist.css'
const Onelist = ({ title, text }) => {

    const [rota, setRota] = useState(false);
    const [dimesnio, setDimension] = useState("0px");
    const handlePrhase = () => {
        setRota(!rota);
        console.log(parrafo.current.scrollHeight)
        setDimension(rota ? '0px' : `${parrafo.current.scrollHeight}px`);
    }

    const parrafo = useRef(null);

    return (
        <div className='containerOnelist'>
            <div className='headerlist' onClick={handlePrhase}>
                <h3>{title}</h3>
                <p className='icon' style={{ 'transform': rota ? `rotate(0deg)` : `rotate(90deg)` }}> Y </p>
            </div>
            <div className='text' ref={parrafo} style={{'maxHeight': `${dimesnio}`}} >
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Onelist