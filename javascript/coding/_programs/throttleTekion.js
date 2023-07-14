function logName(name){
    console.log(name)
    }
    
    throttleLogName = throttle(logName, 1000)
    throttleLogName('a')
    throttleLogName('ab')
    throttleLogName('abc')
    setTimeout(()=>{
    throttleLogName('abcd')
    }, 1500)
    
    function throttle(cb, delay){
    let wait = false
    let waitArgs = null;
    
    function fn(){
      if(waitArgs !== null){ 
          cb(...waitArgs)
        waitArgs = null
        wait = true
        //again wait 1 sec
        setTimeout(fn, delay)
      }
      else{
            wait=false
      }
      }
    
    return function(...args){
        if(wait){
      waitArgs = args
      return
      }
      
      cb(...args)
      wait = true
      
      setTimeout(fn,delay)
    }
    }
    
    