const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.split('');
    let arr = [];
    let newArr = [];
    let words = '';
    while(expr.length > 0) {
        let sliced = expr.splice(0, 10);
        if(sliced.join('') === '**********') arr.push([]);
        else arr.push(sliced);
    }
    for(let subArr of arr) {
        if(subArr.length === 0 || subArr === []) newArr.push(' ');
        while(subArr.length > 0) {
            let cutter = subArr.splice(0 , 2).join('');
            if(cutter === '00') continue;
            else if(cutter === '10') newArr.push('.');
            else if(cutter === '11') newArr.push('-');
        }
        let converter = newArr.splice(0, newArr.length).join('');
        if(MORSE_TABLE[converter] !== undefined) words += MORSE_TABLE[converter];
        else words += ' ';
    }
    
    return words;
}


module.exports = {
    decode
}