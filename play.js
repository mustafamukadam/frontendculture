//2, 3, 5, 7, 11, 13
function isPrime(num) {
  if(num <= 1) return false
  if(num == 2) return true

  if(num%2 == 0) return false
  for(let i = 2; i <= Math.sqrt(num); i+=2){
    if(num%i === 0) return false
  }
  return true
}


// console.log('2',isPrime(2))
// console.log('3',isPrime(3))
// console.log('4',isPrime(4))
// console.log('5',isPrime(5))
// console.log('6',isPrime(6))
// console.log('7',isPrime(7))
// console.log('8',isPrime(8))
console.log('9',isPrime(9))
// console.log('10',isPrime(10))
// console.log('11',isPrime(11))
// console.log('12',isPrime(12))
// console.log('13',isPrime(13))


