const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    dishes: [Dish]
    events: [Event]
  }

  type Dish {
    _id: ID
    name: String
    description: String
  }

  type Event {
    _id: ID
    date: String
    location: String
    host: User
    dishes: [Dish]
    chefs: [User]
    category: Category
  }
  type Category {
    _id: ID
    name: String
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    event(_id: ID!): Event
    categories: [Category]
    events: [Event]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth


    login(email: String!, password: String!): Auth
    addDish(name: String!
      description: String!)

    addEvent(
      date: String!
      dishes: [Dish]!
      chefs: [User]!
      location: String!
      category: Category!)

    updateEvent(_id: ID!
      date: String!
      dishes: [Dish]!
      chefs: [User]!
      location: String!
      category: Category!)


  }
`;

module.exports = typeDefs;
