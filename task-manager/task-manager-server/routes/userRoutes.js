const express = require('express');
const userrouter = express.Router();
const Model = require('../model/userModel');
const jwt = require('jsonwebtoken');

userrouter.post('/signup', async (req, res) => {
    const data = new Model({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
        dob: req.body.dob,
        email: req.body.email
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all Method
userrouter.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

userrouter.post('/login', async (req, res) => {
    try {
        const user = await Model.findOne({ userName: req.body.userName, password: req.body.password });
        if (user) {
            const token = jwt.sign({ userName: user.userName }, 'privatekey', { expiresIn: '10s' });
            res.json({ token });
        } else {
            res.status(401).send('Invalid username or password.');
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];
    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        res.sendStatus(403);
    }
};

userrouter.get('/data', checkToken, (req, res) => {
    jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Successful log in',
                authorizedData
            });
        }
    });
});

// Get by ID Method
userrouter.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update by ID Method
userrouter.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(id, updatedData, options);
        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete by ID Method
userrouter.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted..`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = userrouter;
module.exports = checkToken;
