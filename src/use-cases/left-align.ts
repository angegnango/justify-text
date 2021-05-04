const leftAlign = (text:string, delimiter:number):string => {
    
    // get gap of space between delimiter and length of text
    const gapSpace:number = delimiter - text.length;

    // add the gap 
    const textAligned = text.trim()+" ".repeat(gapSpace);

    return textAligned;
}

export default leftAlign;