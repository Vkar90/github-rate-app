import { gql } from "@apollo/client";

export const AUTHORIZE = gql`
  mutation Authorize($input: AuthorizeInput) {
    authorize(credentials: $input) {
      accessToken
    }
  }
`;
