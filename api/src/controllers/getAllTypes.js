const {Type}=require('../db')

const getAllTypes=async()=>{
    const tipo=await Type.findAll()
    return tipo
}

module.exports={getAllTypes}