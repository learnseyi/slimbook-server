const express = require('express')
const userRoute = require('../controllers/userController');

const router = express.Router();

router.route('/:id')
.get(userRoute.getUser)
.patch(userRoute.updateUser)
.delete(userRoute.deleteUser);
router.route('/')
.get(userRoute.getAllUsers)
.post(userRoute.createUser);

module.exports = router

