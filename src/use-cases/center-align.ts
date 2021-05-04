

const centerAlign = (words:Array<string>, delimiter:number):string => {
    
    // Line justified
    let lineJustified:string = '';

    const lineLength = words.reduce((acc, item) => acc+item.length, 0);
    const diff = delimiter - lineLength;

    const intervals = words.length - 1;
    const space = diff / intervals;
    let extra = diff % intervals;


    for(let i=0; i < words.length; i++){
        let arranceSpace = space + (extra-->0 ? 1:0)
        lineJustified+= i==0? words[0]+" ":" ".repeat(arranceSpace)+words[i];
    }

    return lineJustified;

}

export default centerAlign;