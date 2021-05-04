import request from 'supertest';
import expressApp from '../../src/app';
import auth from '../../src/use-cases/auth';
let token:any;

const app = expressApp();

describe("Server must run without error", ()=> {

    it("should return code status 200", (done)=>{

        request(app).get('/')
            .expect(200, done);

    });

    it('should respond with a 201 status code with token if the posted body is valid', (done)=> {

        request(app).post('/api/token')
            .set('Accept', 'application/json')
            .send({ email: "foo@bar.com"})
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                token = res.text;
                done();
            });
            

    });

    it('should respond with a 400 status code without token', (done)=> {
        
        request(app).post('/api/justify')
            .set('Accept', 'text/plain')
            .send('Hello world')
            .expect(400)
            .end(done);

    });

    it('should respond with a 201 status code valid token', (done)=> {

        request(app).post('/api/justify')
            .set('Accept', 'text/plain')
            .set('Authorization', 'bearer ' + token)
            .send('Hello world')
            .expect(201)
            .end(done);
            
    });


});