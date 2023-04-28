const express= require("express")
const { createUser, getUser, getUserById, deleteUserById, updateUserById } = require("../controllers/user")
const router= express.Router()

router.route("/").post(createUser).get(getUser)

router.route("/:id")
.get(getUserById)
.delete(deleteUserById)
.patch(updateUserById)


module.exports= router