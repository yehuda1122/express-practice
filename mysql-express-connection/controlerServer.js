import pool from "./db.js"

export const getData = async (req, res) => {
    try{
    const [rows] = await pool.query(`SELECT * FROM customers WHERE country='france'`)
    res.status(200).json(rows)
    }
    catch(err){
        console.log('db error ' + err);
        res.status(404).json({ Error: "cennot get country" })
    }
}

const numReort = 1143

export const getReport = async (req, res) => {
    try {
        const [report] = await pool.query("SELECT firstName,lastName FROM employees WHERE reportsTo = ?", [numReort])
        res.status(200).json(report)
    }
    catch (err) {
        console.log('db error ' + err);
        res.status(404).json({ Error: "cennot get report" })
    }
}


const type = 'Classic Cars'
export const getproducs = async (req,res)=>{
    try{
        const [products] = await pool.query("SELECT COUNT(*) FROM products WHERE  productLine = ?",[type])
        res.status(200).send(products)  
    }
    catch (err) {
        console.log('db error ' + err);
        res.status(404).json({ Error: "cennot get pruducts" })
    }
}

