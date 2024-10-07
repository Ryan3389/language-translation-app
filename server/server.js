const express = require('express');
const { ApolloServer } = require('@apollo/server');
//middleware + path
const { expressMiddleware } = require('@apollo/server/express4');
const { authMiddleware } = require('./utils/auth');
const path = require('path');
const cors = require('cors')

//db + backend
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');

//PORT and functions for server
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const corsOptions = {
    origin: 'https://speakeasytranslate.netlify.app/',
    credentials: true,
}

app.use(cors(corsOptions))
//STEP 2: START SERVER
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
    await server.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());


    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware
    }));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    });
};



// Call the async function to start the server
startApolloServer();

