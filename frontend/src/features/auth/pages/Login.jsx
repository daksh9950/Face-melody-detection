import React, { useState } from 'react'
import '../styles/login.scss'
import FormGroup from '../component/FormGroup'
import { Link, useNavigate } from 'react-router-dom'
// import '../styles/button.scss'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const {loading ,handlelogin} = useAuth()
   const [email,setemail] = useState("")
   const [password,setpassword] = useState("")

   const navigate = useNavigate()

   async function handlesubmit(e){
    e.preventDefault()
    await handlelogin({email,password})
    navigate('/')

   }

  return (
    <main className='login-page' >
            <div className='form-container' >
                 <h1>Login</h1>
                  <form onSubmit={handlesubmit}  >
                      <FormGroup
                       value={email}
                       onChange={(e)=>setemail(e.target.value)} 
                       label="Email"
                        placeholder="Enter the email" />
                      <FormGroup
                       value={password}
                       onChange={(e)=>setpassword(e.target.value)}
                       label="Password" 
                       placeholder="Enter the password" />
                      <button className='button' type='submit' >Login</button>
                  </form>
                  <p>Dont have an account? <Link to='/register' >register here</Link> </p>
            </div>
    </main>
  )
}

export default Login