const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

// routes
router.get('/random', UserController.index);

router.get('/all', UserController.all);

router.post('/save', UserController.store);

router.patch('/update', UserController.update);
router.patch('/bulk-update', UserController.bulkUpdate);

router.delete('/delete', UserController.destroy);




module.exports = router;