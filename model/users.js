

module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define("users",{
         name:{
             type:DataTypes.STRING
         },
         email:{
             type:DataTypes.STRING
         },
         gender:{
             type:DataTypes.STRING
         }
    },{
        tableName:"data"
    })

    return User;
}