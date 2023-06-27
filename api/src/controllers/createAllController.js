const {Pokemon,Type}=require('../db')

const createAllController=async(name,image,life,attack,defense,types)=>{
    if(!name||!image||!life||!attack||!defense){
        throw new Error('Parametro incorrecto')
    }
    if(!types.length){
        throw new Error('Parametro incorrecto')
    }
    const pokemon= await Pokemon.create({name,image,life,attack,defense,types})
    for (const typeId of types) {
        const tipo=await Type.findByPk(typeId)
        if(tipo){
            pokemon.addType(tipo)
        }
    }
    
    return pokemon
}

module.exports={createAllController}