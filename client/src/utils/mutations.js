import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      password
    }
  }
}
`
export const TRANSLATE_TEXT = gql`
  mutation Mutation($text: String!, $language: String!) {
  translateText(text: $text, language: $language) {
    translatedText
  }
}
`