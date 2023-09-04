import { Router } from 'express';
import { PLATFORM } from '../config';
import { authenticateToken, generateAccessToken } from '../middleware';
const apiMethods = require(`../../${PLATFORM}/api`);
const router = Router();

export const V1DefaultRoutes = () => {

    router.post('/api/login', (req, res) => {
        const token = generateAccessToken({ username: req.body.username });
        res.cookie('authToken', token, {
            httpOnly : true,
            maxAge : 7 * 24 * 60 * 60 * 1000
        })
        res.json();
    });

    router.get(
        '/api/default', authenticateToken, (req, res) => {
            const response = apiMethods.defaultMethod();
            res.send(response);
        }
    );

    router.post('/api/default/:id', authenticateToken, (req, res) => {
        const response = apiMethods.defaultMethod(req);
        res.send(response);
    }
    );
    return router;
};
