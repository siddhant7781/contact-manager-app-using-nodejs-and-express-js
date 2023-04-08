const express = require('express');

const router = express.Router();

router.post('/register', (req, res) => {
    res.json({
        message: "user registered succesfully"
    })
});

router.post('/login', (req, res) => {
    res.json({
        message: "user logged in succesfully"
    })
});

router.get('/current', (req, res) => {
    res.json({
        message: "current user information"
    })
});

module.exports = router;