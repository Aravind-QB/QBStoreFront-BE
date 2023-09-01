import express from 'express';
import { getNestedObject } from '../../utils/getNestedObject';

export function defaultMethod(req: express.Request) {
    const name = getNestedObject(req.body, ['address', 'city']);
    const city = getNestedObject(req.body, ['addressList', 0, 'city']);
    console.log(name, city);

    return 'hello world, magento';
}
