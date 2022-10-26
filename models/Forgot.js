import { Sequelize } from "sequelize";   
import db from "../config/Database.js";   
   
const { DataTypes } = Sequelize;   
   
const Forgott = db.define(   
  "forgot",   
  {  
    id: {  
      type: DataTypes.INTEGER,  
      primaryKey: true  
    },  
    code: {  
      type: DataTypes.INTEGER,   
    },  
      
    uid: {  
      type: DataTypes.INTEGER,   
    }, 
  },   
  {   
    freezeTableName: true,   
  }   
);   
   
(async () => {   
  await db.sync();   
})();   
   
export default Forgott;
