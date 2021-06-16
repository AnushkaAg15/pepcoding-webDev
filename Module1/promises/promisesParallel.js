const fs=require("fs");
let f1kapromise=fs.promises.readFile("./f1.txt");
//console.log(f1kapromise);
let f2kapromise=fs.promises.readFile("./f2.txt");
let f3kapromise=fs.promises.readFile("./f3.txt");

f1kapromise.then(function(data){
    console.log(data+"");
});
f1kapromise.catch(function(error){
    console.log(error);
});

f2kapromise.then(function(data){
    console.log(data+"");
});
f2kapromise.catch(function(error){
    console.log(error);
});

f3kapromise.then(function(data){
    console.log(data+"");
});
f3kapromise.catch(function(error){
    console.log(error);
});
//the ouput of this can be any order. 
//its just that koi bi kbi bi run ho skta hai 
//there is not any specific order 