const express=require('express');
const itemController=require('../controller/ItemController');

const router=express.Router();

router.post('/save',itemController.saveItem);
router.put('/update',itemController.updateItem);
router.get('/get',itemController.getItem);
router.delete('/delete',itemController.deleteItem);
router.get('/list', itemController.listItem );
module.exports=router;