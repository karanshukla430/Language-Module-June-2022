function sum(a) {
  // ?? 
  if(a===undefined) return 0
  let num=a;
    return function adder(b){
        if(b===undefined){
            return num;
        }
        num+=b;
        return adder;
    }
/**
 * Assignment: Define sum function above such that following operations work
 */
console.log(sum(1)(2)(3)(4)()); // 10
console.log(sum(1)(2)(3)()); // 6
console.log(sum(1)(2)()); // 3
console.log(sum()); // 0
