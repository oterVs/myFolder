
import {motion} from 'framer-motion'

export default function Info() {
    return (
        <div style={{'display': 'flex', 'justifyContent': 'space-between',  }}>
            <motion.div animate={{x: 0}} initial={{x: -700}} transition={{type: "tween", duration: 2}} style={{'fontWeight': '500'}}>
                <p style={{'marginBottom':'10px'}}><b>Edad:</b></p>
                <p style={{'marginBottom':'10px'}}><b>Telefono: </b></p>
                <p style={{'marginBottom':'10px'}}><b>Nivel Educativo: </b></p>
                <p style={{'marginBottom':'10px'}}><b>Correo: </b></p>
                <p style={{'marginBottom':'10px'}}><b>Universidad: </b></p>
            </motion.div>
            <motion.div animate={{x: 0}} initial={{x: -900}} transition={{type: "tween", duration: 2}} style={{'textAlign': 'right'}}>
                <p style={{'marginBottom':'10px'}}>23 Años</p>
                <p style={{'marginBottom':'10px'}}>+593 96 366 2387</p>
                <p style={{'marginBottom':'10px'}}>Cursando 9vo Semestre en Ing. Sistemas</p>
                <p style={{'marginBottom':'10px'}}>vicentesaavedra45@gmail.com</p>
                <p style={{'marginBottom':'10px'}}>Universidad Central del Ecuador</p>
            </motion.div>

        </div>
    )
}