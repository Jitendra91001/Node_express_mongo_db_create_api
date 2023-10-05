//MVC model view controller
const fs=require('fs');
const products=JSON.parse(fs.readFileSync('db.json','utf-8'));
const AllProducts=products.products
exports.createProduct=(req,res)=>{
    const doc=req.body
    AllProducts.push(doc)
    res.json(doc)
}

exports.getallProduct=(req,res)=>{
    res.json(products)
}

exports.getproduct=(req,res)=>{
    let id=+req.params.id
    let product=AllProducts.find(p=>p.id===id)
    res.json(product)
}

exports.UpdateProduct=(req,res)=>{
    const id=+req.params.id
    const FindIndex=AllProducts.findIndex(p=>p.id===id);
    // const UpdateData=AllProducts[FindIndex]
    AllProducts.splice(FindIndex,1,{...req.body,id:id})
    res.status(201).json();
}

exports.replaceUpdate=(req,res)=>{
    const id=+req.params.id
    const FindIndex=AllProducts.findIndex(p=>p.id===id)
    const product=AllProducts[FindIndex]
    AllProducts.splice(FindIndex,1,{...product,...req.body})
    res.status(201).json(product);
}

exports.deleteProduct=(req,res)=>{
    const id=+req.params.id
    const FindIndex=AllProducts.findIndex(p=>p.id===id)
    AllProducts.splice(FindIndex,1)
    res.status(201).json()
}
