const bcrypt = require("bcryptjs");
const User = require("../user/model");

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
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