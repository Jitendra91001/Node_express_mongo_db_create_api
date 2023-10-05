const express=require('express')
const productController=require('../productController/product')
const Router=express.Router();

Router
.get('/',productController.getallProduct)
.get('/:id',productController.getproduct)
.post('/',productController.createProduct)
.put('/:id',productController.UpdateProduct)
.patch('/:id',productController.replaceUpdate)
.delete('/:id',productController.deleteProduct)


exports.Router=Router