import React from 'react'
import { Children } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

export const SongContext = createContext()

export const SongContextProvider = ({children})=>{
    const [song ,setsong] = useState({
               "url": "https://ik.imagekit.io/apypprw7u/cohort-2/moodify/songs/Pushpa_Pushpa__From__Pushpa_2_The_Rule____-_Hindi__DownloadMing.WS__xbGHUJPbxc.mp3",
        "postUrl": "https://ik.imagekit.io/apypprw7u/cohort-2/moodify/posters/Pushpa_Pushpa__From__Pushpa_2_The_Rule____-_Hindi__DownloadMing.WS_._jepg_M9pzL93oI",
        "title": "Pushpa Pushpa (From \"Pushpa 2 The Rule\")  - Hindi [DownloadMing.WS]",
        "mood": "surprized",
    })

    const [loading,setloading] = useState(false)

    return(
        <SongContext.Provider
           value={{loading,setloading,song,setsong}}  >
            {children}

        </SongContext.Provider>
    )
}

