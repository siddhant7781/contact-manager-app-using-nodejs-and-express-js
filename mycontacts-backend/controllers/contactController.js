// @desc 

const getContacts = (req, res) => {
    res.status(200).json({
        message: "get all contacts"
    });
}

const createContact = (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all fields are necessary!")
    }

    res.status(200).json({
        message: "create contacts"
    });
}

const getContact = (req, res) => {
    res.status(200).json({
        message: `get contact for ${req.params.id}`
    });
}

const updateContact = (req, res) => {
    res.status(200).json({
        message: `update contact for ${req.params.id}`
    });
}

const deleteContact = (req, res) => {
    res.status(200).json({
        message: `delete contact of ${req.params.id}`
    })
}

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };
