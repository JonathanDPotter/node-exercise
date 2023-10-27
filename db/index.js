import mysql from "mysql2";
import config from "../config";

console.log(config.mysql.password)

const connection = mysql.createPool(config.mysql);

export default connection;
