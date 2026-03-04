const {Router } = require('express')
const authController = require('../controller/auth.controller')
const router = Router()

router.post('/register',authController.registerUser)



module.exports = router