import { UserActivity } from "./dataModel.js"
import {sequelize} from './db.js';

const initialData = [
    { name: "Alice", activity: "Login" },
    { name: "Bob", activity: "Upload Photo" },
];

const names = ['Charlie', 'Dana', 'Eva', 'Frank'];
const activities = ['Comment', 'Like', 'Share', 'Logout'];

async function startInsertData(){
try{
await sequelize.sync({ force: true });
console.log("Table created.");
await UserActivity.bulkCreate(initialData)
console.log('data inserted');
}
catch(err){
    console.error("Error inserting data:", err)
}
}
// startInsertData()

function  insertRandom(){
    setInterval(async()=>{
        let rand = Math.floor(Math.random()*names.length)
        let nameof = names[rand]
        let rand2 = Math.floor(Math.random()*activities.length)
        let activitiesof = activities[rand2]
        try{
        await UserActivity.create({name: nameof ,activity: activitiesof})
            console.log('inserted random')
        }catch(err){
            console.log({err: 'nor inserted random'});
            
        }

    },1000*10)
}
// insertRandom()

async function allData(){
    try{
    const rows = await UserActivity.findAll({raw: true})
        console.table(rows);
    }
    catch(err){
        console.log({err: "cennot log data"});
    }
}
// allData()