const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "user must have name"]
    },
    email: {
        type: String,
        required: [true, "user must have email address"],
        unique: [true, "user email already taken"]
    },
    password: {
        type: String,
        required: [true, "user must have password"],

    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema);