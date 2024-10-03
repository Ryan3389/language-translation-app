const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String,
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type TranslationResult {
    translatedText: String
  }

  type Query {
  users: [User]!
  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    translateText(text: String!, language: String!): TranslationResult
  }
`

module.exports = typeDefs

