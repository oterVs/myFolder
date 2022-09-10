

import React, { useContext } from 'react'
import './Login.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ContextLogin from './ContextLogin/ContextLogin';

const LoginHeader = () => {

  const {handleIdiom, handleColor, color} = useContext(ContextLogin);

  return (    
        <div className='headerLogin'>
            <div>
              <img onClick={()=> handleIdiom('es')} style={{'margin': '10px', 'cursor':'pointer'}} src='https://flagcdn.com/36x27/ec.png'/>
              <img onClick={()=> handleIdiom('en')} style={{'margin': '10px', 'cursor':'pointer'}} src='https://flagcdn.com/36x27/eu.png'/>
            </div>
            <div>
               <LightModeIcon onClick={()=> handleColor('li')} style={{'margin': '10px', 'cursor':'pointer', 'color': `${color.colors}`}}></LightModeIcon>
               <NightlightIcon  onClick={()=> handleColor('da')} style={{'margin': '10px', 'cursor':'pointer', 'color': `${color.colors}`}}></NightlightIcon>
            </div>
        </div>

  )
}

export default LoginHeader