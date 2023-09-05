import * as dotenv from "dotenv";

dotenv.config();

let platform = process.env.PLATFORM || 'magento';
const variables = require(`../../${platform}/config`);

const PORT = variables?.PORT;
const PLATFORM = variables?.PLATFORM;
const cookieConfig = {
    options: {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    },
  };

export { PORT, PLATFORM, cookieConfig }