const axios=require('axios')

const getApiData=async()=>{
    try {
        let i=1
        let array=[]
        while(i<241){
            let apiData=axios(`https://pokeapi.co/api/v2/pokemon/${i}`)
            array.push(apiData)
            i++
        }
        array=(await Promise.all(array)).map(res=>res.data).map(char=>{
            return{
                id:char.id,
                name:char.name,
                image:char.sprites.other.dream_world.front_default,
                life:char.stats[0].base_stat,
                attack:char.stats[1].base_stat,
                defense:char.stats[2].base_stat,
                Types:char.types[0].type.name
            }
        })
        return array
    } catch (error) {
        return error.message
    }
}
module.exports={getApiData}