
const songModel = require('../models/song.model')
const storageService = require('../servics/storage.servics')
const id3= require('node-id3')

async function uploadSong(req,res){
    const songfiles = req.file.buffer
    const tags = id3.read(songfiles)
    const {mood} = req.body

    const [songFile,posterFile] = await Promise.all([
         storageService.uploadFile({
        buffer:songfiles,
        filename:tags.title + '.mp3',
        folder:"/cohort-2/moodify/songs"
    }),

     storageService.uploadFile({
        buffer:tags.image.imageBuffer,
        filename:tags.title +'.jepg',
        folder:"/cohort-2/moodify/posters"
    })

    ])
    
    

    const songs = await songModel.create({
            title:tags.title,
            url:songFile.url,
            postUrl:posterFile.url,
            mood

    })

    res.status(201).json({
        message:"songs created successfully",
        songs
    })

    
}

async function getsong(req,res){
    const {mood}  = req.query || {}
    console.log(req.body)
    const song = await songModel.findOne({
        mood,
    })

    res.status(201).json({
        message:"song mood generated sucessfully",
        song

    })
}

module.exports = {uploadSong,getsong}