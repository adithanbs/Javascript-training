// function a (val1) {
//     var p1 = val1

//     return function b(val2){
//        let p2 = val2
//        return function c(val3){
//           console.log(p1+p2+val3)
//        }
//     }
// }

// a(10)(20)(30)

// console.log("first console");

// (setTimeout(() => {
//     console.log("callBack")
// },3000))

// console.log("last console");

// function callBack (a) {
//   return a + 3
// }

// function higherFun (val,val2) {
// return val2(val)

// }

// console.log(higherFun(10,callBack));

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 5000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();

