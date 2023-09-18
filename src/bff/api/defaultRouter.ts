import { Router } from 'express';
import { PLATFORM, COOKIE_CONFIG } from '../config';
import { authenticateToken, generateAccessToken } from '../middleware';
import { COOKIE_NAME } from '../const';
const apiMethods = require(`../../${PLATFORM}/api`);
const router = Router();

export const V1DefaultRoutes = () => {

    router.post('/api/login', (req, res) => {
        const token = generateAccessToken({ username: req?.body?.username || '' });
        res.json({'token': token});
        // const token = generateAccessToken({ username: req.body.username });
        // res.cookie(COOKIE_NAME, token, COOKIE_CONFIG.options)
        // res.json();
    });

    router.get(
        '/api/default', authenticateToken, async (req, res) => {
            const response = await apiMethods.defaultMethod();
            res.json(response);
        }
    );

    router.post('/api/default/:id', authenticateToken, (req, res) => {
        const response = apiMethods.defaultMethod(req);
        res.send(response);
    }
    );
    return router;
};
