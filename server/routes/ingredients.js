const express = require('express');
const router = express.Router();
const cors = require('cors');
const Ingredients = require('../models/Ingredients');
const passport = require('passport');
require('../../config/passport')(passport);


router.use(cors());

router.get('/', passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        const token = getToken(req.headers);
        if (token) {
            Ingredients.find((error, ingredients) => {
                if (error) {
                    return next(error);
                }
                // console.log(ingredients)
                res.json(ingredients);
            });
        } else {
            return res.status(403).send({success: false, message: 'Unauthorized'});
        }
    });

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
