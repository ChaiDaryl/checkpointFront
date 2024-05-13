import { gql } from "@apollo/client";

export const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $code: String!, $emoji: String!, $continent: String) {
    addCountry(input: { name: $name, code: $code, emoji: $emoji, continent: $continent }) {
      id
      name
      code
      emoji
      continent
    }
  }
`;
