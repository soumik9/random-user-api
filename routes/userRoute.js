const express = require('express');
const router = express.Router();


const UserController = require('../controllers/UserController');


//get all users



router.get('/random', UserController.index);

router.get('/all', UserController.all);

router.post('/save', UserController.store);




module.exports = router;