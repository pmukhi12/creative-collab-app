const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
  },

  host: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  dishes: { type: ["ObjectId"], ref: "Dish" },
  chefs: { type: ["ObjectId"], ref: "User" },
 
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
