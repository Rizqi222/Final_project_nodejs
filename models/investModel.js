import { Sequelize } from "sequelize";  
import db from "../config/Database.js";
  
const { DataTypes } = Sequelize;  
  
const invest = db.define(  
  "invest",  
  { 
   
   
    amount: {  
      type: DataTypes.INTEGER,  
    },  
    borrowuid: {  
      type: DataTypes.INTEGER,  
    },  
    useruid: { 
      type: DataTypes.INTEGER,  
    }, 
    investuid: { 
      type: DataTypes.INTEGER,  
    }, 
    Date: { 
      type: DataTypes.DATE,  
    }, 
  },  
  {  
    freezeTableName: true,  
  }  
);  
  
(async () => {  
  await db.sync();  
})();  
  
export default invest;
