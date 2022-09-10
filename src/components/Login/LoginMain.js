import React from 'react'
import ContextLogin, { ProviderLogin } from './ContextLogin/ContextLogin'
import Login from './Login'
const LoginMain = () => {
  return (
    <div style={{'height': '100%', 'width': '100%'}}>
        <ProviderLogin>
          <Login></Login>
        </ProviderLogin>
    </div>
  )
}

export default LoginMain