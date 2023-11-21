import Items from "../models/itemsModel.js"
import { StatusCodes } from "http-status-codes"

// get all items
export const getAllItems = async (req, res) => {
    const items = await Items.find({})

    if (!items) {
        return res.status(StatusCodes.NOT_FOUND).json({error: "No items found"})
    }
    res.status(StatusCodes.OK).json({items: items})
}

// get single item
export const getItem = async (req, res) => { 
    const item = await Items.findById(req.params.id)

    if (!item) {
        return res.status(StatusCodes.NOT_FOUND).json({error: "No item found"})
    }
    res.status(StatusCodes.OK).json({item: item})
}

// create item
export const createItem = async (req, res) => { 
    if (!req.body) return res.status(StatusCodes.BAD_REQUEST).json({error: "No data provided"})
    const item = await Items.create(req.body)
    res.status(StatusCodes.CREATED).json({item: item})
}