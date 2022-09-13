import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtModule, JwtService } from '@nestjs/jwt';


export class Auth implements NestMiddleware {
    constructor(private jwtService: JwtService) { }
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        try {
            const decoded: any = this.jwtService.verify(token, { publicKey: 'alihaseeb' });
            console.log(decoded);

            req.user = decoded.id;
        } catch (err) {
            return res.status(401).send("Invalid Token");
        }
        return next();


    }
}
