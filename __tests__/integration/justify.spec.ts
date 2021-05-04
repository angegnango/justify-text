import justify from '../../src/use-cases/justify';



describe('Justify text suite text', ()=> {

    it('should justify the given text', ()=> {

        const inputTxt = 'Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint.'
        const arrayOfJustifiedText = justify(inputTxt, 80);
        const firstLine = arrayOfJustifiedText[0];
        const lastLine = arrayOfJustifiedText[arrayOfJustifiedText.length -1];
    
        expect(firstLine.length).toBe(lastLine.length);
        expect(firstLine.length).toBe(80);
        
    });

});