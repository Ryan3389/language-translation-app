const { User } = require("../models")
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            try {
                return await User.find()
            } catch (error) {
                console.error(error)
            }
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            try {
                const user = await User.create({ email: email.trim().toLowerCase(), username, password });


                const token = signToken(user)

                return { token, user }
            } catch (error) {
                console.error(error)
            }
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token, user };
        },
    }
}

module.exports = resolvers






