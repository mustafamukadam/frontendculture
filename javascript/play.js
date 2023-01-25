class A {
    fooBind = this.foo.bind(this)
    constructor(cb){
        this.state = "mustafa"
        cb(this.fooBind)
        // cb(this.foo)
    }

    foo(data){
        console.log('this: ',this)
    }
}

let a = new A((res)=>res("hi"))
console.log('a: ',a)
