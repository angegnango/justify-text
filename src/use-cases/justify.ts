import env from '../config/utils';
import textHelper from '../config/helper';
import centerAlign from './center-align';
import leftAlign from './left-align';


const justify = (text:string, limit:any= env.MAX_LENGTH):Array<string> => {
    
    console.log(`we got this payload `+ text)
    console.log(typeof(text))

    if(typeof(text)=='object') text = JSON.stringify(text);
    
    const arrayOfWord = text.split(' ');

    let arrayOfJustifiedText = [];

    let i = 0;
    const words = arrayOfWord.length;
    
    while(i < words){
        
        let j = i+1;
        let wordLength = arrayOfWord[i].trim().length;

        while(j < words && (wordLength+ arrayOfWord[j].trim().length + (j-i)) < limit){
         wordLength+= arrayOfWord[j].trim().length
         j++   
        }

        const diff = limit - wordLength;
        const numberOfwords = j-i;
        
        const line = textHelper.line(arrayOfWord, i, j);

        if(numberOfwords ==1 || j>=words){
        
            arrayOfJustifiedText.push(leftAlign(line, limit));
        } else{
            arrayOfJustifiedText.push(centerAlign(line.split(' '), limit));
        }

        i=j;
    }

    return arrayOfJustifiedText;

}

export default justify;