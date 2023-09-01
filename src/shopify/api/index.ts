import express from 'express';

export function defaultMethod(req: express.Request) {
    return 'hello world, shopify';
}