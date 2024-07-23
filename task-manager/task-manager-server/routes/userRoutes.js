const express = require('express');

const userrouter = express.Router()

const Model = require("../model/userModel")
const jwt = require('jsonwebtoken');


userrouter.post('/signup', (req, res) => {
    const data = new Model({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password : req.body.password,
        dob: req.body.dob,
        email: req.body.email
    })
    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
userrouter.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

userrouter.post('/login', (req, res, next) => {
    const data = new Model({
        userName: req.body.userName,
        password : req.body.password
    })
    //checking to make sure the user entered the correct username/password combo
    let username = data.userName;
    let password = data.password;
    if(true) { 
        //if user log in success, generate a JWT token for the user with a secret key
        jwt.sign({username}, 'privatekey', { expiresIn: '1h' },(err, token) => {
            if(err) { res.send(err) }    
            res.send(token);
        });
    } else {
        res.send('Login Denied.');
    }
})

const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}

userrouter.get('/data', checkToken, (req, res) => {
    //verify the JWT token generated for the user
    jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
        if(err){
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            //If token is successfully verified, we can send the autorized data 
            res.json({
                message: 'Successful log in',
                authorizedData
            });
            console.log('SUCCESS: Connected to protected route');
        }
    })
});


//Get by ID Method
userrouter.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Update by ID Method
//Update by ID Method
userrouter.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Delete by ID Method
//Delete by ID Method
userrouter.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = userrouter;
module.exports = checkToken;
