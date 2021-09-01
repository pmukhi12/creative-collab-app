const mongoose = require('mongoose');

const { Schema } = mongoose;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String
      },

});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;