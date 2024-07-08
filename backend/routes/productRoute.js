const express = require ('express');
const router = express.Router();
const controller = require ('../controller/productController');

router.post('/createProduct', controller.createProduct);
router.get('/getAllProduct', controller.getAllProducts);
router.get('/getSingleProduct/:id', controller.getSingleProduct);

module.exports = router;
