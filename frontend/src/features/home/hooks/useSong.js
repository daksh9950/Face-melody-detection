import { useContext } from "react"
import { SongContext } from "../song.context"
import { getsong } from "../servics/song.api"




export const useSong=()=>{
    const context = useContext(SongContext)
     if (!context) {
        throw new Error("useSong must be used inside SongContextProvider")
    }

    const {loading,setloading,song,setsong} = context

    async function handlesetsong({mood}){
           setloading(true)
           const data = await getsong({mood})
           setsong(data.song)
           setloading(false)

    }
    return ({loading,song,handlesetsong})
}