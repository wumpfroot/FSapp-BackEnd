const bcrypt = require("bcryptjs");
const User = require("../user/model");
const jwt = require("jsonwebtoken");

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.send({error: error.code});
    }
}

exports.tokenCheck = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        const decodedToken = jwt.verify(token, process.env.SECRET);
        req.user = await User.findById(decodedToken.id);
        next();
    } catch (error) {
        console.log(error);
        res.send({error: error.code});
    }
}

exports.unHashPass = async (req, res, next) => {
    try {
        req.user = await User.findOne({ username: req.body.username });
        const result = await bcrypt.compare(req.body.password, req.user.password);
        if (result) {
        next();
        } else {
            throw new Error("Incorrect details");
        }
    } catch (error) {
        console.log(error);
        res.send({ erroe: error.code });
    }
}