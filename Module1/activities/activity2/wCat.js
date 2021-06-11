//console.log(process.argv);
let fs=require("fs");
let input=process.argv.splice(2);
//console.log(input);
let flags=[];
let files=[];
for(let i=0;i<input.length;i++){
    if(input[i].startsWith("-")){
        flags.push(input[i]);
    }else{
        files.push(input[i]);
    }
}

// console.log(flags);
// console.log(files);

let data="";
for(let i=0;i<files.length;i++){
    let fileKaData=fs.readFileSync(files[i]);
    data+=i==files.length-1?fileKaData:fileKaData+"\n";
}
console.log(data);