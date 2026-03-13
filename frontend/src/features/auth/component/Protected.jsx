import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate,useNavigate } from 'react-router-dom'  // useNavigate isn't needed here

const Protected = ({children}) => {
    const {
        user,loading
    } = useAuth()
    const navigate = useNavigate()

    if (loading) {
        return <h1>Loading</h1>
    }

    // once loading is finished, redirect only if there is no user
    if (!user) {
        return <Navigate to='/login' />
    }
  return (
    children
  )
}

export default Protected