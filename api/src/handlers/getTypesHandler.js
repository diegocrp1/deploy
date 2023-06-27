const { getAllTypes } = require("../controllers/getAllTypes")



const getTypesHandler =async(req,res)=>{
try {
    const types=await getAllTypes()
    res.status(200).json(types)
} catch (error) {
    res.status(400).json(error)
}
}

module.exports={getTypesHandler}