import * as dotenv from "dotenv";
import path from 'path';

dotenv.config();
 
const env = {
    MAX_LENGTH: process.env.MAX_LENGTH || 80,
    MAX_JWT_USAGE: process.env.MAX_JWT_USAGE || 80000,
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_ALGORITHM: process.env.JWT_ALGORITHM || 'HS256',
    JWT_EXPIRE: process.env.JWT_EXPIRE || '1d'
};

export default env;