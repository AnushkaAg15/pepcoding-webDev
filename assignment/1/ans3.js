let input=[
    { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
    { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
    { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] },
    { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] },
    { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] },
    { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] },
  ];
let ans=[];
for(let i=0;i<input.length;i++){
    let avg_rain=0;
    let sum=0;
    for(let j=0;j<input[i].rainfall.length;j++){
         sum+=input[i].rainfall[j];
    }
    avg_rain=sum/input[i].rainfall.length;
    let obj={
       name:input[i].name ,
       avgRainfall:avg_rain
    };
    ans.push(obj);

} 
console.log(ans); 