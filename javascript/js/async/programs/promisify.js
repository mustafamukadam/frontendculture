// https://javascript.info/promisify
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function cb(error, data) {
        if (data) {
          resolve(data);
        } else if (error) {
          reject(error);
        }
      }
      args.push(cb);
      fn.call(this, args);
    });
  };
}

let loadScriptPromise = promisify(loadScript);
loadScriptPromise(url).then(() => {
  /*...*/
});

// TODO: Advanced version of promisify when - fn expects a callback with more arguments callback(err, res1, res2, ...)
