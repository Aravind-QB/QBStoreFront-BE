import { Router } from 'express';
import { PLATFORM } from '../config';
const apiMethods = require(`../../${PLATFORM}/api`);
const router = Router();

export const ProductRoutes = () => {

    router.get(
        '/getAllProducts', async(req, res) => {
            const response = await apiMethods.getAllProducts();
            res.json({ success: true, data: response });
        }
    );
    
    router.get(
        '/getProductsById/:id', async(req, res) => {
            const response = await apiMethods.getProductsById(req.params?.id);
            res.json({ success: true, data: response });
        }
    );

    return router;
};
