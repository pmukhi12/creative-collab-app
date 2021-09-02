import { gql } from "@apollo/client";

export const QUERY_EVENTS = gql`
  query getEvents ($category: ID!){
    products(category: $category) {
      _id
      date
      name
      location
      host {
        firstName
        lastName
        email
      }
      dishes {
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

export const QUERY_ALL_EVENTS = gql`
  {
    events {
      _id
      date
      name
      location
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;



export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
        dishes {
          _id
          name
          description
        }
        events {
          _id
          date
          name
          location
        dishes {
          name
          description
        }
        chefs{
          firstName
          lastName
        }
    
        }
      }
  }
`;
