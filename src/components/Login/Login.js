import React, { useContext } from 'react'
import './Login.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ContextLogin from './ContextLogin/ContextLogin';
import LoginHeader from './LoginHeader';
import LoginRegister from './LoginRegister';
import RegisterLogin from './RegisterLogin';

const Login = () => {

  const { idiom, color } = useContext(ContextLogin)

  return (
    <div style={{ 'padding': '20px', 'background': `${color.background}`, 'height': '100%', 'overflow': 'hidden', 'width': '100%'}}>
      <LoginHeader></LoginHeader>
      <div style={{'display': 'flex', 'width': '205%'}}>
        <LoginRegister></LoginRegister>
        <RegisterLogin></RegisterLogin>
      </div>

    </div>
  )
}

export default Login