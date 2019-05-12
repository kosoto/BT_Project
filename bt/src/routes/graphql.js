import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../graphql/schema'
import root from '../../graphql/resolver';

const router = express.Router();

router.use('/', graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}));

export default router;
