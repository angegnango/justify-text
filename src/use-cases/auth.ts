import jwt from 'jsonwebtoken';
import env from '../config/utils';


const generateToken = (payload:any) => {

    if(payload==undefined || null) return 'Missing payload';

    if(payload.hasOwnProperty('email')){

        const token = jwt.sign(payload, env.JWT_SECRET, env.JWT_OPTIONS );

        return token;

    }

    else return 'Payload need to contain email';

}

const verifyToken = (token:string) => {

  try{

    const payload:any = jwt.verify(token, env.JWT_SECRET);

    return payload

  }catch(err){ return err.message}
  
}

const auth = { generateToken, verifyToken }
export default auth;