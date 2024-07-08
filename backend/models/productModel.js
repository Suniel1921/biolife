const mongoose = require ('mongoose');
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required'],
    },
    realPrice : {
        type : String,
        required : [true, 'realPrice is required'],
    },
    salePrice : {
        type : String,
        required : [true, 'salePrice is required'],
    },
    brand : {
        type : String,
        required : [true, 'salePrice is required'],
    },
   
   category: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'Category'
   },
    // rating : {
    //     type : String,
    //     required : [true, 'rating is required'],
    // },

    images: [{
        type: String  
    }]

},{timestamps: true})


const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;



