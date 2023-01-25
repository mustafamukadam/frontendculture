const STATE = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECTED: "rejected"
}

class MyPromise{
    thenCbs = []
    catchCbs = []
    state = []

    // onSuccessBind = this.onSuccess.bind(this) // FIX
    // onFailureBind = this.onFailure.bind(this)// FIX
    
    constructor(cb){
        this.state = STATE.PENDING
        cb(this.onSuccess, this.onFailure)
    }

    then(thenCb){
        this.thenCbs.push(thenCb)
        // probably run cb also        
    }

    onSuccess(data){
        console.log('succ: ',this)
        if(state !== STATE.PENDING) return
        this.state = STATE.FULFILLED
        this.thenCbs.forEach(thenCb => thenCb(data))
        this.thenCbs = []
    }

    onFailure(){
        if(this.state !== STATE.PENDING) return
        this.state = STATE.REJECTED
        this.catchCbs.forEach(catchCb => catchCb(data))
        this.catchCbs = []
    }
}

let p = new MyPromise((res, rej)=>{
    //async
    res("hi");
    res("bye");
    // setTimeout(() => {
    //     res("hello");
    // }, 1000); 
    // rej();
})
console.log('>',p)
// p.then(data => console.log(data))


