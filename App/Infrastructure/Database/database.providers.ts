import { Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import Todo from '../Model/todo.model';
import { database } from '../Config/index';
import User from '../Model/user.model';

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

            sequelize.addModels([Todo, User]);
            await sequelize.sync();
            Logger.log("!!!!!!!!Database connected successfully!!!!!!!!!")
            return sequelize;
        },
    },
];