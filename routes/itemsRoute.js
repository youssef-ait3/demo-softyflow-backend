const express = require("express")
const router = express.Router();


const {
    getItems,
    getHtml,
    createItems
} = require("../controllers/itemsController")


router.get("/", getItems)
router.get("/page", getHtml)
router.post("/create", createItems)

module.exports = router