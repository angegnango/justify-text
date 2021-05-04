import leftAlign from '../../src/use-cases/left-align';

describe('left align suite test', () => {

    it('should apply left align on text', () => {

        const text:string = 'we are going to see if it work';
        const textAligned:string = leftAlign(text, 40);
        expect(textAligned.length).toBe(40);
        expect(textAligned).toBe(text+" ".repeat(40-text.length));

    });

});