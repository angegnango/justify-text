

const lineFromArray =(words:Array<string>, start:number, end:number):string => {

    let line =''

    for(let i=start; i<end; i++) line+=words[i]+" ";

    return line.trim();
}

const textFromArray = (words: Array<string>):string => {

    let text =''

    for(let i=0; i<words.length; i++) text+=words[i];

    return text.trim();
}

const textHelper ={
    line: lineFromArray,
    text: textFromArray
}

export default textHelper;