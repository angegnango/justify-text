import auth from '../../src/use-cases/auth';

const { generateToken, verifyToken } = auth;

describe("jsonwebtoken service suite test", ()=> {

    test("generate token should fail without payload", ()=> {
        const token = generateToken(null);
        expect(token).toBe('Missing payload');
    });

    test("generate token should fail with bad payload", ()=> {
        const credendial = { name: "username"}
        const token = generateToken(credendial);
        expect(token).toBe('Payload need to contain email');
    });

    test("generate token should succeed with correct payload", ()=> {
        const credendial = { email: "foo@bar.com"}
        const token = generateToken(credendial);
        const data = token?.split('.');
        expect(data?.length).toBe(3);
    });

    test("generate token with correct payload should succeed", ()=> {
        const credendial = { email: "foo@bar.com"}
        const token = generateToken(credendial);
        const data = token?.split('.');
        expect(data?.length).toBe(3);
    });

    test("verify token with bad token should return error message", ()=> {
        const token = 'token';
        const payload = verifyToken(token);
        expect(payload).toBe('jwt malformed');
    });

    test("verify token with correct token should succeed", ()=> {
        const credendial = { email: "foo@bar.com"}
        const token = generateToken(credendial);
        const payload = verifyToken(token);
        expect(payload.email).toBe("foo@bar.com");
    });

});