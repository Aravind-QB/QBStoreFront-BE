import { Router } from 'express';
import { PLATFORM, cookieConfig } from '../config';
import { authenticateToken, generateAccessToken } from '../middleware';
import { COOKIE_NAME } from '../const';
const apiMethods = require(`../../${PLATFORM}/api`);
const router = Router();

export const V1DefaultRoutes = () => {

    router.post('/api/login', (req, res) => {
        const token = generateAccessToken({ username: req.body.username });
        res.cookie(COOKIE_NAME, token, cookieConfig.options)
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
