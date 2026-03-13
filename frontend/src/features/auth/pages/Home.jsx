import React from 'react'
import FaceExpression from '../../Expression/components/FaceExpression'
import Player from '../../home/components/Player'
import { useSong } from '../../home/hooks/useSong'

const Home = () => {

    const {handlesetsong} = useSong()
  return (
    <div>
        <FaceExpression  onClick={(expression)=>{handlesetsong({mood:expression})}} />
        <Player/>
    </div>
  )
}

export default Home
