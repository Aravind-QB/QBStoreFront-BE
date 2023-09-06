import express from 'express';
import { GET_ALL_PRODUCTS } from '../../bff/const';

export function defaultMethod(req: express.Request) {
    return 'hello world, shopify';
}

export function getAllProducts() {
    return GET_ALL_PRODUCTS;
}

export function getProductsById(id: string) {
    return GET_ALL_PRODUCTS.find(x => x.id == id);
}