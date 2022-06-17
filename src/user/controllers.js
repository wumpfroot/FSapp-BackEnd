const User = require("./model");
const jwt = require("jsonwebtoken")

exports.createUser = async (req, res) => {
    console.log(req.body)
    try {
        const userObj = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
        const newUser = await User.create(userObj);
        const token = await jwt.sign({ id: newUser._id }, process.env.SECRET);
        console.log(token)
        res.send({ newUser, token });
        console.log(`User ${newUser.username} was added to the database`)
    } catch (error) {
        console.log(error);
        res.send({ error: error.code });
    }
};

exports.deleteUser = async (req, res) => {
    console.log(req.params.username);
    try {
        const userObj = {
            username: req.params.username,
        }
        console.log("removeUser started")
        const removeUser = await User.deleteOne(userObj);
        console.log(removeUser);
        res.send({ removeUser });
        if (removeUser.deletedCount > 0) {
        console.log("Succesfully removed user", req.params.username)
        } else {
            console.log("Something went wrong")
        }
    } catch (error) {
        console.log(error);
        res.send({ error: error.code });
    }
}

exports.findUser = async (req, res) => {
    try {
        const userObj = {
            username: req.params.username
        };
        console.log("Find one user", userObj);
        const response = await User.findOne(userObj);
        res.status(200).json({ data:response });
        console.log("Result:", response)
    } catch (error) {
        console.log(error);
        res.send({ error: error.code });
    }
}

//Updates the username with a specific ID
exports.updateUser = async (req, res) => {
    console.log("\nUsername", req.params.username);
    try {
        const updateUser = await User.updateOne(
            { username: req.params.username }, 
            { $set: { username: req.body.username }}
            );
            res.json(updateUser);
            if (updateUser.modifiedCount > 0) {
                console.log("\nwas succesfully changed to", req.body.username)
                } else {
                    console.log("Something went wrong")
                }
    } catch (error) {
        console.log(error);
        res.send({ error: error.code });
    }
}

exports.tokenLogin = async (req, res) => {
    const token = await jwt.sign({ id: req.user._id }, process.env.SECRET);
    res.send({ user: req.user, token });
}