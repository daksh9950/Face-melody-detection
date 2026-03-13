const express = require("express")
const upload = require('../middleware/upload.middleware')
const songcontroller = require('../controller/song.controller')



const router = express.Router()

router.post('/',upload.single('song'),songcontroller.uploadSong)
router.get('/',songcontroller.getsong)

module.exports = router



