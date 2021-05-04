import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import endpoints from './endpoints/index';

export default function expressApp(){

    const app: Application = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.text());

    app.use(endpoints);

    app.use('/', (req: Request, res: Response) => res.status(200).send('Welcome'));
    
    return app;
}