// write answers and explanation in toggle like Lydia repo and open MD preview to refer questions
/** 📌-------------- let initialization ---------------------📌 */

// let x = 1;

// function func() {
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   let x = 2;
// }
// func();


// ------------- var -------------
// var x = 1;

// function func() {
//   console.log(x);
//   var x = 2;
// }
// func();

// var x = 1;

// function func() {
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   let x = 2;
// }
// func();

// let x = 1;

// function func() {
//   console.log(x); // undefined
//   var x = 2;
// }
// func();



/** 📌-----------------------------------📌  */
// function sayHi() {
//   console.log(name); // undefined
//   console.log(age); // ReferenceError
//   var name = 'Lydia';
//   let age = 21;
// }

// sayHi();


/** 📌-----------------------------------📌  */
// for every iteration, i will refer to same global variable i
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// // during each iteration, i will have new value scoped to loop
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
