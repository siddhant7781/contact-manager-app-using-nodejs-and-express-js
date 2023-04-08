const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const registerUser = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("all fields are mandatory")
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("user already registered")
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("hashed password: ", hashedPassword);

    const user = User.create({
        username,
        email,
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error("user da ta is not valid")
    }

    res.json({
        message: "user registered succesfully"
    })
});

const loginUser = asyncHandler(async (req, res) => {
    res.json({
        message: "user logged in  succesfully"
    })
});


const currentUser = asyncHandler(async (req, res) => {
    res.json({
        message: "current user information"
    })
});


module.exports = { registerUser, loginUser, currentUser }