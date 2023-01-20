require("dotenv").config();
module.exports ={
    getDBURL:()=>process.env.DB_URL,
    getDB_NAME:()=>process.env.DB_NAME,
    getLOCAL_DBURL:()=>process.env.LOCAL_DB_URL,
    getDB_SERVER:()=>process.env.DB_SERVER,
    getDB_USER:()=>  process.env.DB_USER,
    getDB_PWD:()=>process.env.DB_PWD,
    getServerPort:()=>process.env.PORT,
     getFrontendOrigin:()=>process.env.FRONTEND_ORIGIN_URL,
    getRefreshTokenSecrete:()=>process.env.REFRESH_TOKEN_SECRETE,
    getTokenSecrete:()=>process.env.TOKEN_TOKEN_SECRETE,
}