const express = require("express");
const { signup, login } = require("../controllers/auth.controller");
const { getAllUsers } = require("../controllers/users.controller");

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);

userRouter.get("/getAllUsers", getAllUsers);

module.exports = userRouter;
