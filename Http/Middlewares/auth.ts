import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken'


export class Auth implements NestMiddleware {
    constructor() { }
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(403).send({ message: "A token is required for authentication" });
        }
        try {
            const decoded: any = jwt.verify(token, 'alihaseeb');

            req.user = decoded.id;
        } catch (err) {
            return res.status(401).send({ message: "Invalid Token" });
        }
        return next();


    }
}
