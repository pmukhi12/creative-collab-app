const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

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
    date: Date
    name: String
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

    addDish(name: String!, description: String!): Dish

    addEvent(
      date: String!
      name: String!
      location: String!
      host: ID!
      dishes: [ID]!
      chefs: [ID]!
      category: ID!
    ): Event

    updateEvent(
      _id: ID!
      date: String!
      name: String!
      location: String!
      host: ID!
      dishes: [ID]!
      chefs: [ID]!
      category: ID!
    ): Event
  }
`;

module.exports = typeDefs;
