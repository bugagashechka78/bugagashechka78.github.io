const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    myRecipes: [{
        name: {type: String, required: true},
        calorie: {type: Number, required: true},
        proteins: {type: Number, required: true},
        fats: {type: Number, required: true},
        carbs: {type: Number, required: true},
        recipeText: {type: String, required: true},
        picture: {type: Image, required: true},
        category: {type: String, required: true},

        ingredients: [{
            ingredientId: {type: mongoose.Schema.Types.ObjectId, ref: 'ingredientsAll'},
            quantity: {type: Number, required: true},
        }]
    }],
    likeMy: [{
        recipeId: {type: mongoose.Schema.Types.ObjectId, ref: 'myRecipes'},
    }],
    likeAll: [{
        recipeId: {type: mongoose.Schema.Types.ObjectId, ref: 'recipes'},
    }]
});

UserSchema.pre('save', function (next) {
    let user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            console.log('tut')
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);