import * as dotenv from "dotenv";

dotenv.config();
 
const env = {
    MAX_LENGTH: process.env.MAX_LENGTH || 80,
    MAX_JWT_USAGE: process.env.MAX_JWT_USAGE || 80000,
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_OPTIONS: { expiresIn: '1d'}
};

export default env;