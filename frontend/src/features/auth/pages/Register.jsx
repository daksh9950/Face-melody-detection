import React, { useState } from 'react'
import './styles/register.scss'
import FormGroup from '../component/FormGroup'
import { Link,  useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
  const {loading,handleregister} = useAuth()

  const [email,setemail] = useState("")
     const [password,setpassword] = useState("")
     const [username,setusername] = useState("")

     const navigate = useNavigate()


     async function handlesubmit(e){
        e.preventDefault()
        await handleregister({email,username,password})
        navigate('/')
        
       
     }

  // 
  return (
    <main className='register-page' >
        <div className='form-container' >
        <h1>Register</h1>
        <form onSubmit={handlesubmit} >
            
            <FormGroup 
             value={username}
             onChange={(e)=>setusername(e.target.value)}
            label="Username" 
            placeholder="Enter the username" />
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
            <button className='button' type='submit' >Register</button>
        </form>
        <p>Already have an account? <Link to='/login' >Login Here</Link> </p>
    </div>
    </main>

  )
}

export default Register