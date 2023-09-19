import express from 'express';
import { GET_ALL_PRODUCTS } from '../../bff/const';
import { Client } from 'pg';

 function createDatabaseConnection(){
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'evershop',
        user: 'evershopuser',
        password: 'password',
    })
    client.connect();
    return client;
}
export async function defaultMethod(req: express.Request) {

    const client = createDatabaseConnection();
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
/*
SELECT p.product_id, c.short_description, c.name,p.price, c.description, p.image  from product p inner join category_description c ON p.category_id = c.category_description_category_id;
*/
export async function getAllProducts() {
    const client = createDatabaseConnection();
    const result = await client.query(`SELECT p.product_id, c.short_description, c.name,p.price, c.description, p.image, pi.qty from product p inner join category_description c  ON p.category_id = c.category_description_category_id inner join product_inventory pi ON p.product_id = pi.product_inventory_product_id;
    `)
    await client.end()
    return result.rows;
}

export async function getProductsById(id: string) {
    const client = createDatabaseConnection();
    const result = await client.query(`SELECT p.product_id, c.short_description, c.name,p.price, c.description, p.image, pi.qty from product p inner join category_description c  ON p.category_id = c.category_description_category_id inner join product_inventory pi ON p.product_id = pi.product_inventory_product_id WHERE p.product_id=$1;
    `)
    console.log("RESULT2", result)
    await client.end()
    return result.rows;
    //return GET_ALL_PRODUCTS.find(x => x.id == id);
}
