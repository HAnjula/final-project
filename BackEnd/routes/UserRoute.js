const express=require('express');
const userController=require('../controller/UserController');

const router =express.Router();
router.post('/sign-up',userController.registerUser);
router.post('/log-in',userController.loginUser);
module.exports=router;