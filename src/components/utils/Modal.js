import React from 'react'
import './Modal.css'
const Modal = ({ children }) => {
    return (
        <article className="modal">
            {children}
        </article>
    )
}

export default Modal