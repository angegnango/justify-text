import centerAlign from '../../src/use-cases/center-align';

describe('center align suite test', () => {

    it('should apply center align on text', () => {

        const arrayOfText:Array<string> = ['we', 'are', 'going', 'to', 'see', 'if', 'it', 'works', 'ok'];
        const arrayAligned = centerAlign(arrayOfText, 40);
        expect(arrayAligned.length).toBe(40);

    });

});