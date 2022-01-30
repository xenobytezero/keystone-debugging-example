import { CreateRequestContext } from "@keystone-next/keystone/types";
import express  from 'express';
import bodyParser from 'body-parser';

export function register(createContext: CreateRequestContext) {

    const router = express.Router();

    // Do we have a valid API key?
    router.get('/endpoint', async (req, res) => {
        res.status(200).send('OK');
    });
    
    return router;

}