import {Router} from "express"
import {getClientes,getClienteById,crearCliente,updateCliente,deleteCliente} from "../controllers/clientesControllers.js"

const router = Router()

router.get("/getCLientes",getClientes)
router.get("/getCLienteById/:id",getClienteById)
router.post("/crearCliente",crearCliente)
router.put("/updateCliente/:id",updateCliente)
router.delete("/deleteCliente/:id",deleteCliente)

export default router;