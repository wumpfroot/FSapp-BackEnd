const { Router } = require("express");
const userRouter = Router();
const { createUser } = require("./controllers");
const { hashPassword } = require("../middleware");

userRouter.post("/user", hashPassword, createUser);

module.exports = userRouter;