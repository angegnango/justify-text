import http from 'http';
import expressApp from '../app';
import {Application} from 'express';
import env from '../config/utils';



const app = expressApp();


const runServer = (app:Application)=> {

    const server = http.createServer(app);

    server.listen(env.PORT, () => console.log(`Server are running on port ${env.PORT}`))

}

runServer(app);