const fs=require("fs");

      //A                //B
let pendingpromises=fs.promises.readFile("./f12.txt");
console.log(pendingpromises);

//for succes
pendingpromises.then(function(data){
    console.log(pendingpromises+"");
    console.log(data+"");
    console.log("inside scb");

});

//for failback
pendingpromises.catch(function(error){
    console.log(pendingpromises);
    //console.log(error);
    console.log("inside fcb");
})