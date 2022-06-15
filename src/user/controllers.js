const User = require("./model");
// const jwt = require("jsonwebtoken")

exports.createUser = async (req, res) => {
    try {
        const userObj = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
        const newUser = await User.create(userObj);
        // const token = await jwt.sign({ id: newUser._id }, process.env.SECRET);
        console.log(token);
        res.send({ newUser, token });
    } catch (error) {
        console.log(error);
        res.send({ error: error.code });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userObj = {
            username: req.body.username,
        }
        console.log("removeUser started")
        const removeUser = await User.deleteOne(userObj); //NOT COMPLETE
        console.log(removeUser);
        res.send({ removeUser });
        console.log("removeUser hit", removeUser)
    } catch (error) {
        console.log(error);
        res.send({ error: error.code });
    }
}

exports.findUser = async (req, res) => {
    try {
        const userObj = {
            username: req.body.username
        };
        console.log("Find one user", userObj);
        const result = await User.findOne(userObj);
        res.status(200).json({ data:response });
    } catch (error) {
        console.log(error);
        res.send({ error: error.code });
    }
}

exports.tokenLogin = async (req, res) => {
    const token = await jwt.sign({ id: req.user._id }, process.env.SECRET);
    res.send({ user: req.user, token });
}