import { Request, Response } from 'express';
import auth from '../use-cases/auth';
import justify from '../use-cases/justify';
import cache from '../config/cache';
import textHelper from '../config/helper';



const { setTokenUsage, getTokenUsage } = cache;
const { generateToken, verifyToken } = auth;


const getToken = (req: Request, res: Response) => {

    const payload = req.body;
    const token = generateToken(payload);
    const check = token.split('.');

    if(check.length ==3){
        setTokenUsage(token);
        return res.status(201).send(token);
    }else{
        res.status(404).send(token);
    }

}

const justifyText = (req: Request, res: Response) => {
    
    const text = req.body;
    const arrayOfText = justify(text);
    const textJustified = textHelper.text(arrayOfText);
    res.status(201).send(textJustified);
}

const controller = { token: getToken, justify: justifyText }


export default controller;