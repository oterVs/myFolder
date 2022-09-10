import React, {createContext, useContest, useState} from 'react'


const ContextLogin = createContext();

const spanish = {
    "title": "UseContext",
    "user": "Usuario",
    "password": "Contraseña",
    "passwordr": "Repetir contraseña",
    "send": "Enviar",
    "register": "Registrarse",
    "back": "Regresar"
}

const english = {
    "title": "UseContext",
    "user": "User",
    "password": "Password",
    "passwordr": "Repeat password",
    "send": "Send",
    "register": "Register",
    "back": "back"
}

const light = {
    "background" : "#fff",
    "colors": "#000"
}

const dark = {
    "background": "#1f2937",
    "colors": "#fff"
}

const animacion = {
    "login":  -430,
    "register": -430,
}

const usuario = {
    "usuario": "",
    "password": ""
}

const ProviderLogin = ({children}) => {
    const [idiom, SetIdiom] = useState(spanish)
    const [color, SetColor] = useState(light);
    const [ani, SetAni] = useState(animacion);

    const handleAnimacion = (valor) =>{
        if ( valor === 1) {
            SetAni({
                "login": 0,
                "register": 0
            })
        } else {
            SetAni(animacion)
        }
    }   

    const handleIdiom = (valor) => {
        if(valor === "es"){
            SetIdiom(spanish)
        }else {
            SetIdiom(english)
        }
    }

    const handleColor = (valor) => {
        if(valor === "li"){
            SetColor(light)
        } else {
            SetColor(dark)
        }
    }

    const data = {idiom, handleIdiom, color, handleColor, ani, handleAnimacion}

    return(
        <ContextLogin.Provider value={data}>{children}</ContextLogin.Provider>
    )
}


export {ProviderLogin}
export default ContextLogin;

