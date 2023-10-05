//MVC model view controller
const fs=require('fs');
const data=JSON.parse(fs.readFileSync('db.json','utf-8'));
const allusers=data.users
exports.createProduct=(req,res)=>{
    const doc=req.body
    allusers.push(doc)
    res.json(doc)
}

exports.getallProduct=(req,res)=>{
    res.json(data.users)
}

exports.getproduct=(req,res)=>{
    let id=+req.params.id
    let user=allusers.find(p=>p.id===id)
    res.json(user)
}

exports.UpdateProduct=(req,res)=>{
    const id=+req.params.id
    const FindIndex=allusers.findIndex(p=>p.id===id);
    // const UpdateData=allusers[FindIndex]
    allusers.splice(FindIndex,1,{...req.body,id:id})
    res.status(201).json();
}

exports.replaceUpdate=(req,res)=>{
    const id=+req.params.id
    const FindIndex=allusers.findIndex(p=>p.id===id)
    const user=allusers[FindIndex]
    allusers.splice(FindIndex,1,{...user,...req.body})
    res.status(201).json(user);
}

exports.deleteProduct=(req,res)=>{
    const id=+req.params.id
    const FindIndex=allusers.findIndex(p=>p.id===id)
    allusers.splice(FindIndex,1)
    res.status(201).json()
}
