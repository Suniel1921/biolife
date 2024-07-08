const productModel = require("../models/productModel");


//create products
exports.createProduct = async(req , res)=>{
    try {
        const {name, realPrice, salePrice, brand, category} = req.body;
        if(!name || !realPrice || !salePrice || !brand || !category){
            return res.status(400).json({success: false, message: 'All fields are required'});
        }
        const createProduct	= await productModel.create({name, realPrice, salePrice, brand, category});
        return res.status(201).json({success: false, message: 'Product Created', createProduct});
        
    } catch (error) {
        res.status(500).json({ success: false, message: `internal server error ${error}` });
        
    }
}

//get all products

exports.getAllProducts = async (req, res) => {
    try {
        const getAllProducts = await productModel.find({}).populate('category');
        if (getAllProducts.length === 0) {
            return res.status(404).json({ success: false, message: 'No products found' });
        }
        return res.status(200).json({ success: true, message: 'All products found', getAllProducts });
        
    } catch (error) {
        return res.status(500).json({ success: false, message: `Internal server error: ${error.message}` });
    }
}

//get single product
exports.getSingleProduct = async (req ,res)=>{
    try {
        const {id} = req.params;
        const singleProduct = await productModel.findById(id);
        if(!singleProduct){
            return res.status(400).json({success: false, message: 'single product not found'});
        }
        return res.status(200).json({success: true, message: 'single data found', singleProduct});
        
    } catch (error) {
        return res.status(500).json({success: false, messag: `internal server error ${error}`})
        
    }
}

//update product

// exports.updateProduct = async (req, res)=>{
//     try {
//         const {name, realPrice, salePrice, brand} = req.body;
//         const {id} = req.params;

//     } catch (error) {
//         return res.status(500).send({success: false, message: 'internal server error'});
        
//     }
// }