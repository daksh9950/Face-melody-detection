import React, { useState } from 'react'

import FaceExpression from './features/Expression/components/FaceExpression';
import { RouterProvider } from 'react-router-dom';
import { router } from './auth.routes';
import "./features/styles/global.scss"
import { AuthProvider } from './features/auth/auth.context';
import { SongContextProvider } from "./features/home/song.context";

const App = () => {
  

  return (
    <AuthProvider>
      <SongContextProvider>

      <RouterProvider router={router} />
      </SongContextProvider>

      
    </AuthProvider>
    
  )
}

export default App