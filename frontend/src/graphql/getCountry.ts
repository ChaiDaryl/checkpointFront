import { gql } from "@apollo/client";
export const GET_COUNTRY = gql`
  query GetCountry($CountryId: String!) {
    country(code: $CountryId) {
      id
      name
      code
      emoji
      continent
    }
  }
`;