const {Pokemon,Type}= require('../db');
const { getApiData } = require('./saveApiData');

const getAllController=async()=>{
    const allPokemon=await Pokemon.findAll({include:[Type]})
    const allCharacter=await getApiData()
    // console.log(allPokemon)
    return [...allPokemon,...allCharacter]
}

module.exports={getAllController}