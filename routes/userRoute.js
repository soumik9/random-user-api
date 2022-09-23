const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

// routes
router.get('/random', UserController.index);

router.get('/all', UserController.all);

router.post('/save', UserController.store);

router.patch('/update/:id', UserController.update);
router.patch('/bulk-update/:id', UserController.bulkUpdate);

router.delete('/delete/:id', UserController.destroy);




module.exports = router;