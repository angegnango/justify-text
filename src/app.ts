import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import endpoints from './endpoints/index';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

export default function expressApp(){

    const app: Application = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.text());

    // swagger configuration
    const swaggerFile: any = (process.cwd()+"/docs/swagger.json");
    const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8');
    const customCss: any = fs.readFileSync((process.cwd()+"/docs/swagger.css"), 'utf8');
    const swaggerDocument = JSON.parse(swaggerData);

    app.use(endpoints);

    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, undefined, undefined, customCss));

    app.use('/', (req: Request, res: Response) => res.status(200).send('Welcome'));

    return app;
}