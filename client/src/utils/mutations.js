import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent(
    $date: String!
    $dishes: [Dish]!
    $chefs: [User]!
    $location: String!
    $category: Category!
  ) {
    addEvent(
      date: $date
      dishes: $dishes
      chefs: $chefs
      location: $location
      category: $category
    ) {
        _id
        date
        location
        dishes{
          _id
          name
          description
        }
        chefs {
          firstName
          lastName
        }
        category {
          name
        }
      }
    }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
