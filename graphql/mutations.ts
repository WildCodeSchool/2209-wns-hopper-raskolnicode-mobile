import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($data: UserInput!) {
    login(data: $data)
  }
`;