// const { getAllController} = require("../controllers/getAllController")

const { getAllController } = require("../controllers/getAllController")
const { getPokemonDetail } = require("../controllers/getPokemonDetail")


const getPokemonHandler =async(req,res)=>{
try {
    const pokemon=await getAllController()
    res.status(200).json(pokemon)
} catch (error) {
    res.status(400).json(error.message)
}
}
const getPokemonHandlerDetail=async(req,res)=>{
    const {idUser}=req.params

    const search=isNaN(idUser)?"db":"api"
    try {
        const pokemon=await getPokemonDetail(idUser,search)
        if(pokemon.message){
            return res.status(400).json({message:pokemon.message})
        }
        return res.status(200).json(pokemon)

    } catch (error) {
       return res.status(400).json(error.message)
    }
}

module.exports={getPokemonHandler,getPokemonHandlerDetail}