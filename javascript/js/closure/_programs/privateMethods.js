const counter = (function () {
    
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment() {
        changeBy(1); // remember: 'this' here is {/* this return object */} itself
    },
    
    decrement() {
        changeBy(-1);
        // privateCounter -= 1; // of course, this also works
      },
  
      value() {
        return privateCounter;
      },
    };

  })();
  
  console.log(counter.value()); // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2.
  
  counter.decrement();
  console.log(counter.value()); // 1.
  