const promise = new Promise((resolve, reject) => {
    resolve("success1");
    reject("fail");
    resolve("success2");
});

promise
    .then(res => {
        console.log("then: ", res);
    }).catch(err => {
        console.log("catch: ", err);
    })