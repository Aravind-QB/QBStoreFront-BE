import express from 'express';
import { GET_ALL_PRODUCTS } from '../../bff/const';
import { Client } from 'pg';

export async function defaultMethod(req: express.Request) {

    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'evershop',
        user: 'evershopuser',
        password: 'password',
    })
    await client.connect();
    // const result = await client.query('SELECT* FROM product;')
    const result = await client.query(`SELECT * FROM category LEFT JOIN category_description AS des
    ON des.category_description_category_id = category.category_id
    WHERE category_id IN (
        SELECT category_id
        FROM category
        limit 1
    );`);

    await client.end()
    return result.rows;
}

export function getAllProducts() {
    return GET_ALL_PRODUCTS;
}

export function getProductsById(id: string) {
    return GET_ALL_PRODUCTS.find(x => x.id == id);
}
