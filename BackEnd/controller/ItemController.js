const ItemSchema=require('../model/ItemSchema');

const saveItem=( req , resp )=>{
    const itemSchema=new ItemSchema({
        id: req.body.id,
        category:req.body.category,
        amount:req.body.amount,
        img_src:req.body.img_src
    });
    itemSchema.save().then(result=>{
        resp.status(201).json({message:'Successfully saved'});
    }).catch(error=>{
        resp.status(500).json({message:'Something went wrong'});
        console.log(error)
    })
};
const updateItem = (req,resp)=>{
    ItemSchema.findOneAndUpdate({id: req.body.id } , {$set:{
            name: req.body.name,
            amount: req.body.amount,
            img_src: req.body.img_src
        }}).then(result=>{
        resp.json({data: {status: 201, value: result, message: 'Product Updated'}});

    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const getItem = (req,resp)=>{
    console.log(req.headers.id)
    ItemSchema.findOne({id: req.headers.id } ).then(result=>{
        resp.json({data: {status: 201, value: result, message: 'Product found'}});
        console.log(result)

    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const deleteItem = (req,resp)=>{
    ItemSchema.findOneAndDelete({id: req.headers.id}).then(result=>{
        resp.json({data:{status:201,value:result,message:'Product Deleted'}});
        console.log(result)
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const listItem = (req,resp)=>{
    ItemSchema.find().then(result=>{
        resp.json({data:{status:201,value:result}});
        console.log(result)
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};


module.exports={
    saveItem,
    updateItem,
    getItem,
    deleteItem,
    listItem
}