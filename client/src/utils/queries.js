import { gql } from "@apollo/client";

export const QUERY_ALL_EVENTS = gql`
  {
    events {
      _id
      date
      location
      category {
        name
      }
    }
  }
`;

export const QUERY_EVENT = gql`
  { event
    {
      _id
      date
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
      events {
        _id
        date
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
       chefs{
         firstName
         lastName
       }
       category{
         name
       }
      }
      dishes {
        _id
        name
        description
      }
  }
`;
