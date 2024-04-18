const mongoose = require("mongoose");


let recipesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    calorie: {type: Number, required: true},
    proteins: {type: Number, required: true},
    fats: {type: Number, required: true},
    carbs: {type: Number, required: true},
    recipeText: {type: String, required: true},
    picture: {type: String, required: true},
    category: {type: String, required: true},
    cookingTime: {type: String, required: true},

    ingredients: [{
        ingredientId: {type: String, required: true},
        quantity: {type: Number, required: true},
        unit: {type: String, required: true},
    }]
});


module.exports = mongoose.model('recipes', recipesSchema);


