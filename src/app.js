// para poder usar export/import en package.js poner lo de  "type": "module",
import express from "express"
import indexRoute from "./routes/indexRoutes.js"
import clientRoute from "./routes/clientesRoutes.js"
import {PORT} from "./config.js"

const app = express()

app.use(express.json()); // sirve para q entienda datos en json
app.use(indexRoute)
app.use(clientRoute)

// si no encuentra ninguna ruta que saque un error de pag no encontrada
app.use((req,res,next) => {
    res.status(404).json({
        message: "Error: Esa url no existe"
    })
})

export default app