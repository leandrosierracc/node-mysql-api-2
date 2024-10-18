import {Router} from "express"
import { getCnn} from "../controllers/indexController.js"

const router = Router()

router.get("/probarCnn", getCnn)

export default router;