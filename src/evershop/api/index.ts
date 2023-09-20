import express from 'express';
import { GET_ALL_PRODUCTS } from '../../bff/const';
import { Client } from 'pg';
import { PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD }  from '../constant/index';

 function createDatabaseConnection(){
    const client = new Client({
        host : PG_HOST,
        port : PG_PORT,
        database : PG_DATABASE,
        user : PG_USER,
        password : PG_PASSWORD,
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

export async function getAllProducts() {
    const client = createDatabaseConnection();
    const result = await client.query(`SELECT p.product_id, pd.name as product_name, c.name as category,p.price, p.image, pi.qty from product p inner join category_description c  ON p.category_id = c.category_description_category_id inner join product_inventory pi ON p.product_id = pi.product_inventory_product_id inner join product_description pd ON pd.product_description_product_id = p.product_id;
    `)
    await client.end()
    return result.rows;
}

export async function getProductsById(id: string) {
    const client = createDatabaseConnection();
    
    const result = await client.query(`SELECT p.product_id, pd.name as product_name, c.name as category,p.price, p.image, pi.qty from product p inner join category_description c  ON p.category_id = c.category_description_category_id inner join product_inventory pi ON p.product_id = pi.product_inventory_product_id inner join product_description pd ON pd.product_description_product_id = p.product_id WHERE p.product_id=$1;
    `,[id])
    await client.end()
    return result.rows;
}
