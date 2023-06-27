const { getByNamePokemon } = require("../controllers/getByNamePokemon")

const getByNameHandler=async(req,res)=>{
    const { name } = req.query;
    try {
      if (!name) {
        throw new Error("Se requiere el parámetro 'name'");
      }
      const pokemon = await getByNamePokemon(name);
      return res.status(200).json(pokemon);
    } catch (error) {
      return res.status(422).json({ error: error.message });
    }
}
module.exports={getByNameHandler}