import express from "express"
import {getAllItems, getItem, createItem} from "../controller/itemsController.js"

const router = express.Router();

router.route("/").get(getAllItems).post(createItem)
router.route("/:id").get(getItem)

export default router;