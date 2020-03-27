const express = require("express")
const { getSingleUser, getAllUser } = require("../controllers/user")
const { checkUserExist } = require("../middlewares/database/databaseErrorHelpers")
const userQueryMiddlware  = require("../middlewares/query/userQueryMiddlware")
const User = require("../models/User")

const router= express.Router()

router.get("/",userQueryMiddlware(User), getAllUser)
router.get("/:id", checkUserExist, getSingleUser)

module.exports = router