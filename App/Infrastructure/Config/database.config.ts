import * as dotenv from 'dotenv';
dotenv.config();
import { IDatabaseConfig } from './types/database.type';
import { Logger } from '@nestjs/common';

export const database: IDatabaseConfig = {
  USERNAME: process.env.DB_USER,
  PASSWORD: process.env.DB_PASS,
  DATABASE: process.env.DB_NAME,
  HOST: process.env.DB_HOST,
  DIALECT: process.env.DB_DIALECT,
};
