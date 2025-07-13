import express, { json } from "express";


export const userRouter = express.Router()


let users = [{ id: 1, name: 'Alice' }];

userRouter.get('/', (req, res) => {
    res.json(users)
})

userRouter.post('/', (req, res) => {
    const addUser = req.body
    users.push(addUser)
    res.json(users)
})

userRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const obj = users.find((item) => item.id === id)
    res.json(obj)
})

userRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if(!("name" in req.body)){
        return res.send("no name")
    }
    for (const user of users) {
        if (user.id === id) {
            user.name = req.body.name
            return res.send(users)
        }
    }    
    res.status(404).json({ id: "not found" })
})

userRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index =  users.findIndex((obj)=> obj.id === id)
    if(index === -1){
        res.json({id: "not found"})
    }
    users.splice(index ,1)
    res.status(404).json("No Content")
})
