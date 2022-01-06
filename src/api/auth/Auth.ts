import { gql } from "@apollo/client";

// This is a sample gql query. Replace it with your query when needed.

export const REGISTER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $name: String!
    $dateOfBirth: String!
  ) {
    createUser(
      user: {
        name: $name
        email: $email
        dateOfBirth: $dateOfBirth
        password: $password
      }
    ) {
      status
      message
      success
      isError
      dateOfBirth
      email
      name
    }
  }
`;
export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      userId
      token
      tokenExpiration
    }
  }
`;
