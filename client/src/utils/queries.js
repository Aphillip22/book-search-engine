import { gql } from "graphql-tag";

export const GET_ME = gql`
  query users($username: String) {
    me(username: $username) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        description
        title
        image
        link
      }
    }
  }
`;