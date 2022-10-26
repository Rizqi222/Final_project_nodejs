import express from "express"; 
import {
    addInvest,
    getAllInvest,
    getOneInvest,
    updateInvest,
    deleteInvest,
} from "../controller/investController.js";

const router = express.Router();

router.get("/", getAllInvest);
router.post("/", addInvest);
router.get("/:id", getOneInvest);
router.put("/:id", updateInvest);
router.delete("/:id", deleteInvest);

export default router;