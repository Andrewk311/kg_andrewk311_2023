const inputs = new Array(process.argv.length-2);
let words = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
const outputs = new Array(process.argv.length-2);

for (let i = 2; i < process.argv.length; i++){  
    inputs[i-2] = process.argv[i];
}

