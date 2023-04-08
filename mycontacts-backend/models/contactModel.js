const mongoose = require('mongoose');


const contactSchema = mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "please enter contact name"]
    },
    email: {
        type: String,
        required: [true, "please enter the contact email"]
    },
    phone: {
        type: String,
        required: [true, "please enter contact phone number"]
    }
},
    {
        Timestamps: true,
    }
);

module.exports = mongoose.model('contact', contactSchema);