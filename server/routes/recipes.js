const express = require('express');
const router = express.Router();
const cors = require('cors');
const Recipes = require('../models/Recipes');
const passport = require('passport');
require('../../config/passport')(passport);


router.use(cors());

router.get('/', passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        const token = getToken(req.headers);
        if (token) {
            Recipes.find((error, recipes) => {
                if (error) {
                    return next(error);
                }
                res.json(recipes);
            });
        } else {
            return res.status(403).send({success: false, message: 'Unauthorized'});
        }
    });

router.post('/', passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        const token = getToken(req.headers);
        if (token) {
            Recipes.create(req.body, (error, savedMeasuredPoints) => {
                if (error) {
                    console.log(error);
                    return next(error);
                }
                res.json({state: 'success', id: savedMeasuredPoints._id,});
            });
        } else {
            return res.status(403).send({state: 'error', message: 'Unauthorized'});
        }
    });

router.delete('/:id', passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        const token = getToken(req.headers);
        if (token) {
            await Recipes.findByIdAndDelete(req.params.id)
                .then(() => res.json({state: 'success'}))
                .catch((err) => res.json({state: 'error', message: err}));
        }
        else {
            return res.status(403).send({state: 'error', message: 'Unauthorized'});
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
