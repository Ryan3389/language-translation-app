const { User } = require("../models")
const { signToken, AuthenticationError } = require('../utils/auth')
require('dotenv').config()
// console.log('api key: ', process.env.API_KEY)
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.API_KEY
})




const resolvers = {
    Query: {
        users: async () => {
            try {
                return await User.find()
            } catch (error) {
                console.error(error)
                throw new Error('Failed to fetch users')
            }
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            try {
                const user = await User.create({ email: email.trim(), username, password });


                const token = signToken(user)

                return { token, user }
            } catch (error) {
                console.error(error)
                throw new Error('Failed to create user')
            }
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError;
            }

            const token = signToken(user);
            return { token, user };
        },

        translateText: async (_, { text, language }) => {
            try {
                const messages = [
                    {
                        role: 'system',
                        content: `You are a language translation expert. Translate the given text into ${language} `
                    },
                    {
                        role: 'user',
                        content: text
                    }
                ]
                const response = await openai.chat.completions.create({
                    model: 'gpt-3.5-turbo',
                    messages: messages
                })

                const translatedText = response.choices[0].message.content

                return { translatedText }
            } catch (error) {
                console.error('Error in trandlateText resolver ', error)
                throw new Error('Translation failed')
            }
        }
    }
}

module.exports = resolvers






