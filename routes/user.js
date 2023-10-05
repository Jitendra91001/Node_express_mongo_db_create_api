const express=require('express')
const usersRouter=require('../productController/User')
const Router=express.Router();

Router
.get('/',usersRouter.getallProduct)
.get('/:id',usersRouter.getproduct)
.post('/',usersRouter.createProduct)
.put('/:id',usersRouter.UpdateProduct)
.patch('/:id',usersRouter.replaceUpdate)
.delete('/:id',usersRouter.deleteProduct)


exports.Router=Router