//⭐️ https://jsitor.com/9opNgtvHo

let intervalId = 0
let intervalIdMap = {}

function mySetInterval(cb, delay, ...args){
  let id = intervalId++
  
  function repeat(){
    intervalIdMap[id] = setTimeout(() => {
      cb(...args)
      if(intervalIdMap[id]) repeat()
    }, delay);
  }

  repeat()
  return id
}

function myClearSetInterval(id){
  clearTimeout(intervalIdMap[id])
  delete intervalIdMap[id]
}

let counter = 0
function display(){
  ++counter
  if(counter > 3) myClearSetInterval(myid)
  console.log('Hello..',)
}

let myid = mySetInterval(display, 1000)