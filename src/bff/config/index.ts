import * as dotenv from "dotenv";

dotenv.config();

let platform = process.env.PLATFORM || 'magento';
const variables = require(`../../${platform}/config`);

const PORT = variables?.PORT;
const PLATFORM = variables?.PLATFORM;

export { PORT, PLATFORM }