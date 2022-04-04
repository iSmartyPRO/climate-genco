const express = require("express")
const router = express.Router()
const controller = require("../controllers/co2")

router.get('/', controller.get)
router.get('/:page', controller.get)

module.exports = router