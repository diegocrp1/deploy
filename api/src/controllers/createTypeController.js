const {Type}=require('../db')

const createTypeController=async(name,idUser)=>{
    const user=await Type.create({name})
    user.addPokemon(idUser)
    return user
}

module.exports={createTypeController}