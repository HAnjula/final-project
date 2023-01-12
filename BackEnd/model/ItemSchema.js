const mongoose=require('mongoose');
const ItemSchema=new mongoose.Schema({
    id:{type:String, required:true},
    category:{type:String, required:true},
    amount:{type:Number,required:true},
    img_src:{type:String,required:true}
});

module.exports=mongoose.model('Item',ItemSchema);