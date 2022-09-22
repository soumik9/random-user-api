const express = require('express');
const router = express.Router();


const UserController = require('../controllers/UserController');


//get all users
router.get('/user/random', UserController.index);




module.exports = router;