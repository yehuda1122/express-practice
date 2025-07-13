import { time } from "console";
import express, { json } from "express";
import { connect } from "http2";

const app = express();

app.get("/",(req , res) =>{
    res.send("welcom to home")

})

app.get("/about",(req,res)=>{
    res.send("about us")
})

app.listen(3005,()=>{
    console.log("the server runnig: http://localhost:3005");
    
})


//תרגיל 1
app.get("/greet",(req,res)=>{
    const times = new Date().toISOString()
    res.json({ msg: "hi from get endpoint " + times})
    
})


// תרגיל 1.2
app.get("/greet/:name",(req,res)=>{
    const name = req.params.name;
    console.log('i got name:' + name)
    res.json({ msg : "got name: " + name })
    });

//// 2.2תרגול
app.get("/test", async (req,res)=>{
    const chek = await fetch("http://localhost:3005/greet/bob")
    const data = await chek.json()    
    if (data.msg && data.msg.includes("bob") ){
        res.json({ "result": "ok" })
    }
    else{
        res.json({ "result": "fail"})
    }

})
//// תרגיל 3

app.use(express.json())
app.post("/action",async (req,res)=>{
    if(!req.body){
        res.status(400).json({ msg: "body is malformed" })
    } 
    else if (req.body.action === "joke" ){
        const respons = await fetch("https://official-joke-api.appspot.com/random_joke")
        const {setup,punchline} = await respons.json()
        const joke = `${setup}, ${punchline}`.toUpperCase();
        res.json({joke})
    }
    else if(req.body.action === "catfact"){
        const api = "live_x6BDBCskee0sEyAiO1EwBK5O9qEJOxWJsEFrdzDHNlX6xh6YhnTzCpATq3BbgtiT"
        const respons2 = await fetch("https://api.thecatapi.com/v1/images/search?limit=11",
            {
                headers : {
                    "x-api-key" : api
                }
            }
        )        
        const data2 = await respons2.json()
        res.json({length:data2.length})
    }
})
app.listen(3005,()=>{
    console.log("the server runnig: http://localhost:3005");
})