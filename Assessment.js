function getlength(number) { 
    return number.toString().length; 
}

const inputs = new Array(process.argv.length-2);
let words = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
const outputs = new Array(process.argv.length-2);

for (let i = 2; i < process.argv.length; i++){  
    inputs[i-2] = process.argv[i];
}

let result = '';

for (let i = 0; i < inputs.length; i++){
    let x = inputs[i];
    const digits = new Array(getlength(x));
    for (let j = getlength(x) - 1; j >= 0; j--){
        digits[j] = words[x%10];
        x = Math.floor(x/10);
    }                                                    
    for (let k = 0; k < digits.length; k++){
        result += digits[k];
    }
    result += ',';                                             
}

console.log(result.substring(0,result.length-1));

