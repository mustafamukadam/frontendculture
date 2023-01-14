// function bark() {
//     console.log('Woof!');
//   }
// bark.animal = 'dog';
// console.log('>',bark.animal) // dog

/**
 * functions are objects! a special type of object.The code you write yourself isn't the actual function. 
 * The function is an object with properties. This property is invocable.
 */

/** 📌-----------------------------------📌  */
// WARNING: below code gives different output here vs when copy pasted in chrome console
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
//   const lydia = new Person('Lydia', 'Hallie');
  const sarah = Person('Sarah', 'Smith');
  
  console.log(lydia);
//   console.log(sarah);