const express = require('express')
const router = express.Router()

const AuthController = require('../controller/auth.js')

router.get('users', AuthController.getUsers)
router.post('/users', AuthController.register)
router.post('/login', AuthController.login)
router.get('/token', AuthController.getRefreshToken)
router.delete('/logout', AuthController.logout)

module.exports = router