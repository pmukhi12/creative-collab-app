const { AuthenticationError } = require('apollo-server-express');
const { User, Event, Category, Dish} = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    // pass params as a string (drop down selection for users to pick cuisines that are pulled from the data User inputs)
    categories: async () => {
      return await Category.find();
    },
    events: async () => {
      return await Event.find().populate('category');
    },

    
    event: async (parent, { _id }) => {
      return await Event.findById(_id).populate('category','chefs','dishes');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('dishes', 'events')

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  }, 
  
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  
    addDish: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const dish = new Dish.create({args});

        await User.findByIdAndUpdate(context.user._id, { $push: { dishes: dish } });

        return dish;
      }

      throw new AuthenticationError('Not logged in');
    },
  
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;