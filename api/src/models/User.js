const { DataTypes } = require("sequelize");

module.exports=(sequelize)=>{
    sequelize.define('User',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        email:{
           type:DataTypes.STRING,
           allowNull:false,
           isEmail:true,
           unique:true
        },
        password: {
            type: DataTypes.STRING(64),
            validate: {
              is: /^[0-9a-f]{64}$/i
            }
        }
    },{timestamps:false})
}