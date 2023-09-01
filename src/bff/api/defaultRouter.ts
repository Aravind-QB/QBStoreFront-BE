import { Router } from 'express';
import { PLATFORM } from '../config';
const apiMethods = require(`../../${PLATFORM}/api`);

const router = Router();

export const V1DefaultRoutes = () => {

    router.get(
        '/default', (req, res) => {
            const response = apiMethods.defaultMethod();
            res.send(response);
        }
    );

    return router;
};
