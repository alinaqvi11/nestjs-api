import { Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import user from '../Model/todo.model';
import { database } from '../Config/index';

const mysql = database;

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize(
                {
                    dialect: 'mysql',
                    host: mysql.HOST,
                    username: mysql.USERNAME,
                    password: mysql.PASSWORD,
                    database: mysql.DATABASE,
                    logging: false,
                });

            sequelize.addModels([user]);
            await sequelize.sync();
            Logger.log("!!!!!!!!Database connected successfully!!!!!!!!!")
            return sequelize;
        },
    },
];