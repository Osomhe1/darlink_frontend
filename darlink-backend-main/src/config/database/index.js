const sql =require('mssql/msnodesqlv8');
const {  getDB_NAME, getDB_PWD, getDB_USER } = require('../env');

const DB=getDB_NAME();
const sqlConfig = {
    // user: getDB_USER(),
    // password: getDB_PWD(),
    database: DB,
    server: "LEARNUELTECH_1\\SQLEXPRESS",
    driver:"msnodesqlv8",
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
    //   encrypt: true, // for azure
      trustedConnection:true,
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }

  }
  const appPool = new sql.ConnectionPool(sqlConfig)
const sqlConnection=async()=>{
    try {
        console.log(`Connecting to database...`)
        await sql.connect(sqlConfig)
        console.log(`Database connected...`)
    } catch (error) {
        console.log(error)
        process.exit(-1);
    }
}

module.exports={
    sqlConnection,
    sql,
    appPool,
}