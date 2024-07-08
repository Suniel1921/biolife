const categoryModel = require("../models/categoryModel");


//create Category
exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        // Validation
        if (!name) {
            return res.status(400).json({ success: false, message: 'Name is required' });
        }

        // Check if category name exists or not
        const checkName = await categoryModel.findOne({ name });
        if (checkName) {
            return res.status(400).json({ success: false, message: 'Category name already exists' });
        }

        // Save/create new category name in db
        const newCategoryName = await categoryModel.create({ name });
        return res.status(201).json({ success: true, message: 'Category Created Successfully', newCategoryName });
        
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

//get all Category

exports.getAllCategory = async (req ,res)=>{
    try {
        const allCategory = await categoryModel.find();
        if(allCategory.length < 0){
            return res.status(404).json({success: false, message: 'Category Not Found !'});
        }
        return res.status(200).json({success: true, message: 'All category found', allCategory});
        
    } catch (error) {
        return res.status(500).json({success: false, message: 'internal server error'})
        
    }
}

//delete category

exports.deleteCategory = async (req, res)=>{
    try {
        const {id} = req.params;
        const deleteCategory = await categoryModel.findByIdAndDelete(id);
        if(!deleteCategory){
            return res.status(400).json({success: false, message: 'Category Not Found'});
        }
        return res.status(200).json({success: true, message: 'Category Delted Successfully'})
        
    } catch (error) {
        return res.status(500).json({success: false, message : `internal server error ${error}`})
        
    }
}

//update category
exports.updateCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;

        // Validation
        if (!name) {
            return res.status(400).json({ success: false, message: 'Name is required' });
        }

        // Update category
        const updateCategory = await categoryModel.findByIdAndUpdate(id, { name }, { new: true });
        if (!updateCategory) {
            return res.status(404).json({ success: false, message: 'Category Not Found' });
        }

        return res.status(200).json({ success: true, message: 'Category Updated Successfully', updateCategory });
        
    } catch (error) {
        return res.status(500).json({ success: false, message: `Internal server error: ${error.message}` });
    }
}


