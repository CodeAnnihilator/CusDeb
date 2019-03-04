import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 3000
export const host = process.env.HOST || '0.0.0.0'
export const prefix = process.env.PREFIX || ''
