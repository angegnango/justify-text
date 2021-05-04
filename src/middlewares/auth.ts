import {Request, Response, NextFunction} from 'express';
import cache from '../config/cache';
import auth from '../use-cases/auth';
import env from '../config/utils';

const { setTokenUsage, getTokenUsage } = cache;

const authenticate = async(req:Request, res:Response, next:NextFunction) =>{
    
    const authHeader = req.headers.authorization;

    if (authHeader) {
        
        const token = authHeader.split(' ')[1];

        const verify = auth.verifyToken(token);

        if(typeof(verify)!='string'){

            const tokenUsage = await getTokenUsage(token)
            
            const text = req.body;

            const textLength = text.length;

            if((textLength+tokenUsage>env.MAX_JWT_USAGE)) return res.status(402).send('Payment required');
            
            setTokenUsage(token, textLength+tokenUsage)

            next();
        } 
        else{
            return res.status(404).send(verify);
        }

    } else {
        return res.status(400).send('Token are missing');
    }
}

export default authenticate;