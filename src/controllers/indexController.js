import {pool} from "../db.js"

export const getCnn = async (req,res) => {
    const result = await pool.query("select * from clientes")
    res.json(result)
}