import { Router } from 'express';
import { PLATFORM } from '../config';
import { authenticateToken ,generateAccessToken } from '../middleware';
const apiMethods = require(`../../${PLATFORM}/api`);
const router = Router();
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv')
dotenv.config();

process.env.TOKEN_SECRET;
  
router.post('/api/login', (req, res) => {
    const token = generateAccessToken({ username: req.body.username });  
    console.log(token)
    res.json(token);
     
});

export const V1DefaultRoutes = () => {


    router.get(
        '/default', authenticateToken, (req, res) => {
            const response = apiMethods.defaultMethod();
            res.send(response);
        }
    );


    return router;
};
