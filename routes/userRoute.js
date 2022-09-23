const express = require('express');
const router = express.Router();


const UserController = require('../controllers/UserController');


//get all users
router.get('/user/random', UserController.index);
router.get('/user/all', UserController.all);




module.exports = router;