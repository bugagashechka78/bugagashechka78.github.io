const passport = require('passport');
const settings = require('../../config/settings');
require('../../config/passport')(passport);
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require("../models/User");

router.use(cors());

router.post('/register', async (req, res) => {
    console.log(req.body);
    if (!req.body.username || !req.body.password) {
        res.json({success: false, msg: 'Please pass username and password.'});
    } else {
        const newUser = new User(req.body);
        await newUser.save()
            .then(() => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
                res.setHeader('Access-Control-Allow-Credentials', true); // If needed
                res.json({success: true, msg: 'Successful created new user.'})
            })
            .catch(() => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
                res.setHeader('Access-Control-Allow-Credentials', true); // If needed
                res.json({success: false, msg: 'Username already exists.'})
            });
    }
});

router.post('/login', function (req, res) {
    // console.log(req.body);
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) throw err;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        if (!user) {
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    const token = jwt.sign(user.toJSON(), settings.secret);
                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        likeAll: user.likeAll
                    });
                } else {
                    res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
});

router.post('/sync', function (req, res) {
    const token = getToken(req.headers);
    if (token) {
        User.findOne({
            username: req.body.username
        }, async (err, user) => {
            if (err) throw err;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
            res.setHeader('Access-Control-Allow-Credentials', true); // If needed
            console.log(req.body)
            user.likeAll = req.body.likeAll;

            await user.save();
        })
    } else {
        return res.status(403).send({state: 'error', message: 'Unauthorized'});
    }
})


const getToken = function (headers) {
    if (headers && headers.authorization) {
        const parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

module.exports = router;
