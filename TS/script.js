// let username:string ='karan'
// console.log(typeof username)
// let name1='karan';
// let u:any = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// u.runANonExistentMethod(); // Error: Property 'runANonExistentMethod' does not exist on type 'boolean'.
// console.log(Math.round(u)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.// define our tuple
// let ourTuple: [number, boolean, string];
// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// console.log(ourTuple);
// const car: { type: string, mileage?: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota",
// };
// car.mileage = 2000;
// Try creating a new interface using it below
// interface Rectangle {
//     height: number,
//     width: number
//   };
//   const rectangle: Rectangle = {
//     height: 20,
//     width: 10
//   };
//   console.log(rectangle);
// the `?` operator here marks parameter `c` as optional
// function add(a: number, b: number, c?: number) {
//     return a + b + (c || 1);
//   }
//   console.log(add(2,5))
var x = 'hello';
console.log(x.length);
