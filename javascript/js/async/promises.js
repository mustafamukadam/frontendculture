function asyncResolve() {
  function cb(resolve, reject) {
    resolve("success");
  }
  return new Promise(cb);
}

function asyncReject() {
  function cb(resolve, reject) {
    reject("fail!");
  }
  return new Promise(cb);
}

let p1 = asyncResolve();
let p2 = asyncReject();

p1.then(
  (data) => console.log(data),
  (error) => console.log(error)
);
p2.then(
  (data) => console.log(data),
  (error) => console.log(error)
);

// -----------------------------------------------------------------

//  A common trick is to map an array of job data into an array of promises, and then wrap that into Promise.all.
let urls = [
  "https://api.kanye.rest/1",
  "https://api.kanye.rest/2",
  "https://api.kanye.rest/3",
];

let promises = urls.map((url) => fetch(url));

Promise.all(promises).then(console.log);
// Promise.all(promises).then((responses) => responses.forEach(console.log));
Promise.all(promises).then((responses) =>
  responses.forEach((res) => {
    res.json().then(console.log);
  })
);
