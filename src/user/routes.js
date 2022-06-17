const { Router } = require("express");
const userRouter = Router();
const { createUser, deleteUser, findUser, updateUser, tokenLogin } = require("./controllers");
const { hashPassword, unHashPass, tokenCheck} = require("../middleware");

userRouter.post("/user", hashPassword, createUser);
userRouter.post("/login", unHashPass, tokenLogin);
userRouter.get("/user", tokenCheck, tokenLogin);
userRouter.delete("/:username", deleteUser);
userRouter.get("/:username", findUser);
userRouter.patch("/:username", updateUser );

module.exports = userRouter;