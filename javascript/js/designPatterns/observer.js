/**
 * using ES6 class
 */
class Observable{
    constructor(){
        this.observers = []
    }

    subscribe(fn){
        this.observers.push(fn)
    }
    unSubscribe(fn){
        this.observers = this.observers.filter(observer => observer !== fn)
    }
    notify(data){
        this.observers.forEach(observer=>observer(data))
    }
}

/**
 * using function
 */
 function FObservable(){
    this.observers = []
    
    // Before I was doing this. I concluded on my own that this is wrong way because it will create 
    //separate copy of function for every instance

    // this.subscribe = function(fn){
    //     this.observers.push(fn)
    // }

    // this.unSubscribe = function(fn){
    //     this.observers = this.observers.filter(observer => observer !== fn)
    // }

    // this.notify = function(data){
    //     this.observers.forEach(observer=>observer(data))
    // }
 }

 FObservable.prototype.subscribe = function(fn){
    this.observers.push(fn)
}
 FObservable.prototype.unSubscribe = function(fn){
    this.observers = this.observers.filter(observer => observer !== fn)
}
 FObservable.prototype.notify = function(data){
    this.observers.forEach(observer=>observer(data))
}

//usage:
const observable = new FObservable()

//subscribe
function logger(data){
    console.log('log: ', data)
}
function makeAlert(data){
    // alert(data)
}

observable.subscribe(logger)
observable.subscribe(makeAlert)

//notify
observable.notify("Button clicked!")

//unsubscribe
observable.unSubscribe(makeAlert)

//notify again
observable.notify("Button clicked Again!")