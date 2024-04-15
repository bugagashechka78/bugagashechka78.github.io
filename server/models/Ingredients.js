const mongoose = require("mongoose");


let ingredientsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    calorie: {type: Number, required: true},
    proteins: {type: Number, required: true},
    fats: {type: Number, required: true},
    carbs: {type: Number, required: true},
});


module.exports = mongoose.model('ingredientsAll', ingredientsSchema);


