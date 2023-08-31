import * as dotenv from "dotenv";

dotenv.config();
let variables;

switch (process.env.PLATFORM) {

    case 'magento':
        variables = require('./magento');
        break;

    case 'shopify':
        variables = require('./shopify');
        break;

    default:
        variables = require('./magento');
        break;
}

const PORT = variables?.PORT;
const PLATFORM = variables?.PLATFORM;

export { PORT, PLATFORM }