const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "please enter contact name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please enter the contact email"],
      validate: [validator.isEmail, "please enter a valid email"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "please enter contact phone number"],
      trim: true,
    },
  },
  {
    Timestamps: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);
