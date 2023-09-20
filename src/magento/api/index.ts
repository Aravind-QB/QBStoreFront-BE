import express from 'express';
import { GET_ALL_PRODUCTS } from '../../bff/const';
import { getNestedObject } from '../../utils/getNestedObject';

export function defaultMethod(req: express.Request) {
    const name = getNestedObject(req?.body, ['address', 'city']);
    const city = getNestedObject(req?.body, ['addressList', 0, 'city']);
    return 'hello world, magento';
}

export function getAllProducts() {
    return GET_ALL_PRODUCTS;
}

export function getProductsById(id: string) {
    return GET_ALL_PRODUCTS.find(x => x.id == id);
}