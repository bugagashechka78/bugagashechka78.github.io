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
        name: {type: String, required: false},
        calorie: {type: Number, required: false},
        proteins: {type: Number, required: false},
        fats: {type: Number, required: false},
        carbs: {type: Number, required: false},
        recipeText: {type: String, required: false},
        // picture: {type: Image, required: false},
        category: {type: String, required: false},

        ingredients: [{
            ingredientId: {type: mongoose.Schema.Types.ObjectId, ref: 'ingredientsAll'},
            quantity: {type: Number, required: false},
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