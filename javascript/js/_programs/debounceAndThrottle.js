//https://www.frontendinterviewhandbook.com/blog/a-glimpse-into-front-end-interviews/

function debounce(fn, duration) {
    let id;
    return function (...args) {
      if (id) {
        // reset timeout and prevent it from triggering
        // if debounced function is called within duration
        clearTimeout(id);
      }
      id = setTimeout(() => {
        fn(...args);
      }, duration);
    };
  }
  
  function throttle(fn, duration) {
    let id;
    return function (...args) {
      if (id) {
        // if throttled function is called within duration,
        // do nothing
        return;
      }
  
      fn(...args);
  
      id = setTimeout(() => {
        id = null; // release "lock"
      }, duration);
    };
  }
  
  // usage example
  const helloWorld = () => {
    console.log('hello world');
  };
  const debouncedHelloWorld = debounce(helloWorld, 1000);
  const throttledHelloWorld = throttle(helloWorld, 1000);