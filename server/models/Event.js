const mongoose = require('mongoose');
const Dish = require('./Dish');

const { Schema } = mongoose;
const userSchema = require('./User');
const dishSchema = require('./Dish');


const eventSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String
  },
  
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
 
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  dishes: [dishSchema],
  chefs: [userSchema]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
