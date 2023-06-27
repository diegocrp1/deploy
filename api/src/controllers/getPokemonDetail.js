const {Pokemon,Type}= require('../db')
const { getApiData } = require('./saveApiData')
// const axios=require('axios')

const getPokemonDetail=async(idUser,search)=>{
    try {

      if(search==='api'){
        const allCharacter=await getApiData()
        const pokemon=allCharacter.find(char=>char.id===+idUser)
        if(!pokemon) return {message:"Id no existe"}
        return pokemon
      }

      const pokemon=await Pokemon.findOne({
        where:{id:idUser},
        include:[Type]
      })
      if(!pokemon) return {message:"Id de la base de datos no existe"}
      
      const tipos = pokemon.Types.map((tipo) => tipo.name)
      
      const pokemonDetails = {
        id: pokemon.id,
        name: pokemon.name,
        image:pokemon.image,
        life:pokemon.life,
        attack:pokemon.attack,
        defense:pokemon.defense,
        Types: tipos
      };
      
     return pokemonDetails
    } catch (error) {
        return error
    }
}

module.exports={getPokemonDetail}