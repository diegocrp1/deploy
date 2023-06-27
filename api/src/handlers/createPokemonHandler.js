const { createAllController } = require("../controllers/createAllController")

const createPokemonHandler=async(req,res)=>{
    try {
        const {name,image,life,attack,defense,types}=req.body
        
        const pokemon=await createAllController(name,image,life,attack,defense,types)
        return res.status(200).json(pokemon)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports={createPokemonHandler}