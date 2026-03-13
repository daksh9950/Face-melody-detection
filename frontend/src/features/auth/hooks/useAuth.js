import { useContext, useEffect } from 'react'
import {login,register,getMe,logout} from '../component/servics/auth.api'
import { AuthContext } from '../auth.context'
import Login from '../pages/Login'



export const useAuth = ()=>{
    const context = useContext(AuthContext)
    const {user,setUser,loading,setLoading} = context

    async function handleregister({username,email,password}){
           setLoading(true)
           const data = await register({email,password,username})
           setUser(data.user)
           setLoading(false)

    }

     async function handlelogin({username,email,password}){
           setLoading(true)
           const data = await login({email,password,username})
           setUser(data.user)
           setLoading(false)

    }

    async function handlegetMe(){
        setLoading(true)
        const data = await getMe()
        setUser(data.user)
        setLoading(false)
    }

     async function handlelogout(){
        setLoading(true)
        const data = await logout()
        setUser(data.user)
        setLoading(false)
    }

    useEffect(()=>{
        handlegetMe()
    },[])

    return {
        user,loading,handleregister,handlelogin,handlegetMe,handlelogout
    }

}