import * as dotenv from "dotenv";

dotenv.config();

const envs = process.env.PLATFORM === 'magento' ?
    require('./magento') :
    require('./shopify');


const PORT = envs.PORT;
export {PORT}