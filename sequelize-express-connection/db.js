import { Sequelize } from "sequelize";
// import { config } from "dotenv"; //// הורדת ספריית env "nmp i msql2 dotenv express"
// config()

export const sequelize = new Sequelize('sequelize_test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});


// export const sequelize = new Sequelize(  
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASS || "",
//     process.env.DB_HOST,
//     {
//         dialect: 'mysql',
//         logging: false,
//     }
// )

// sequelize.authenticate().then(()=>{
//     console.log('connect to DB ')
// })
// // }).cetch(()=>{
// //     console.log('not connect to DB ');
// // })
// // sequelize.sync({force:true})