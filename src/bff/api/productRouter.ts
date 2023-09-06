import { Router } from 'express';
import { PLATFORM } from '../config';
const apiMethods = require(`../../${PLATFORM}/api`);
const router = Router();

export const ProductRoutes = () => {

    router.get(
        '/getAllProducts', (req, res) => {
            const response = apiMethods.getAllProducts();
            res.json({ success: true, data: response });
        }
    );
    
    router.get(
        '/getProductsById/:id', (req, res) => {
            const response = apiMethods.getProductsById(req.params?.id);
            res.json({ success: true, data: response });
        }
    );

    return router;
};
