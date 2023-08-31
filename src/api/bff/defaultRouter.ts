import { Router } from 'express';
import { PLATFORM } from '../../config';
import { magentoMethod } from '../magento';
import { shopifyMethod } from '../shopify';

const router = Router();

export const V1DefaultRoutes = () => {

    router.get(
        '/default', (req, res) => {
            switch (PLATFORM) {
                case 'magento':
                    const responseMagento = magentoMethod();
                    res.send(responseMagento);
                    break;
            
                case 'shopify':
                    const responseShopify = shopifyMethod();
                    res.send(responseShopify);
                    break;
            
                default:
                    break;
            }
        }
    );

    return router;
};
