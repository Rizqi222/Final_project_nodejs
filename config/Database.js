import { Sequelize } from "sequelize"; 
 
const db = new Sequelize("crowdInvest", "root", "", { 
  host: "localhost", 
  dialect: "mysql", 
}); 
 
export default db;