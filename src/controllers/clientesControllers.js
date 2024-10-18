import {pool} from "../db.js"

export const getClientes = async (req,res) => {
    try {
        const [rows] = await pool.query("select * from clientes")
        res.json(rows)
    }
    catch(error) {
        return res.status(500).json({
            message: "algo ha fallado"
        })
    }
    
}

export const getClienteById = async (req,res) => {
    const [rows] = await pool.query("select * from clientes where id = ?", [req.params.id])
    if (rows.length <= 0) {
        return res.status(404).json({
            "message": "Cliente no encontrado"
        })
    }
    res.json(rows[0])
}

export const crearCliente = async (req,res) => {
    const {nombre,edad,profesion} = req.body
    const [rows] = await pool.query("insert into clientes(nombre,edad,profesion) values (?,?,?)", [nombre,edad,profesion])
    // res.send("Dado de alta correctamente:")    
    res.send(rows)
}

export const updateCliente = async (req,res) => {
    const id = req.params.id
    const {nombre,edad,profesion} = req.body
    const [result] = await pool.query("update clientes set nombre=IFNULL(?,nombre), edad=IFNULL(?,edad), profesion=IFNULL(?,profesion) where id = ?",[nombre,edad,profesion,id])
    if (result.affectedRows == 0) {
        return res.status(404).json({
            message: "Cliente no se pudo actualizar"
        })
    }
    res.send("Cliente actualizado")
}

export const deleteCliente = async (req,res) => {
    const [result] = await pool.query("delete from clientes where id = ?",[req.params.id])
    if (result.affectedRows <=0) {
        return res.status(404).json({
            "message": "Cliente no encontrado al intentar borrarlo"
        })
    }
    res.sendStatus(204) // que todo OK pero no envia nada
}