const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String,
    skills: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
  users: [User]!
  user(userId: ID!): User
  }


  type Mutation {
    addUser(firstName: String! lastName: String! email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`

module.exports = typeDefs

