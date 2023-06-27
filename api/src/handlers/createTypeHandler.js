const { createTypeController } = require("../controllers/createTypeController")

const createTypeHandler=async(req,res)=>{
    try {
        const {name,idUser}=req.body
        const pokemon=await createTypeController(name,idUser)
        return res.status(200).json(pokemon)
    } catch (error) {
        return res.status(404).json({error:error.message})
    }
}

module.exports={createTypeHandler}