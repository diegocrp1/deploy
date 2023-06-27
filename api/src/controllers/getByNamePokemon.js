const {Pokemon,Type} =require('../db')
const { getApiData } = require('./saveApiData')
const {Op}=require("sequelize")

const getByNamePokemon=async(name)=>{
    const pokemonApi=await getApiData()
    const pokemonApiName=pokemonApi.find(poke=>poke.name===name.toLowerCase())

    let pokemon=await Pokemon.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        },
        include: [Type]
      })

    // console.log(pokemon)
    if(!pokemon.length){
      pokemon=[]
    }
    if(pokemonApiName){
      pokemon.push(pokemonApiName)
    }
    if(!pokemon.length){
      throw new Error("No se encontró ningún Pokémon");
    }
    return pokemon
   
}

module.exports={getByNamePokemon}