const asyncHandler = require('express-async-handler');

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "get all contacts"
    });
})

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all fields are necessary!")
    }

    res.status(201).json({
        message: "create contacts done"

    });
})

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `get contact for ${req.params.id}`
    });
})

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `update contact for ${req.params.id}`
    });
})

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `delete contact of ${req.params.id}`
    })
})

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };
