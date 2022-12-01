let sampleData = [1,2,4,4,5,7,8]
let  odd = [];
let even = [];

for(i = 0 ; i < sampleData.length; i ++) {

 if(sampleData[i] % 2 === 0) {
   even.push(sampleData[i])
  // sampleData[i]
 }else{
   odd.push(sampleData[i])
 }

}

 console.log("odd",odd);
console.log("even",even);

// switch

switch ("value2") {

    case "value1":
        console.log("first value");
        break;
  
    case "value2":
         console.log("second value");
        break;     
   
    default:        
       console.log ('not found');
        break;
}

switch(variable/expression) {
  case value1:  
      // body of case 1
      break;

  case value2:  
      // body of case 2
      break;

  case valueN:
      // body of case N
      break;

  default:
      // body of default
}

// program using switch statement
let a = 2;

switch (a) {

  case 1:
      a = 'one';
      break;
  case 2:
      a = 'two';
      break;
  default:
      a = 'not found';
      break;
}
console.log(`The value is ${a}`);


// Ex Function

function funName(param1) {
  let sampleData = param1
 let  odd = [];
 let even = [];
 
 for(i = 0 ; i < sampleData.length; i ++) {
 
  if(sampleData[i] % 2 === 0) {
    even.push(sampleData[i])
   // sampleData[i]
  }else{
    odd.push(sampleData[i])
  }
 
 }
 
  console.log("odd",odd);
 console.log("even",even);
 }
 
 funName([2,3,4,7,9,10,11,12]);
 
 funName([2,3,4,7,9,10,11,33,44]);