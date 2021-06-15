const fs=require("fs");
let pendingpromises=fs.promises.readFile("./f12.txt");
console.log(pendingpromises);
pendingpromises.then(function(data){
    console.log(pendingpromises+"");
    console.log(data+"");
    console.log("inside scb");

});
pendingpromises.catch(function(error){
    console.log(pendingpromises);
    //consile.log(error);
    console.log("inside fcb");
})