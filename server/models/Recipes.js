const mongoose = require("mongoose");


let recipesSchema = new mongoose.Schema({
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
});


module.exports = mongoose.model('recipes', recipesSchema);


