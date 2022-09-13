import { Logger } from '@nestjs/common'
import Redis from 'ioredis'

export class RedisClient {
    constructor() { }
    static start() {
        const client = new Redis(({ port: 6379, host: "127.0.0.1" }))
        console.log(client.status, "::::::::::::::::::::::::");
        this.registerListeners(client)
    }

    static registerListeners(client) {

        client.on('connect', () => {
            Logger.log(
                `[Redis]: Connected to redis server at 127.0.0.1:6379`,
            );
        });

        client.on('error', (error) => {
            Logger.log(`[Redis]: Can not connect to redis ${error}`);
            process.exit(1);
        });

    }
}
